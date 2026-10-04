---
name: astro-component
description: Convenciones para crear o modificar componentes y secciones .astro en Círculo Grill (props tipadas, estilos scoped con tokens, imágenes optimizadas, accesibilidad, scripts). Úsala siempre que vayas a crear un componente, sección, layout o bloque reutilizable en src/components o src/layouts, o a refactorizar uno existente.
---

# Componentes Astro — Círculo Grill

Antes de diseñar, aplica la skill `ui-ux-design` (tokens, jerarquía, UX). Para movimiento, la skill `animations`. Si dudas de una API de Astro, consulta https://docs.astro.build/en/basics/astro-components/.

## Estructura de carpetas

```
src/
  components/
    ui/         → piezas atómicas: Button, Badge, Icon, Container, SectionHeading
    sections/   → bloques de página: Hero, MenuSection, About, Gallery, Booking, Location
    layout/     → Header, Footer, MobileMenu, SkipLink
  layouts/      → Layout.astro (html, head, SEO, estilos globales)
  styles/       → tokens.css, global.css, animations.css
  assets/       → imágenes procesadas por <Image /> / <Picture />
  content/      → colecciones (carta, etc.)
```

Nombres en PascalCase (`MenuCard.astro`). Un componente = una responsabilidad.

## Plantilla

```astro
---
import type { HTMLAttributes } from 'astro/types';
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';

interface Props extends HTMLAttributes<'article'> {
  title: string;
  description?: string;
  price: number;
  image?: ImageMetadata;
  imageAlt?: string;
}

const { title, description, price, image, imageAlt = '', class: className, ...rest } = Astro.props;
const formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
---

<article class:list={['menu-card', className]} data-reveal {...rest}>
  {image && (
    <div class="menu-card__media">
      <Image src={image} alt={imageAlt} widths={[320, 640, 960]} sizes="(min-width: 768px) 33vw, 100vw" />
    </div>
  )}
  <div class="menu-card__body">
    <h3 class="menu-card__title">{title}</h3>
    {description && <p class="menu-card__desc">{description}</p>}
    <p class="menu-card__price">{formattedPrice}</p>
  </div>
  <slot />
</article>

<style>
  .menu-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  .menu-card__body { padding: var(--space-6); }
  .menu-card__title { font-family: var(--font-display); font-size: var(--fs-lg); margin: 0; }
  .menu-card__price { color: var(--color-gold); font-weight: 600; }

  @media (hover: hover) {
    .menu-card:hover { border-color: var(--color-accent); }
  }
</style>
```

## Reglas

- **Props:** siempre `interface Props`, con valores por defecto en la desestructuración. Reenvía `class` y `...rest` en componentes de UI para poder extenderlos.
- **Estilos:** `<style>` scoped. Solo valores de tokens (`var(--…)`); nada de colores o tamaños hardcodeados. Usa `:global()` solo cuando sea imprescindible (contenido de slots, markdown). Clases tipo BEM ligero (`bloque__elemento--modificador`).
- **Variantes:** con props + `class:list`, p. ej. `variant: 'primary' | 'ghost'`, `size: 'sm' | 'md' | 'lg'`.
- **Imágenes:** importadas desde `src/assets` y renderizadas con `<Image />` o `<Picture />` de `astro:assets` (formatos modernos, `widths` + `sizes`). La imagen del hero con `loading="eager"` y `fetchpriority="high"`; el resto lazy (por defecto).
- **Enlaces vs botones:** navegación → `<a>`; acción → `<button type="button">`. El componente `Button` debe renderizar `a` si recibe `href`.
- **Semántica y a11y:** heading del nivel correcto (recibe `as`/`level` como prop si el componente se reutiliza en distintos contextos), `aria-*` en elementos interactivos personalizados, foco visible.
- **JavaScript:** por defecto cero. Si hace falta, `<script>` dentro del componente (Astro lo empaqueta y deduplica). Selecciona elementos con `data-*`, soporta múltiples instancias (`querySelectorAll`), y reengancha en `astro:page-load` si se usa `<ClientRouter />`. Para islas con estado complejo, considera un framework con `client:visible`, pero pregúntalo antes de añadir dependencias.
- **Textos:** en español, con `lang="es"` en el Layout. Precios con `Intl.NumberFormat('es-ES')`.
- **Datos:** contenido repetitivo (platos, horarios, reseñas) fuera del componente — en una content collection o en `src/data/*.ts` — nunca hardcodeado en el markup.

## Al terminar

1. `npx astro check` sin errores (si no está instalado `@astrojs/check`, sugiere instalarlo).
2. Revisa el componente en el dev server (`astro dev --background`) a 375px y 1440px.
3. Prueba navegación con teclado (Tab / Shift+Tab / Enter / Esc).
