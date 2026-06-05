# vsp-caja-fuerte

## Contexto del proyecto

App web para una gymkana corporativa de teambuilding. El cliente es **Coca-Cola**.
Nombre del evento: **The Greatest Heist in Madrid**.

La gymkana tiene 4 equipos (un color por equipo) y termina con un colofón final: los equipos llegan a una caja fuerte con un iPad en la puerta. En ese iPad se muestra esta app en pantalla completa. Los equipos interactúan con ella para introducir un código. Si el código es correcto, se dispara la pantalla de éxito.

## Stack

- Vite + React
- Deploy en Vercel
- Repo: https://github.com/marimoysan/vsp-caja-fuerte

## Diseño

- Pantalla completa en tablet vertical, sin scroll
- Rectángulo a sangre con borde de 4 colores (uno por lado):
  - Turquesa → arriba
  - Azul → derecha
  - Verde → abajo
  - Amarillo → izquierda
- Interior dividido en 4 triángulos por las dos diagonales
- Centro: círculo con logo del evento
- Fondo negro
- Ver mockup: `.claude/mockup.jpeg` · colores: `.claude/colors.jpeg`

## Código de la caja fuerte

| Equipo    | Posición | Dígito |
|-----------|----------|--------|
| Turquesa  | Arriba   | 7      |
| Azul      | Derecha  | 6      |
| Amarillo  | Izquierda| 3      |
| Verde     | Abajo    | 2      |

## Flujo

1. Cada equipo pulsa su triángulo → modal con dialpad → introduce su dígito
2. El dígito queda visible en el triángulo (bloqueado, no editable)
3. Con los 4 dígitos introducidos, se pulsa el logo central
4. Código correcto → pantalla roja completa con animación Coca-Cola
5. Código incorrecto → destello en bordes + reset de los 4 dígitos (reintentos ilimitados)

## Historias de usuario

Ver `.claude/user-stories.md`

## Notas de desarrollo

- Optimizado para iPad en vertical (portrait)
- Botones grandes para uso táctil
- Sin scroll, todo en una sola pantalla
- Pendiente de definir: animación exacta de la pantalla de éxito
