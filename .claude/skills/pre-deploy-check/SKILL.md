---
name: pre-deploy-check
description: Auditoría completa de la web de Círculo Grill antes de publicar — build, tipos, enlaces rotos, imágenes, SEO, accesibilidad, rendimiento y calidad de animaciones/UI. Úsala cuando el usuario diga "revisa antes de subir", "¿está listo para publicar?", "deploy", "checklist", "auditoría" o tras terminar un bloque grande de cambios.
disable-model-invocation: true
---

# Pre-deploy check — Círculo Grill

Ejecuta los pasos en orden. No corrijas nada sin preguntar salvo errores triviales (typos, `alt` vacío evidente); al final entrega un **informe** con ✅ / ⚠️ / ❌ por apartado y la lista de arreglos propuestos priorizados.

## 1. Build y tipos

```bash
npx astro check     # si falla por falta de @astrojs/check, indícalo y continúa
npm run build
```
Cualquier error o warning de build es ❌. Anota el tamaño de `dist/` y los bundles JS más grandes (`find dist -name '*.js' -exec du -h {} + | sort -h | tail`).

## 2. Contenido y enlaces

- Busca restos de la plantilla: `grep -rniE "astro basics|lorem|todo|fixme|welcome" src/`.
- `Welcome.astro` y assets de ejemplo eliminados si ya no se usan.
- Enlaces internos: todas las `href="/..."` apuntan a páginas existentes en `src/pages` (o en `dist/` tras el build).
- `tel:` y `mailto:` correctos; enlaces externos con `rel="noopener"` si usan `target="_blank"`.
- Horario, dirección, teléfono y precios coinciden en todas las páginas.

## 3. SEO

Por cada página en `dist/**/*.html`:
- `<html lang="es">`, `<title>` único (≤ 60 caracteres), `<meta name="description">` (≤ 160).
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) y `twitter:card`.
- Un solo `<h1>`; jerarquía de headings sin saltos.
- `site` configurado en `astro.config.mjs` (necesario para URLs canónicas y sitemap).
- Recomendado: `@astrojs/sitemap`, `robots.txt` y datos estructurados JSON-LD `Restaurant` (nombre, dirección, horario `openingHoursSpecification`, `servesCuisine`, `priceRange`, `menu`, `acceptsReservations`).

## 4. Imágenes

- Todas las `<img>` tienen `alt` (vacío solo si son decorativas).
- Imágenes de contenido servidas vía `astro:assets` (formatos webp/avif en `dist/_astro`).
- Nada en `public/` > 300 KB sin justificación: `find public -type f -size +300k`.
- La imagen LCP (hero) no es lazy y tiene `fetchpriority="high"`.

## 5. Accesibilidad

- Contraste de colores de los tokens (texto/fondo ≥ 4.5:1; texto grande ≥ 3:1).
- Foco visible en todos los interactivos; enlace "Saltar al contenido".
- Menú móvil: `aria-expanded`, `aria-controls`, cierre con Esc, foco gestionado.
- Formularios: cada input con `<label>`, mensajes de error asociados.
- Si hay navegador disponible, pasa Lighthouse/axe sobre `npm run preview`.

## 6. Rendimiento

- Lanza `npm run preview` (en background) y, si es posible, Lighthouse móvil. Objetivo: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, CLS < 0.1, LCP < 2.5s.
- Fuentes: preload solo de las críticas, `font-display: swap`.
- Iframes (mapa, vídeo) en diferido (`loading="lazy"` o fachada clicable).
- Ningún JS de terceros innecesario.

## 7. UI y animaciones

- Revisa visualmente a 375px, 768px y 1440px: sin scroll horizontal, sin texto cortado, CTAs visibles.
- Cumple el checklist final de la skill `animations` (reduced-motion, sin CLS, contenido visible sin JS).
- Coherencia con los tokens de la skill `ui-ux-design`: `grep -rnE "#[0-9a-fA-F]{3,6}\b" src/components` no debería devolver colores sueltos fuera de `tokens.css`.

## 8. Legal (España / UE)

- Páginas de Aviso legal, Política de privacidad y Cookies enlazadas en el footer.
- Banner de cookies si se usan analíticas o embeds que ponen cookies (Google Maps, YouTube, Instagram).
- Alérgenos identificables en la carta (Reglamento UE 1169/2011).

## Informe final

```
## Resultado pre-deploy — <fecha>
Build/tipos ......... ✅/⚠️/❌
Contenido/enlaces ... …
SEO ................. …
Imágenes ............ …
Accesibilidad ....... …
Rendimiento ......... …
UI/animaciones ...... …
Legal ............... …

### Bloqueantes (❌)
1. …
### Recomendados (⚠️)
1. …
```
Termina con un veredicto claro: **listo para publicar** o **no publicar todavía** (y por qué).
