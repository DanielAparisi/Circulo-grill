---
name: animations
description: Animaciones y micro-interacciones para la web de Círculo Grill — reveal al hacer scroll, parallax, efectos de brasa/fuego, hover en tarjetas y botones, transiciones entre páginas con View Transitions de Astro, contadores y marquee. Úsala cuando el usuario pida animaciones, efectos, "que se mueva", "algo chulo/espectacular", transiciones, parallax o micro-interacciones, o al terminar de maquetar una sección nueva.
---

# Animaciones — Círculo Grill

Meta: movimiento que **evoca fuego y calidez** (ascuas, humo, brillo), fluido a 60 fps y que nunca estorba a la lectura ni a la reserva.

## Reglas de oro

1. **Solo `transform` y `opacity`** (y `filter` con moderación). Nunca animes `width`, `height`, `top`, `left`, `margin`.
2. **CSS primero.** JS solo para disparar estados (IntersectionObserver) o efectos que CSS no puede hacer. Sin librerías salvo que el efecto lo justifique (en ese caso, GSAP o Motion One, cargados solo donde se usen).
3. **Respeta `prefers-reduced-motion`.** Todo efecto debe tener versión estática.
4. **Duraciones:** micro-interacciones 150–250ms, reveals 500–800ms, nunca > 1.2s. Usa los tokens `--dur-*` y `--ease-*` de `src/styles/tokens.css` (ver skill `ui-ux-design`).
5. **Sutileza.** Desplazamientos de 16–40px, escalas 0.96–1.05. Un efecto "wow" por página (normalmente el hero); el resto, discreto.
6. **Sin layout shift:** el contenido debe ocupar su espacio antes de animarse.

## Base global

Añade a `src/styles/animations.css` (importado en el Layout):

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html { scroll-behavior: smooth; }
```

## Recetario

### 1. Reveal al hacer scroll (el más usado)

CSS:
```css
[data-reveal] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity var(--dur-slow) var(--ease-out),
              transform var(--dur-slow) var(--ease-out);
  transition-delay: calc(var(--reveal-i, 0) * 80ms);
}
[data-reveal="left"]  { transform: translateX(-40px); }
[data-reveal="right"] { transform: translateX(40px); }
[data-reveal="zoom"]  { transform: scale(0.94); }
[data-reveal].is-visible { opacity: 1; transform: none; }

/* Sin JS → visible */
html:not(.js) [data-reveal] { opacity: 1; transform: none; }
```

Script único en el Layout (`<script>` de Astro, se empaqueta y se carga una vez):
```astro
<script>
  document.documentElement.classList.add('js');
  const setup = () => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el));
  };
  setup();
  document.addEventListener('astro:page-load', setup); // si se usa <ClientRouter />
</script>
```
Para escalonar en listas: `style={`--reveal-i: ${i}`}` en cada elemento del `.map()`.

Alternativa moderna sin JS (progresiva): `animation-timeline: view()` dentro de `@supports (animation-timeline: view())`.

### 2. Hero "brasa"

- **Ken Burns** en la imagen de fondo: `@keyframes kenburns { from { transform: scale(1.08) } to { transform: scale(1) } }` 12s `ease-out` `forwards`.
- **Titular por líneas/palabras**: envuelve cada palabra en `<span style="--i:n">` con `overflow: hidden` en el padre y anima `translateY(100%) → 0` con delay `calc(var(--i) * 90ms)`.
- **Ascuas flotantes**: 12–20 `<span class="ember">` absolutamente posicionados (decorativos, `aria-hidden="true"`), círculos de 2–4px con `background: var(--color-accent)` y `box-shadow: var(--shadow-glow)`, animados con `translateY(0) → translateY(-60vh)` + `opacity 0 → 1 → 0`, duraciones y delays aleatorios generados en el frontmatter. Desactivar con reduced-motion. Para algo más rico, un `<canvas>` con partículas, pausado con IntersectionObserver cuando no está visible.
- **Glow pulsante** en el CTA principal: `box-shadow` animado vía pseudo-elemento con `opacity` (no animes `box-shadow` directamente).

### 3. Parallax ligero

Preferir CSS scroll-driven:
```css
@supports (animation-timeline: scroll()) {
  .parallax-img {
    animation: parallax linear both;
    animation-timeline: view();
  }
  @keyframes parallax { from { transform: translateY(-8%) } to { transform: translateY(8%) } }
}
```
Imagen con `scale(1.2)` en el contenedor para que no se vean bordes. Fallback: estático.

### 4. Micro-interacciones

- **Botón:** hover → `translateY(-2px)` + brillo; active → `scale(0.97)`. Efecto "shine" con `::after` en gradiente que cruza con `translateX`.
- **Tarjeta de plato:** hover → imagen `scale(1.06)` dentro de `overflow: hidden`, tarjeta `translateY(-4px)`, borde a `--color-accent`. Solo dentro de `@media (hover: hover)`.
- **Enlaces de nav:** subrayado que crece con `transform: scaleX(0 → 1)` y `transform-origin` a la izquierda.
- **Header:** al hacer scroll > 50px, añade clase que reduce altura y aplica `backdrop-filter: blur(12px)` con fondo semitransparente.
- **Menú móvil:** panel con `translateX(100%) → 0`, enlaces con reveal escalonado.

### 5. Transiciones entre páginas (Astro View Transitions)

En `Layout.astro`:
```astro
---
import { ClientRouter } from 'astro:transitions';
---
<head>
  <ClientRouter />
</head>
```
- Morph de elementos compartidos con `transition:name="plato-{slug}"` (p. ej. imagen de la tarjeta → imagen en la página de detalle).
- `transition:animate="fade"` o `"slide"` por elemento; `transition:persist` para el header.
- Con ClientRouter, los scripts deben reengancharse en `astro:page-load`.
- Consulta https://docs.astro.build/en/guides/view-transitions/ antes de implementarlo.

### 6. Otros recursos

- **Contadores** ("+15 años", "2.000 kg de brasa al mes"): `requestAnimationFrame` con easing al entrar en viewport.
- **Marquee** de frases o logos de proveedores: dos copias del contenido en un track con `translateX(0 → -50%)` infinito, pausa en hover.
- **Humo**: SVG con `feTurbulence` + `feDisplacementMap` animado muy lento, `opacity` baja, solo en escritorio.

## Checklist antes de dar por terminado

- [ ] Probado con `prefers-reduced-motion: reduce` (DevTools → Rendering).
- [ ] Sin CLS: el contenido no salta al cargar.
- [ ] Sin jank: Performance panel sin long tasks durante el scroll.
- [ ] Elementos decorativos con `aria-hidden="true"` y `pointer-events: none`.
- [ ] Funciona (contenido visible) con JS desactivado.
- [ ] En móvil los efectos pesados (canvas, parallax, humo) están reducidos o desactivados.
