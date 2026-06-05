# Historias de usuario — Caja Fuerte: The Greatest Heist in Madrid

## Contexto general
Gymkana corporativa para Coca-Cola. 4 equipos llegan al colofón final: una caja fuerte con un iPad. Cada equipo conoce su dígito secreto. Deben introducirlos juntos para abrir la caja.

**Código correcto:** Turquesa (arriba) = 7 · Azul (derecha) = 6 · Amarillo (izquierda) = 3 · Verde (abajo) = 2

---

## US-01 — Pantalla principal

**Como** participante en la gymkana,
**quiero** ver una pantalla dividida en 4 zonas claramente diferenciadas por color,
**para** saber qué zona le corresponde a mi equipo.

### Criterios de aceptación
- Pantalla completa en tablet vertical, sin scroll, sin UI de navegador visible
- Rectángulo a sangre (sin margen) con borde grueso de 4 colores:
  - Turquesa → lado superior
  - Azul → lado derecho
  - Verde → lado inferior
  - Amarillo → lado izquierdo
- El interior está dividido en 4 triángulos por las dos diagonales
- En el centro, un círculo con el logo del evento ("The Greatest Heist in Madrid")
- Fondo negro

---

## US-02 — Introducción del dígito

**Como** equipo, al llegar a la caja fuerte,
**quiero** pulsar mi cuadrante e introducir mi número,
**para** aportar mi parte del código.

### Criterios de aceptación
- Al pulsar un triángulo, se abre un modal a pantalla casi completa con fondo desenfocado (blur)
- El modal muestra un dialpad numérico: dígitos 0–9, botón borrar y botón confirmar
- Botones grandes, optimizados para uso táctil en iPad
- Al confirmar, el modal se cierra y el dígito aparece centrado en el triángulo correspondiente
- Un cuadrante ya rellenado no abre modal al pulsarlo de nuevo (número bloqueado)

---

## US-03 — Apertura de la caja

**Como** grupo de los 4 equipos,
**queremos** pulsar el centro una vez introducidos los 4 dígitos,
**para** comprobar si el código es correcto y abrir la caja.

### Criterios de aceptación
- El logo central es pulsable solo cuando los 4 cuadrantes tienen número
- Si el código es correcto (7-6-3-2) → pantalla completamente roja con animación Coca-Cola
- Si el código es incorrecto → feedback visual (destello en bordes) y los 4 dígitos se borran para reintentar
- Reintentos ilimitados
