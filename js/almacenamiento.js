/* =====================================================================
   almacenamiento.js — Ranking, estadísticas y preferencias (localStorage)
   ---------------------------------------------------------------------
   localStorage solo guarda texto, por eso los objetos se convierten con
   JSON.stringify al guardar y con JSON.parse al leer.
   ===================================================================== */

"use strict";

const CLAVE_RANKING = "trivia_ranking";
const CLAVE_STATS = "trivia_stats";
const CLAVE_PREFS = "trivia_prefs";
const MAXIMO_RANKING = 10;

/* ---------- Funciones base de lectura y escritura ---------- */

// Lee un valor de localStorage. Si no existe o falla, devuelve el valor por defecto.
function leer(clave, porDefecto) {
  try {
    const texto = localStorage.getItem(clave);
    return texto ? JSON.parse(texto) : porDefecto;
  } catch (error) {
    return porDefecto; // navegación privada, datos dañados, etc.
  }
}

// Guarda un valor en localStorage. Devuelve true si se pudo guardar.
function escribir(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch (error) {
    return false;
  }
}

/* ---------- Ranking ---------- */

function obtenerRanking() {
  const ranking = leer(CLAVE_RANKING, []);
  return Array.isArray(ranking) ? ranking : [];
}

// Agrega la partida, ordena de mayor a menor puntaje y conserva el top 10.
// Devuelve la posición que ocupó la partida (1 a 10) o 0 si no entró al top.
function guardarEnRanking(partida) {
  const ranking = obtenerRanking();
  ranking.push(partida);
  // Si hay empate en puntaje, queda primero la partida más antigua
  ranking.sort(
    (a, b) => b.puntaje - a.puntaje || new Date(a.fecha) - new Date(b.fecha),
  );
  const top = ranking.slice(0, MAXIMO_RANKING);
  escribir(CLAVE_RANKING, top);
  return top.indexOf(partida) + 1;
}

function borrarRanking() {
  try {
    localStorage.removeItem(CLAVE_RANKING);
  } catch (error) {
    /* no hay nada que borrar */
  }
}

/* ---------- Estadísticas por jugador ---------- */

// Los nombres se comparan sin importar mayúsculas: "Ana" y "ana" son la misma jugadora.
function claveJugador(nombre) {
  return nombre.trim().toLowerCase();
}

function estadisticasVacias(nombre) {
  return {
    nombre: nombre,
    partidas: 0,
    respondidas: 0,
    aciertos: 0,
    mejorPuntaje: 0,
    categorias: {}, // { geografia: { respondidas, aciertos }, ... }
    mejores: {}, // mejor puntaje por combinación: { 'historia|facil': 1450, ... }
  };
}

function obtenerEstadisticas(nombre) {
  const todas = leer(CLAVE_STATS, {});
  return todas[claveJugador(nombre)] || estadisticasVacias(nombre);
}

// Actualiza las estadísticas del jugador con los datos de la partida terminada.
// "respuestas" es el arreglo con lo que pasó en cada una de las 10 preguntas.
function actualizarEstadisticas(partida, respuestas) {
  const todas = leer(CLAVE_STATS, {});
  const clave = claveJugador(partida.nombre);
  const stats = todas[clave] || estadisticasVacias(partida.nombre);

  stats.partidas += 1;
  stats.mejorPuntaje = Math.max(stats.mejorPuntaje, partida.puntaje);

  respuestas.forEach((respuesta) => {
    const categoria = respuesta.pregunta.categoria;
    if (!stats.categorias[categoria]) {
      stats.categorias[categoria] = { respondidas: 0, aciertos: 0 };
    }
    stats.respondidas += 1;
    stats.categorias[categoria].respondidas += 1;
    if (respuesta.esCorrecta) {
      stats.aciertos += 1;
      stats.categorias[categoria].aciertos += 1;
    }
  });

  const combinacion = partida.categoria + "|" + partida.dificultad;
  stats.mejores[combinacion] = Math.max(
    stats.mejores[combinacion] || 0,
    partida.puntaje,
  );

  todas[clave] = stats;
  escribir(CLAVE_STATS, todas);
  return stats;
}

// Mejor puntaje del jugador en una combinación de categoría y dificultad (0 si no ha jugado).
function obtenerMejorPuntaje(nombre, categoria, dificultad) {
  const stats = obtenerEstadisticas(nombre);
  return stats.mejores[categoria + "|" + dificultad] || 0;
}

/* ---------- Preferencias (sonido, tema y último nombre usado) ---------- */

function obtenerPreferencias() {
  const porDefecto = { sonido: true, tema: null, nombre: "" };
  return Object.assign(porDefecto, leer(CLAVE_PREFS, {}));
}

function guardarPreferencias(cambios) {
  const preferencias = Object.assign(obtenerPreferencias(), cambios);
  escribir(CLAVE_PREFS, preferencias);
  return preferencias;
}
