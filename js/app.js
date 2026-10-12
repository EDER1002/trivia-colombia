/* =====================================================================
   app.js — Punto de entrada y navegación
   ---------------------------------------------------------------------
   Conecta los botones y formularios (eventos) con las funciones de
   juego.js, ui.js y almacenamiento.js. Se carga de último.
   ===================================================================== */

"use strict";

// Cambia de pantalla y prepara lo que cada una necesita
function irA(pantalla) {
  if (pantalla === "ranking") mostrarRanking();
  if (pantalla === "configuracion") {
    $("saludo-nombre").textContent = estado.jugador;
    mostrarMejorPuntaje();
  }
  mostrarPantalla(pantalla);
}

// RF-01: el nombre es obligatorio. Devuelve true si es válido.
function validarNombre() {
  const campo = $("campo-nombre");
  const nombre = campo.value.trim();
  const esValido = nombre.length > 0;

  $("error-nombre").hidden = esValido;
  campo.setAttribute("aria-invalid", !esValido);
  if (!esValido) {
    campo.focus();
    return false;
  }
  estado.jugador = nombre;
  guardarPreferencias({ nombre: nombre });
  return true;
}

function iniciarAplicacion() {
  /* ----- Preferencias guardadas ----- */
  const preferencias = obtenerPreferencias();
  const prefiereOscuro =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  aplicarTema(preferencias.tema || (prefiereOscuro ? "oscuro" : "claro"));
  aplicarSonido(preferencias.sonido);
  $("campo-nombre").value = preferencias.nombre;

  crearTarjetasCategorias();

  /* ----- Inicio ----- */
  $("form-inicio").addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (validarNombre()) irA("configuracion");
  });
  $("campo-nombre").addEventListener("input", () => {
    $("error-nombre").hidden = true;
    $("campo-nombre").removeAttribute("aria-invalid");
  });

  /* ----- Navegación: cualquier botón con el atributo data-ir ----- */
  document.querySelectorAll("[data-ir]").forEach((boton) => {
    boton.addEventListener("click", () => irA(boton.dataset.ir));
  });

  $("btn-marca").addEventListener("click", () => {
    if (estado.enCurso) {
      pedirAbandonar();
    } else {
      irA("inicio");
    }
  });

  /* ----- Configuración de partida ----- */
  $("form-configuracion").addEventListener("change", mostrarMejorPuntaje);
  $("form-configuracion").addEventListener("submit", (evento) => {
    evento.preventDefault();
    iniciarPartida(categoriaElegida(), dificultadElegida());
  });

  /* ----- Juego ----- */
  // Un solo listener en el contenedor atiende los 4 botones (delegación de eventos)
  $("opciones").addEventListener("click", (evento) => {
    const boton = evento.target.closest(".opcion");
    if (boton) responder(Number(boton.dataset.indice));
  });
  $("btn-cincuenta").addEventListener("click", () => usarComodin("cincuenta"));
  $("btn-tiempo").addEventListener("click", () => usarComodin("tiempo"));
  $("btn-siguiente").addEventListener("click", siguientePregunta);
  $("btn-abandonar").addEventListener("click", pedirAbandonar);

  // Atajos de teclado: 1-4 o A-D para responder
  document.addEventListener("keydown", (evento) => {
    if ($("pantalla-juego").hidden || $("dialogo").open || estado.respondida)
      return;
    if (evento.ctrlKey || evento.metaKey || evento.altKey) return;
    const tecla = evento.key.toLowerCase();
    const indice =
      ["1", "2", "3", "4"].indexOf(tecla) !== -1
        ? ["1", "2", "3", "4"].indexOf(tecla)
        : ["a", "b", "c", "d"].indexOf(tecla);
    if (indice !== -1) responder(indice);
  });

  /* ----- Resultado ----- */
  $("btn-jugar-de-nuevo").addEventListener("click", () => {
    iniciarPartida(estado.categoria, estado.dificultad);
  });

  /* ----- Ranking ----- */
  $("btn-borrar-ranking").addEventListener("click", () => {
    confirmar(
      "¿Seguro que quieres borrar todo el ranking?",
      "Sí, borrar",
      () => {
        borrarRanking();
        mostrarRanking();
      },
    );
  });

  /* ----- Configuración general: sonido y tema ----- */
  $("btn-sonido").addEventListener("click", () => {
    const preferenciasNuevas = guardarPreferencias({
      sonido: !obtenerPreferencias().sonido,
    });
    aplicarSonido(preferenciasNuevas.sonido);
    reproducirSonido("correcto"); // pequeña muestra al activarlo
  });
  $("btn-tema").addEventListener("click", () => {
    const temaNuevo =
      document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
    guardarPreferencias({ tema: temaNuevo });
    aplicarTema(temaNuevo);
  });

  /* ----- Ventana de confirmación ----- */
  $("dialogo-aceptar").addEventListener("click", () => cerrarDialogo(true));
  $("dialogo-cancelar").addEventListener("click", () => cerrarDialogo(false));

  mostrarPantalla("inicio");
}

function pedirAbandonar() {
  confirmar(
    "¿Quieres abandonar la partida? El puntaje no se guardará.",
    "Sí, abandonar",
    () => {
      abandonarPartida();
      irA("inicio");
    },
  );
}

// Con "defer" los scripts se ejecutan cuando el HTML ya está cargado
iniciarAplicacion();
