/* =====================================================================
   juego.js — Lógica del juego: preguntas, tiempo, comodines y puntaje
   ---------------------------------------------------------------------
   Este archivo NO toca el HTML directamente: cuando algo cambia, llama a
   las funciones de ui.js (mostrarPregunta, mostrarRetroalimentacion...).
   ===================================================================== */

"use strict";

// Reglas del juego en un solo lugar: si cambian, solo se edita este objeto.
const CONFIG = {
  PREGUNTAS_POR_PARTIDA: 10,
  TIEMPO_POR_PREGUNTA: 20, // segundos
  TIEMPO_EXTRA: 10, // segundos que suma el comodín de tiempo
  PUNTOS_CORRECTA: 100,
  PUNTOS_POR_SEGUNDO: 5, // bonificación por cada segundo restante
  MAX_BONO_RAPIDEZ: 100,
  RACHA_PARA_BONO: 3, // cada 3 aciertos seguidos...
  BONO_RACHA: 50, // ...se suman 50 puntos
  COSTO_COMODIN: 30,
  MULTIPLICADORES: { facil: 1, medio: 1.5, dificil: 2 },
};

// Estado de la partida actual
const estado = {
  jugador: "",
  categoria: "todas",
  dificultad: "facil",
  preguntas: [], // las 10 preguntas seleccionadas
  indiceActual: 0,
  aciertos: 0,
  racha: 0,
  mejorRacha: 0,
  puntaje: 0,
  tiempoRestante: CONFIG.TIEMPO_POR_PREGUNTA,
  tiempoTotal: 0, // segundos usados en toda la partida
  comodines: { cincuenta: true, tiempo: true },
  comodinesUsados: 0,
  ordenOpciones: [], // orden mezclado de las opciones de la pregunta actual
  ocultas: [], // posiciones eliminadas por el comodín 50/50
  respondida: false, // true cuando la pregunta actual ya se contestó
  respuestas: [], // historial para el resumen y la revisión
  enCurso: false,
};

let intervaloTemporizador = null;
let segundosDisponibles = CONFIG.TIEMPO_POR_PREGUNTA; // 20, o 30 si se usó el comodín de tiempo

/* ---------- Utilidades ---------- */

// Devuelve una copia del arreglo ordenada al azar (algoritmo de Fisher-Yates):
// recorre el arreglo de atrás hacia adelante e intercambia cada elemento
// con otro elegido al azar entre los que quedan por recorrer.
function mezclar(arreglo) {
  const copia = arreglo.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Filtra el banco por categoría y dificultad, lo mezcla y devuelve 10 preguntas.
function obtenerPreguntas(categoria, dificultad) {
  const deLaCategoria = PREGUNTAS.filter(
    (pregunta) => categoria === "todas" || pregunta.categoria === categoria,
  );
  let seleccion = mezclar(
    deLaCategoria.filter((pregunta) => pregunta.dificultad === dificultad),
  );

  // Por seguridad: si el banco tuviera menos de 10 preguntas con esos filtros,
  // se completa con preguntas de la misma categoría en otras dificultades.
  if (seleccion.length < CONFIG.PREGUNTAS_POR_PARTIDA) {
    const resto = mezclar(
      deLaCategoria.filter((pregunta) => pregunta.dificultad !== dificultad),
    );
    seleccion = seleccion.concat(resto);
  }
  return seleccion.slice(0, CONFIG.PREGUNTAS_POR_PARTIDA);
}

// Calcula los puntos de una respuesta correcta según las reglas de puntuación.
function calcularPuntos(segundosRestantes, racha, dificultad) {
  const base = CONFIG.PUNTOS_CORRECTA;
  const rapidez = Math.min(
    CONFIG.MAX_BONO_RAPIDEZ,
    segundosRestantes * CONFIG.PUNTOS_POR_SEGUNDO,
  );
  // La bonificación se da cada vez que la racha llega a 3, 6 o 9 aciertos seguidos
  const bonoRacha =
    racha > 0 && racha % CONFIG.RACHA_PARA_BONO === 0 ? CONFIG.BONO_RACHA : 0;
  const multiplicador = CONFIG.MULTIPLICADORES[dificultad];
  const total = Math.round((base + rapidez + bonoRacha) * multiplicador);
  return { base, rapidez, bonoRacha, multiplicador, total };
}

/* ---------- Flujo de la partida ---------- */

// Reinicia el estado, selecciona las preguntas y muestra la primera.
function iniciarPartida(categoria, dificultad) {
  estado.categoria = categoria;
  estado.dificultad = dificultad;
  estado.preguntas = obtenerPreguntas(categoria, dificultad);
  estado.indiceActual = 0;
  estado.aciertos = 0;
  estado.racha = 0;
  estado.mejorRacha = 0;
  estado.puntaje = 0;
  estado.tiempoTotal = 0;
  estado.comodines = { cincuenta: true, tiempo: true };
  estado.comodinesUsados = 0;
  estado.respuestas = [];
  estado.enCurso = true;

  mostrarPantalla("juego");
  cargarPregunta();
}

// Prepara la pregunta actual: mezcla sus opciones y reinicia el reloj.
function cargarPregunta() {
  estado.ordenOpciones = mezclar([0, 1, 2, 3]); // posiciones originales en orden aleatorio
  estado.ocultas = [];
  estado.respondida = false;
  estado.tiempoRestante = CONFIG.TIEMPO_POR_PREGUNTA;
  segundosDisponibles = CONFIG.TIEMPO_POR_PREGUNTA;

  mostrarPregunta();
  iniciarTemporizador();
}

// Cuenta regresiva: resta 1 segundo cada 1000 ms y detecta el tiempo agotado.
function iniciarTemporizador() {
  detenerTemporizador();
  intervaloTemporizador = setInterval(() => {
    estado.tiempoRestante -= 1;
    actualizarTemporizador();
    if (estado.tiempoRestante <= 0) {
      responder(null); // null significa que no se eligió ninguna opción
    }
  }, 1000);
}

function detenerTemporizador() {
  clearInterval(intervaloTemporizador);
  intervaloTemporizador = null;
}

// Valida la respuesta, calcula los puntos y actualiza la racha.
// indiceOpcion es la posición del botón pulsado (0 a 3) o null si se agotó el tiempo.
function responder(indiceOpcion) {
  // Si la pregunta ya fue respondida no se hace nada (opciones bloqueadas)
  if (!estado.enCurso || estado.respondida) return;
  if (indiceOpcion !== null && estado.ocultas.includes(indiceOpcion)) return;

  estado.respondida = true;
  detenerTemporizador();

  const pregunta = estado.preguntas[estado.indiceActual];
  const indiceCorrecto = estado.ordenOpciones.indexOf(pregunta.correcta);
  const esCorrecta = indiceOpcion === indiceCorrecto;
  const segundosUsados =
    segundosDisponibles - Math.max(0, estado.tiempoRestante);
  estado.tiempoTotal += segundosUsados;

  let puntos = {
    base: 0,
    rapidez: 0,
    bonoRacha: 0,
    multiplicador: CONFIG.MULTIPLICADORES[estado.dificultad],
    total: 0,
  };
  if (esCorrecta) {
    estado.aciertos += 1;
    estado.racha += 1;
    estado.mejorRacha = Math.max(estado.mejorRacha, estado.racha);
    puntos = calcularPuntos(
      estado.tiempoRestante,
      estado.racha,
      estado.dificultad,
    );
    estado.puntaje += puntos.total;
  } else {
    estado.racha = 0;
  }

  const resultado = {
    pregunta: pregunta,
    indiceElegido: indiceOpcion,
    indiceCorrecto: indiceCorrecto,
    textoElegido:
      indiceOpcion === null
        ? null
        : pregunta.opciones[estado.ordenOpciones[indiceOpcion]],
    esCorrecta: esCorrecta,
    tiempoAgotado: indiceOpcion === null,
    puntos: puntos,
    segundosUsados: segundosUsados,
  };
  estado.respuestas.push(resultado);

  mostrarRetroalimentacion(resultado);
}

// Aplica el 50/50 o el tiempo extra y descuenta 30 puntos.
function usarComodin(tipo) {
  if (!estado.enCurso || estado.respondida || !estado.comodines[tipo]) return;

  if (tipo === "cincuenta") {
    const pregunta = estado.preguntas[estado.indiceActual];
    const indiceCorrecto = estado.ordenOpciones.indexOf(pregunta.correcta);
    const incorrectas = [0, 1, 2, 3].filter(
      (indice) => indice !== indiceCorrecto,
    );
    estado.ocultas = mezclar(incorrectas).slice(0, 2); // dos incorrectas al azar
    ocultarOpciones(estado.ocultas);
  } else if (tipo === "tiempo") {
    estado.tiempoRestante += CONFIG.TIEMPO_EXTRA;
    segundosDisponibles += CONFIG.TIEMPO_EXTRA;
    actualizarTemporizador();
  }

  estado.comodines[tipo] = false;
  estado.comodinesUsados += 1;
  estado.puntaje -= CONFIG.COSTO_COMODIN;
  actualizarMarcador();
  actualizarComodines();
}

// Pasa a la siguiente pregunta o termina la partida si ya se respondieron las 10.
function siguientePregunta() {
  if (!estado.enCurso || !estado.respondida) return;
  if (estado.indiceActual < estado.preguntas.length - 1) {
    estado.indiceActual += 1;
    cargarPregunta();
  } else {
    finalizarPartida();
  }
}

// Guarda el ranking y las estadísticas y muestra el resumen.
function finalizarPartida() {
  detenerTemporizador();
  estado.enCurso = false;
  estado.puntaje = Math.max(0, estado.puntaje); // el puntaje final nunca es negativo

  const partida = {
    nombre: estado.jugador,
    puntaje: estado.puntaje,
    categoria: estado.categoria,
    dificultad: estado.dificultad,
    aciertos: estado.aciertos,
    fecha: new Date().toISOString(),
  };
  const posicion = guardarEnRanking(partida);
  actualizarEstadisticas(partida, estado.respuestas);

  mostrarResultado({
    partida: partida,
    posicion: posicion,
    total: estado.preguntas.length,
    tiempoTotal: estado.tiempoTotal,
    mejorRacha: estado.mejorRacha,
    comodinesUsados: estado.comodinesUsados,
    falladas: estado.respuestas.filter((respuesta) => !respuesta.esCorrecta),
  });
}

// Sale de la partida sin guardar nada.
function abandonarPartida() {
  detenerTemporizador();
  estado.enCurso = false;
}
