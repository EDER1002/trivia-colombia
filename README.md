# Trivia Colombia – Juego de preguntas

Juego web de preguntas y respuestas sobre Colombia. El jugador escribe su nombre, elige una categoría y un nivel
de dificultad y responde una ronda de 10 preguntas de selección múltiple con tiempo límite. Cada acierto suma
puntos según la rapidez y, al final, el resultado se guarda en un ranking local.

Parcial de **Desarrollo Full Stack** · Universidad de Santander (UDES) · Docente: Carlos Carrascal · Octubre de 2026
**Estudiante:** Eder Rosadas De Oliveira Barrera

## Enlaces

| Entregable | Enlace |
| --- | --- |
| Diseño (Figma) | https://www.figma.com/design/BdYMvZWORXnRtHcv0GcpXW |
| Despliegue en Vercel | https://trivia-colombia.vercel.app |
| Video explicativo | _pendiente_ |

## Capturas de pantalla

| Inicio | Configuración de partida |
| --- | --- |
| ![Pantalla de inicio](docs/capturas/escritorio-1-inicio.png) | ![Configuración de partida](docs/capturas/escritorio-3-configuracion.png) |

| Juego | Retroalimentación |
| --- | --- |
| ![Pantalla de juego](docs/capturas/escritorio-4-juego.png) | ![Retroalimentación](docs/capturas/escritorio-5-retroalimentacion-correcta.png) |

| Resultado | Ranking y estadísticas |
| --- | --- |
| ![Resultado](docs/capturas/escritorio-6-resultado.png) | ![Ranking](docs/capturas/escritorio-7-ranking.png) |

Versión móvil (375 px) y tema oscuro:

<p>
  <img src="docs/capturas/movil-1-inicio.png" alt="Inicio en móvil" width="190">
  <img src="docs/capturas/movil-3-configuracion.png" alt="Configuración en móvil" width="190">
  <img src="docs/capturas/movil-4-juego.png" alt="Juego en móvil" width="190">
  <img src="docs/capturas/movil-8-tema-oscuro.png" alt="Juego en móvil con tema oscuro" width="190">
</p>

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| HTML5 | Estructura semántica (`header`, `main`, `section`, `footer`, `dialog`). |
| CSS3 | Variables, Flexbox, Grid, media queries, animaciones y tema oscuro. |
| JavaScript (ES6+) | Lógica del juego, manipulación del DOM, eventos y temporizador. |
| localStorage | Ranking, estadísticas y preferencias del jugador. |
| Figma / MockFlow | Wireframes, mockups, guía de estilos y prototipo. |
| Git y GitHub | Control de versiones. |
| Vercel | Despliegue. |

No usa frameworks, librerías ni servidor: todo corre en el navegador.

## Cómo ejecutarlo localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EDER1002/trivia-colombia.git
   ```
2. Abrir la carpeta en Visual Studio Code.
3. Clic derecho sobre `index.html` → **Open with Live Server**.

También funciona abriendo `index.html` directamente con doble clic, porque no necesita servidor.

## Estructura del proyecto

```text
trivia-colombia/
├── index.html            → Estructura de todas las pantallas
├── css/
│   ├── styles.css        → Estilos generales y variables (guía de estilos)
│   └── responsive.css    → Media queries (tableta y celular)
├── js/
│   ├── app.js            → Punto de entrada, eventos y navegación
│   ├── juego.js          → Lógica: preguntas, tiempo, comodines y puntaje
│   ├── preguntas.js      → Banco de preguntas (solo datos)
│   ├── ui.js             → Renderizado de pantallas en el DOM
│   └── almacenamiento.js → Ranking, estadísticas y preferencias (localStorage)
├── assets/
│   ├── img/              → Logo e íconos de las categorías (SVG)
│   └── sonidos/          → Efectos de acierto y error
├── docs/
│   ├── diseno/           → Guía de estilos y exportación del diseño
│   └── capturas/         → Capturas de la aplicación
└── README.md
```

## Reglas del juego

- 10 preguntas al azar por partida, sin repetir, con las 4 opciones en orden aleatorio.
- 20 segundos por pregunta; si se agota el tiempo cuenta como incorrecta.
- Comodines (uno de cada uno por partida): **50/50** elimina dos opciones incorrectas y **+10 s** suma tiempo.
- Al responder se marca la opción elegida, se resalta la correcta y se muestra una explicación.

| Concepto | Puntos |
| --- | --- |
| Respuesta correcta | +100 |
| Bonificación por rapidez | +5 por cada segundo restante (máximo +100) |
| Racha de 3 respuestas correctas seguidas | +50 |
| Respuesta incorrecta o sin responder | 0 |
| Uso de un comodín | −30 |
| Multiplicador por dificultad | Fácil ×1 · Medio ×1.5 · Difícil ×2 |

Atajos de teclado: teclas `1`–`4` o `A`–`D` para responder y `Enter` para continuar.

## Decisiones de implementación

- **Banco de 150 preguntas.** El enunciado pide mínimo 50 (10 por categoría), pero una partida filtra por categoría
  **y** dificultad y necesita 10 preguntas distintas (caso CP-02). Por eso hay 10 preguntas por cada una de las
  15 combinaciones. Si se quitaran preguntas, `obtenerPreguntas()` completa con otras dificultades de la misma categoría.
- **Bonificación de racha.** Se suma +50 cada vez que la racha llega a 3, 6 o 9 aciertos seguidos.
- **Multiplicador.** Se aplica a los puntos de cada pregunta (base + rapidez + racha), como indica el caso CP-04.
- **Comodines.** Restan 30 puntos fijos (sin multiplicador). El puntaje final nunca queda por debajo de 0.
- **Estadísticas por jugador.** Se guardan por nombre (sin distinguir mayúsculas), incluido el mejor puntaje por
  combinación de categoría y dificultad que se muestra al configurar la partida.
- **Seguridad.** Los textos se insertan con `textContent`, así el nombre del jugador no puede inyectar HTML.

### Datos en localStorage

| Clave | Contenido |
| --- | --- |
| `trivia_ranking` | Arreglo (top 10) de `{ nombre, puntaje, categoria, dificultad, aciertos, fecha }` |
| `trivia_stats` | Estadísticas por jugador: partidas, aciertos, mejor puntaje y desempeño por categoría |
| `trivia_prefs` | `{ sonido, tema, nombre }` |

## Funciones principales

| Función | Archivo | Descripción |
| --- | --- | --- |
| `iniciarPartida(categoria, dificultad)` | juego.js | Reinicia el estado, selecciona las preguntas y muestra la primera. |
| `obtenerPreguntas(categoria, dificultad)` | juego.js | Filtra el banco, lo mezcla y devuelve 10 preguntas. |
| `mezclar(arreglo)` | juego.js | Ordena un arreglo al azar (Fisher-Yates). |
| `iniciarTemporizador()` | juego.js | Cuenta regresiva con `setInterval`; detecta el tiempo agotado. |
| `responder(indiceOpcion)` | juego.js | Valida la respuesta, calcula los puntos y actualiza la racha. |
| `calcularPuntos(segundos, racha, dificultad)` | juego.js | Aplica las reglas de puntuación. |
| `usarComodin(tipo)` | juego.js | Aplica el 50/50 o el tiempo extra y descuenta puntos. |
| `mostrarPregunta()` / `mostrarResultado()` | ui.js | Renderizan las pantallas en el DOM. |
| `guardarEnRanking(partida)` | almacenamiento.js | Agrega la partida, ordena y conserva el top 10. |

## Pruebas realizadas

| ID | Caso de prueba | Resultado |
| --- | --- | --- |
| CP-01 | Iniciar sin escribir el nombre | Muestra el mensaje y no avanza ✔ |
| CP-02 | Partida de Historia en nivel fácil | 10 preguntas distintas de esa categoría y nivel ✔ |
| CP-03 | Dos partidas seguidas con los mismos filtros | Cambia el orden de preguntas y opciones ✔ |
| CP-04 | Acierto con 12 segundos restantes | Suma 100 + 60 puntos ✔ |
| CP-05 | Respuesta incorrecta | Elegida en rojo, correcta en verde y explicación ✔ |
| CP-06 | Dejar agotar el tiempo | Cuenta como incorrecta con 0 puntos ✔ |
| CP-07 | Clic en otra opción después de responder | No ocurre nada ✔ |
| CP-08 | Comodín 50/50 | Desaparecen dos incorrectas y el botón queda deshabilitado ✔ |
| CP-09 | Tres aciertos seguidos | Suma la bonificación de +50 ✔ |
| CP-10 | Terminar una partida | Muestra el resumen y aparece en el ranking ✔ |
| CP-11 | Recargar la página | Se conservan ranking y estadísticas ✔ |
| CP-12 | Comparar con el diseño | _pendiente: comparar con el archivo de Figma/MockFlow_ |
| CP-13 | Celular de 360 px | Sin desplazamiento horizontal en ninguna pantalla ✔ |

## Mejoras futuras

- Backend con API y base de datos para un ranking en línea.
- Registro e inicio de sesión.
- Panel para que el docente agregue y edite preguntas.
- Retos diarios y versión PWA instalable.
