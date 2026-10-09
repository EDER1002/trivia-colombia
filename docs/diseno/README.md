# Diseño de la interfaz (Figma / MockFlow)

Archivo de Figma: https://www.figma.com/design/BdYMvZWORXnRtHcv0GcpXW

| Página del archivo | Contenido |
| --- | --- |
| 1. Wireframes | Las 7 pantallas en escala de grises, en escritorio (1440 × 1024) y móvil (375 × 812). |
| 2. Guía de estilos | Paleta (variables de color), tipografía (estilos de texto) y componentes con sus estados. |
| 3. Mockups y prototipo | Mockups de alta fidelidad en escritorio y móvil, más el tema oscuro, conectados como prototipo navegable (flujos «Escritorio» y «Móvil»). |

> **Pendiente:** exportar las pantallas desde Figma (PDF o PNG) y guardarlas en esta carpeta.
> Las imágenes de `docs/capturas/` son capturas de la aplicación ya construida, no del diseño.

## Wireframes de baja fidelidad

La carpeta `wireframes/` tiene las 7 pantallas en escala de grises, en escritorio (1440 px) y móvil (375 px),
como archivos SVG. Son los mismos que están dibujados en la página «1. Wireframes» del archivo de Figma.

Esta guía reúne los valores exactos que usa la aplicación (están como variables en `css/styles.css`)
para que el diseño y el código coincidan (RNF-01 y caso de prueba CP-12).

## 1. Guía de estilos

### Colores

| Uso | Tema claro | Tema oscuro |
| --- | --- | --- |
| Amarillo (acentos, barra de progreso, comodines) | `#FCD116` | `#FCD116` |
| Azul (títulos, botón principal, chips) | `#003893` | — (los títulos pasan a `#FFFFFF`) |
| Rojo (errores y respuesta incorrecta) | `#CE1126` | `#F2566A` |
| Verde (aciertos y respuesta correcta) | `#2E9E5B` | `#3DBE74` |
| Fondo de la página | `#F4F6FB` | `#0A1228` |
| Superficie (tarjetas) | `#FFFFFF` | `#131E3F` |
| Superficie secundaria | `#EDF1F9` | `#1C2950` |
| Texto principal | `#111B36` | `#EDF1FF` |
| Texto secundario | `#55607A` | `#AAB5D1` |
| Bordes | `#D3DAE8` | `#2E3D6B` |
| Botón principal | fondo `#003893`, texto `#FFFFFF` | fondo `#FCD116`, texto `#141414` |
| Foco de teclado | `#1C6BFF` | `#8DB4FF` |

### Tipografía: Poppins (Google Fonts)

| Estilo | Tamaño escritorio | Tamaño móvil | Peso |
| --- | --- | --- | --- |
| H1 (nombre del juego) | 40 px | 30 px | 700 |
| H2 (título de pantalla) | 28 px | 22 px | 700 |
| Enunciado de la pregunta | 24 px | 18 px | 600 |
| H3 (subtítulos) | 18 px | 18 px | 600 |
| Texto | 16 px | 16 px | 400 |
| Botones | 16–17 px | 16–17 px | 600 |
| Notas y etiquetas | 12–14 px | 12–14 px | 400–600 |

### Componentes

- **Tarjeta:** radio 16 px, borde 1 px, sombra `0 10 30` azul al 8 %, relleno interior 36–40 px (22 px en móvil).
- **Botón principal / secundario:** forma de píldora, alto mínimo 48 px (54 px el grande). El secundario es transparente con borde de 2 px.
- **Botón de opción:** alto mínimo 64 px (56 px en móvil), radio 10 px, borde 2 px y un círculo de 34 px con la letra A–D.
- **Chips:** píldora de 13 px en negrita (categoría en azul, dificultad en gris claro, racha en amarillo).
- **Reloj:** anillo de 72 px (60 px en móvil) con trazo de 6 px.
- **Barra de progreso:** 10 px de alto, relleno amarillo.

### Estados de los botones de opción

| Estado | Apariencia |
| --- | --- |
| Normal | Fondo superficie, borde `#D3DAE8` |
| Hover | Borde azul y se eleva 2 px |
| Correcto | Borde verde, fondo verde al 16 %, círculo verde y símbolo ✓ |
| Incorrecto | Borde rojo, fondo rojo al 13 %, círculo rojo y símbolo ✗ |
| Deshabilitado | Opacidad 55 % (las demás opciones después de responder) |
| Eliminado por 50/50 | La opción desaparece |

## 2. Marcos (frames) que debe tener el archivo

Cada pantalla en **escritorio (1440 px)** y **móvil (375 px)**, primero como wireframe en grises y luego como mockup:

1. Inicio
2. Instrucciones
3. Configuración de partida
4. Juego
5. Retroalimentación (respuesta correcta y respuesta incorrecta)
6. Resultado
7. Ranking y estadísticas

## 3. Conexiones del prototipo navegable

- Inicio → **Jugar** → Configuración de partida → **Comenzar** → Juego
- Juego → clic en una opción → Retroalimentación → **Siguiente pregunta** → Juego … → **Ver resultado** → Resultado
- Resultado → **Jugar de nuevo** → Juego · **Ver ranking** → Ranking · **Volver al inicio** → Inicio
- Inicio → **Instrucciones** → Instrucciones → **Volver al inicio** → Inicio
- Inicio → **Ranking** → Ranking → **Volver al inicio** → Inicio
