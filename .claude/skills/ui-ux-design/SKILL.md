---
name: ui-ux-design
description: Sistema de diseño y criterios UI/UX de la web de Círculo Grill (restaurante a la brasa). Úsala SIEMPRE antes de diseñar, maquetar o rediseñar cualquier página, sección o componente visual (hero, carta/menú, reservas, galería, footer, navegación), al elegir colores, tipografías, espaciados o layout, o cuando el usuario pida "que quede bonito", "mejorar el diseño", "más moderno/premium" o revisar la UX.
---

# UI/UX — Círculo Grill

Objetivo: una web de restaurante a la brasa que transmita **fuego, producto y calidez**, con aspecto premium pero cercano, y que lleve al usuario a **reservar** o **ver la carta** en el menor número de pasos.

## 1. Principios

1. **El producto manda.** Fotografía grande de carne, brasas y sala. El texto acompaña, no compite.
2. **Una acción principal por pantalla.** El CTA "Reservar mesa" debe estar siempre a un toque (header fijo en móvil o botón flotante).
3. **Mobile first.** La mayoría de visitas llegan desde el móvil buscando: horario, dirección, teléfono, carta. Esa info nunca debe estar a más de un scroll.
4. **Contraste y legibilidad antes que estética.** Texto ≥ 4.5:1 (WCAG AA), cuerpo ≥ 16px.
5. **Coherencia.** Usa solo los tokens definidos abajo; si necesitas uno nuevo, añádelo al archivo de tokens, no lo escribas a mano en un componente.

## 2. Tokens de diseño

Los tokens viven en `src/styles/tokens.css` (créalo si no existe e impórtalo en `src/layouts/Layout.astro`). Punto de partida:

```css
:root {
  /* Color — paleta "brasa" */
  --color-bg: #0f0d0b;          /* carbón */
  --color-surface: #1a1714;     /* tarjetas, secciones alternas */
  --color-surface-2: #25201b;
  --color-text: #f4ede4;        /* hueso cálido */
  --color-text-muted: #b8ab9a;
  --color-accent: #e2622b;      /* ascua */
  --color-accent-hover: #f07a3f;
  --color-gold: #c9a35c;        /* detalles premium, precios */
  --color-border: #3a322a;

  /* Tipografía */
  --font-display: "Playfair Display", Georgia, serif;   /* titulares */
  --font-body: "Inter", system-ui, sans-serif;          /* texto */
  --fs-xs: clamp(0.75rem, 0.72rem + 0.15vw, 0.85rem);
  --fs-sm: clamp(0.875rem, 0.85rem + 0.15vw, 0.95rem);
  --fs-base: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  --fs-lg: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --fs-xl: clamp(1.75rem, 1.5rem + 1.2vw, 2.5rem);
  --fs-2xl: clamp(2.5rem, 1.9rem + 3vw, 4.5rem);
  --fs-hero: clamp(3rem, 2rem + 5vw, 7rem);

  /* Espaciado (escala 4px) */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;
  --space-6: 1.5rem;  --space-8: 2rem;   --space-12: 3rem;   --space-16: 4rem;
  --space-24: 6rem;   --space-32: 8rem;
  --section-y: clamp(4rem, 3rem + 5vw, 8rem);

  /* Layout */
  --container: 1200px;
  --container-narrow: 760px;
  --gutter: clamp(1rem, 0.5rem + 2.5vw, 2.5rem);

  /* Forma y profundidad */
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 24px; --radius-full: 999px;
  --shadow-md: 0 8px 24px rgb(0 0 0 / 0.35);
  --shadow-glow: 0 0 40px rgb(226 98 43 / 0.35);

  /* Movimiento (ver skill `animations`) */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast: 150ms; --dur-base: 300ms; --dur-slow: 700ms;
}
```

Si el usuario aporta colores/logo/tipografías de marca reales, **sustituye** estos valores y conserva los nombres de los tokens.

Fuentes: cárgalas con la API de fuentes de Astro (`fonts` en `astro.config.mjs` + componente `<Font />`) o autoalojadas; consulta https://docs.astro.build/en/guides/fonts/ antes. Evita `@import` de Google Fonts en CSS (bloquea el render).

## 3. Layout y composición

- Contenedor: `max-width: var(--container); margin-inline: auto; padding-inline: var(--gutter);`
- Separación vertical entre secciones: `padding-block: var(--section-y)`.
- Usa CSS Grid para estructuras y Flexbox para alinear elementos dentro.
- Alterna ritmo: sección a ancho completo con imagen → sección de texto estrecha → grid. Evita 5 secciones seguidas con la misma estructura.
- Jerarquía tipográfica: un único `h1` por página; titulares en `--font-display`, todo lo demás en `--font-body`. Interlineado: 1.1 en titulares, 1.6 en cuerpo. Ancho de línea ≤ 70ch.
- Usa espacio negativo generoso: si dudas, más aire.

## 4. Secciones típicas y su UX

| Sección | Debe incluir | Errores a evitar |
|---|---|---|
| **Header / nav** | Logo, 4–6 enlaces máx., CTA "Reservar", teléfono clicable en móvil | Menú hamburguesa sin `aria-expanded`; enlaces que no cierran el menú |
| **Hero** | Imagen/vídeo a pantalla completa con overlay oscuro, titular corto (≤ 8 palabras), subtítulo, 2 CTAs (Reservar / Ver carta) | Texto ilegible sobre la foto; vídeo pesado sin `poster` |
| **Carta / menú** | Categorías con anclas o tabs, nombre, descripción breve, precio alineado, alérgenos con icono + texto | PDF como única carta; precios sin formato `12,50 €` |
| **Sobre nosotros / brasa** | Historia breve, foto del equipo o la parrilla | Bloques de texto largos |
| **Galería** | Grid tipo masonry o carrusel accesible, `<Image />` con `widths`/`sizes` | Imágenes sin optimizar o sin `alt` |
| **Reservas** | Formulario corto (fecha, hora, personas, nombre, teléfono) o enlace al sistema externo; estados de carga/éxito/error | Pedir datos innecesarios; sin feedback |
| **Ubicación y horario** | Dirección, mapa (cargado en diferido), horario en tabla, enlace "Cómo llegar" | Mapa iframe que bloquea la carga |
| **Footer** | Contacto, horario, redes, aviso legal / cookies | — |

## 5. Componentes interactivos — estados obligatorios

Todo elemento interactivo debe tener: `default`, `hover` (solo con `@media (hover: hover)`), `focus-visible` (anillo visible: `outline: 2px solid var(--color-accent); outline-offset: 3px`), `active` y `disabled` si aplica. Objetivo táctil mínimo 44×44px.

## 6. Accesibilidad (no negociable)

- HTML semántico: `header`, `nav`, `main`, `section` con heading, `footer`.
- `alt` descriptivo en imágenes de contenido; `alt=""` en decorativas.
- `lang="es"` en `<html>`.
- Navegable completamente con teclado; enlace "Saltar al contenido".
- Respeta `prefers-reduced-motion` (ver skill `animations`).

## 7. Proceso de trabajo

1. Antes de maquetar, enuncia en 2–3 líneas el objetivo de la sección y la acción que debe provocar.
2. Comprueba que existen los tokens; créalos si faltan.
3. Construye la sección con la skill `astro-component`.
4. Añade movimiento con la skill `animations` (siempre al final, nunca como sustituto de buena jerarquía).
5. Verifica visualmente arrancando `astro dev --background` y revisando a 375px, 768px y 1440px de ancho (usa la skill `run` o el navegador si está disponible).
6. Autoevaluación rápida: ¿se entiende en 3 segundos qué es y cómo reservar? ¿hay algo que sobre?
