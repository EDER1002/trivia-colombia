/* =====================================================================
   ui.js — Renderizado de las pantallas en el DOM
   ---------------------------------------------------------------------
   Todo lo que se ve en pantalla se actualiza desde aquí. Los textos se
   escriben con textContent (nunca innerHTML) para que el nombre del
   jugador no pueda inyectar código en la página.
   ===================================================================== */

'use strict';

const LETRAS = ['A', 'B', 'C', 'D'];
const PERIMETRO_RELOJ = 175.93; // 2 × π × 28 (radio del círculo del reloj)

// Atajo para buscar un elemento por su id
function $(id) {
  return document.getElementById(id);
}

// Crea un elemento con una clase y un texto (ayuda a no repetir código)
function crear(etiqueta, clase, texto) {
  const elemento = document.createElement(etiqueta);
  if (clase) elemento.className = clase;
  if (texto !== undefined) elemento.textContent = texto;
  return elemento;
}

/* ---------- Navegación entre pantallas ---------- */

function mostrarPantalla(nombre) {
  document.querySelectorAll('.pantalla').forEach((pantalla) => {
    pantalla.hidden = pantalla.id !== 'pantalla-' + nombre;
  });
  window.scrollTo(0, 0);
  // Lleva el foco al título de la pantalla para quienes usan teclado o lector de pantalla
  const titulo = document.querySelector('#pantalla-' + nombre + ' [tabindex="-1"]');
  if (titulo) titulo.focus({ preventScroll: true });
}

/* ---------- Configuración de partida ---------- */

// Genera las tarjetas de categoría a partir de los datos de CATEGORIAS
function crearTarjetasCategorias() {
  const contenedor = $('lista-categorias');
  Object.keys(CATEGORIAS).forEach((clave, posicion) => {
    const etiqueta = crear('label', 'categoria');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'categoria';
    radio.value = clave;
    radio.checked = posicion === 0;

    const caja = crear('span', 'categoria__caja');
    const icono = document.createElement('img');
    icono.src = CATEGORIAS[clave].icono;
    icono.alt = ''; // decorativo: el nombre ya está escrito al lado
    icono.width = 56;
    icono.height = 56;
    caja.append(icono, crear('span', '', CATEGORIAS[clave].nombre));

    etiqueta.append(radio, caja);
    contenedor.append(etiqueta);
  });
}

function categoriaElegida() {
  return document.querySelector('input[name="categoria"]:checked').value;
}

function dificultadElegida() {
  return document.querySelector('input[name="dificultad"]:checked').value;
}

// Muestra el mejor puntaje del jugador en la combinación seleccionada
function mostrarMejorPuntaje() {
  const mejor = obtenerMejorPuntaje(estado.jugador, categoriaElegida(), dificultadElegida());
  $('mejor-puntaje').textContent = mejor > 0
    ? 'Tu mejor puntaje en esta combinación: ' + mejor + ' puntos.'
    : 'Aún no has jugado esta combinación. ¡Estrénala!';
}

/* ---------- Juego ---------- */

function mostrarPregunta() {
  const pregunta = estado.preguntas[estado.indiceActual];
  const numero = estado.indiceActual + 1;
  const total = estado.preguntas.length;

  // Progreso
  $('texto-progreso').textContent = 'Pregunta ' + numero + '/' + total;
  $('barra-relleno').style.width = (numero / total * 100) + '%';
  $('barra-progreso').setAttribute('aria-valuenow', numero);
  $('barra-progreso').setAttribute('aria-valuemax', total);

  // Etiquetas y enunciado
  $('chip-categoria').textContent = CATEGORIAS[pregunta.categoria].nombre;
  $('chip-dificultad').textContent = DIFICULTADES[pregunta.dificultad].nombre;
  $('enunciado').textContent = pregunta.enunciado;

  // Botones de opción en el orden mezclado
  const contenedor = $('opciones');
  contenedor.replaceChildren();
  estado.ordenOpciones.forEach((indiceOriginal, posicion) => {
    const boton = crear('button', 'opcion');
    boton.type = 'button';
    boton.dataset.indice = posicion;
    boton.append(
      crear('span', 'opcion__letra', LETRAS[posicion]),
      crear('span', 'opcion__texto', pregunta.opciones[indiceOriginal]),
      crear('span', 'opcion__marca', '')
    );
    contenedor.append(boton);
  });

  // Se oculta la retroalimentación de la pregunta anterior
  $('retro').hidden = true;
  $('btn-siguiente').textContent = numero === total ? 'Ver resultado' : 'Siguiente pregunta';

  actualizarMarcador();
  actualizarComodines();
  actualizarTemporizador(true);
  $('enunciado').focus({ preventScroll: true });
}

function actualizarMarcador() {
  $('puntaje-actual').textContent = estado.puntaje;
  const chipRacha = $('chip-racha');
  chipRacha.hidden = estado.racha < 2;
  chipRacha.textContent = 'Racha ×' + estado.racha;
}

// Actualiza el número y el anillo del reloj. "sinAnimacion" se usa al cargar una pregunta.
function actualizarTemporizador(sinAnimacion) {
  const segundos = Math.max(0, estado.tiempoRestante);
  const fraccion = Math.min(1, segundos / CONFIG.TIEMPO_POR_PREGUNTA);
  const avance = $('reloj-avance');

  if (sinAnimacion) {
    avance.style.transition = 'none';
    avance.style.strokeDashoffset = PERIMETRO_RELOJ * (1 - fraccion);
    avance.getBoundingClientRect(); // obliga al navegador a aplicar el cambio sin animar
    avance.style.transition = '';
  } else {
    avance.style.strokeDashoffset = PERIMETRO_RELOJ * (1 - fraccion);
  }

  $('reloj-numero').textContent = segundos;
  $('reloj').classList.toggle('reloj--urgente', segundos <= 5 && !estado.respondida);
}

function actualizarComodines() {
  $('btn-cincuenta').disabled = !estado.comodines.cincuenta || estado.respondida;
  $('btn-tiempo').disabled = !estado.comodines.tiempo || estado.respondida;
}

// Comodín 50/50: desaparecen las dos opciones indicadas
function ocultarOpciones(indices) {
  const botones = $('opciones').children;
  indices.forEach((indice) => {
    botones[indice].classList.add('opcion--oculta');
    botones[indice].disabled = true;
  });
}

/* ---------- Retroalimentación ---------- */

function mostrarRetroalimentacion(resultado) {
  const botones = Array.from($('opciones').children);

  // Se bloquean todas las opciones y se marcan la correcta y la elegida
  botones.forEach((boton) => { boton.disabled = true; });
  botones[resultado.indiceCorrecto].classList.add('opcion--correcta');
  botones[resultado.indiceCorrecto].querySelector('.opcion__marca').textContent = '✓';
  if (!resultado.esCorrecta && resultado.indiceElegido !== null) {
    botones[resultado.indiceElegido].classList.add('opcion--incorrecta');
    botones[resultado.indiceElegido].querySelector('.opcion__marca').textContent = '✗';
  }

  // Título y detalle de los puntos
  let titulo = 'Incorrecto';
  let detalle = '0 puntos';
  if (resultado.tiempoAgotado) {
    titulo = '¡Se acabó el tiempo!';
  } else if (resultado.esCorrecta) {
    const puntos = resultado.puntos;
    titulo = '¡Correcto!';
    detalle = '+' + puntos.total + ' puntos (' + puntos.base + ' base + ' + puntos.rapidez + ' por rapidez';
    if (puntos.bonoRacha > 0) detalle += ' + ' + puntos.bonoRacha + ' por racha';
    detalle += ')';
    if (puntos.multiplicador !== 1) detalle += ' × ' + puntos.multiplicador;
  }

  $('retro-titulo').textContent = titulo;
  $('retro-puntos').textContent = detalle;
  $('retro-explicacion').textContent = resultado.pregunta.explicacion;
  $('retro').classList.toggle('retro--incorrecta', !resultado.esCorrecta);
  $('retro').hidden = false;

  actualizarMarcador();
  actualizarComodines();
  actualizarTemporizador();
  reproducirSonido(resultado.esCorrecta ? 'correcto' : 'incorrecto');
  $('btn-siguiente').focus({ preventScroll: true });
}

/* ---------- Resultado ---------- */

function formatearTiempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const resto = String(segundos % 60).padStart(2, '0');
  return minutos + ':' + resto;
}

function mensajeSegunDesempeno(aciertos, total) {
  const porcentaje = aciertos / total;
  if (porcentaje === 1) return '¡Perfecto! Eres un experto en Colombia.';
  if (porcentaje >= 0.8) return '¡Excelente! Conoces muy bien tu país.';
  if (porcentaje >= 0.6) return '¡Buen trabajo! Vas por buen camino.';
  if (porcentaje >= 0.4) return 'Nada mal, pero puedes mejorar.';
  return 'A seguir aprendiendo. ¡Inténtalo otra vez!';
}

function mostrarResultado(resumen) {
  const partida = resumen.partida;

  $('resultado-mensaje').textContent = partida.nombre + ', ' +
    mensajeSegunDesempeno(partida.aciertos, resumen.total).replace(/^¡?./, (inicio) => inicio.toLowerCase());
  $('resultado-puntaje').textContent = partida.puntaje;
  $('resultado-detalle').textContent =
    CATEGORIAS[partida.categoria].nombre + ' · ' + DIFICULTADES[partida.dificultad].nombre +
    ' · Comodines usados: ' + resumen.comodinesUsados;
  $('resultado-aciertos').textContent = partida.aciertos + '/' + resumen.total;
  $('resultado-tiempo').textContent = formatearTiempo(resumen.tiempoTotal);
  $('resultado-posicion').textContent = resumen.posicion > 0 ? '#' + resumen.posicion : 'Fuera del top 10';
  $('resultado-racha').textContent = resumen.mejorRacha;

  // Revisión de las preguntas falladas
  const lista = $('lista-revision');
  lista.replaceChildren();
  if (resumen.falladas.length === 0) {
    lista.append(crear('li', 'revision--perfecta', '¡No fallaste ninguna pregunta!'));
  }
  resumen.falladas.forEach((respuesta) => {
    const pregunta = respuesta.pregunta;
    const item = document.createElement('li');
    item.append(
      crear('p', 'revision__pregunta', pregunta.enunciado),
      crear('p', 'revision__tuya', 'Tu respuesta: ' + (respuesta.textoElegido || 'sin responder (tiempo agotado)')),
      crear('p', 'revision__correcta', 'Respuesta correcta: ' + pregunta.opciones[pregunta.correcta]),
      crear('p', 'revision__explicacion', pregunta.explicacion)
    );
    lista.append(item);
  });

  mostrarPantalla('resultado');
}

/* ---------- Ranking y estadísticas ---------- */

function mostrarRanking() {
  const ranking = obtenerRanking();
  const cuerpo = $('cuerpo-ranking');
  cuerpo.replaceChildren();

  ranking.forEach((partida, posicion) => {
    const fila = document.createElement('tr');

    const celdaPuesto = document.createElement('td');
    celdaPuesto.append(crear('span', 'puesto', posicion + 1));

    const celdaCategoria = document.createElement('td');
    celdaCategoria.append(
      CATEGORIAS[partida.categoria] ? CATEGORIAS[partida.categoria].nombre : partida.categoria,
      crear('small', '', DIFICULTADES[partida.dificultad] ? DIFICULTADES[partida.dificultad].nombre : '')
    );

    const fecha = new Date(partida.fecha).toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: '2-digit' });

    // En celular la fecha se muestra debajo del nombre (ver responsive.css)
    const celdaNombre = crear('td', '', partida.nombre);
    celdaNombre.append(crear('small', 'solo-movil', fecha));

    fila.append(
      celdaPuesto,
      celdaNombre,
      crear('td', '', partida.puntaje),
      celdaCategoria,
      crear('td', '', fecha)
    );
    cuerpo.append(fila);
  });

  $('tabla-ranking').hidden = ranking.length === 0;
  $('ranking-vacio').hidden = ranking.length > 0;
  $('btn-borrar-ranking').disabled = ranking.length === 0;

  mostrarEstadisticas();
}

function mostrarEstadisticas() {
  const nombre = estado.jugador || $('campo-nombre').value.trim();
  const stats = nombre ? obtenerEstadisticas(nombre) : null;

  $('titulo-estadisticas').textContent = nombre ? 'Estadísticas de ' + nombre : 'Tus estadísticas';
  $('stat-partidas').textContent = stats ? stats.partidas : 0;
  $('stat-aciertos').textContent = stats && stats.respondidas > 0
    ? Math.round(stats.aciertos / stats.respondidas * 100) + ' %'
    : '0 %';
  $('stat-mejor').textContent = stats ? stats.mejorPuntaje : 0;

  // Categoría con mejor desempeño = mayor porcentaje de aciertos
  let mejorCategoria = '—';
  let mejorPorcentaje = -1;
  if (stats) {
    Object.keys(stats.categorias).forEach((clave) => {
      const datos = stats.categorias[clave];
      const porcentaje = datos.aciertos / datos.respondidas;
      if (porcentaje > mejorPorcentaje) {
        mejorPorcentaje = porcentaje;
        mejorCategoria = CATEGORIAS[clave].nombre;
      }
    });
  }
  $('stat-categoria').textContent = mejorCategoria;
}

/* ---------- Sonido y tema ---------- */

const SONIDOS = {
  correcto: new Audio('assets/sonidos/correcto.wav'),
  incorrecto: new Audio('assets/sonidos/incorrecto.wav')
};
let sonidoActivo = true;

function reproducirSonido(tipo) {
  if (!sonidoActivo || !SONIDOS[tipo]) return;
  SONIDOS[tipo].currentTime = 0;
  // play() devuelve una promesa; si el navegador bloquea el audio simplemente se ignora
  const promesa = SONIDOS[tipo].play();
  if (promesa) promesa.catch(() => {});
}

function aplicarSonido(activo) {
  sonidoActivo = activo;
  $('btn-sonido').setAttribute('aria-pressed', activo);
  $('txt-sonido').textContent = activo ? 'Sonido activado' : 'Sonido desactivado';
}

function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;
  $('btn-tema').setAttribute('aria-pressed', tema === 'oscuro');
  $('txt-tema').textContent = tema === 'oscuro' ? 'Tema oscuro' : 'Tema claro';
}

/* ---------- Ventana de confirmación ---------- */

let accionPendiente = null;

function confirmar(mensaje, textoAceptar, alAceptar) {
  $('dialogo-mensaje').textContent = mensaje;
  $('dialogo-aceptar').textContent = textoAceptar;
  accionPendiente = alAceptar;
  $('dialogo').showModal();
}

function cerrarDialogo(aceptado) {
  $('dialogo').close();
  if (aceptado && accionPendiente) accionPendiente();
  accionPendiente = null;
}
