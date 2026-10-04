---
name: media-optimization
description: Optimización de imágenes y fuentes en la web de Círculo Grill — <Image />/<Picture /> de astro:assets, formatos AVIF/WebP, widths y sizes, imagen LCP del hero, evitar CLS, galerías, OG images, vídeo/poster, y carga de tipografías con la API de fuentes de Astro (subsets, pesos, preload, fallbacks métricos). Úsala siempre que añadas, sustituyas o muestres una imagen o vídeo, cuando toques tipografías o el <head>, o cuando el usuario hable de "la web va lenta", "pesa mucho", Lighthouse, LCP/CLS, rendimiento, "optimizar imágenes/fuentes".
---

# Optimización de imágenes y fuentes — Círculo Grill

Meta: una web de restaurante **muy visual** (fotos de brasa, platos, local) que aun así cargue rápido en móvil con 4G. Objetivos: **LCP < 2.5 s, CLS < 0.1**, peso total de la home < 1.5 MB en la primera carga.

Antes de tocar APIs, consulta si hay dudas:
- Imágenes: https://docs.astro.build/en/guides/images/
- Fuentes: https://docs.astro.build/en/guides/fonts/

---

## Parte 1 — Imágenes

### 1.1 Dónde va cada archivo

| Ubicación | Qué va ahí | Se optimiza |
|---|---|---|
| `src/assets/images/<sección>/` | Todas las fotos de contenido (hero, platos, galería, equipo, local) | ✅ Sí, vía `astro:assets` |
| `src/assets/icons/` | SVG de iconos/logo que se importan como componente | — (SVG) |
| `public/` | Solo lo que necesita URL fija: `favicon.*`, `og-default.jpg`, `robots.txt`, `manifest` | ❌ No — se sirve tal cual |

Regla: **si una foto está en `public/`, está mal** (salvo la OG por defecto). Muévela a `src/assets`.

Nombres en kebab-case descriptivos: `chuleton-brasa.jpg`, `sala-terraza-noche.jpg` (nada de `IMG_2031.JPG`).

### 1.2 Preparar los originales

Astro genera las variantes, pero el original importa (tiempo de build y calidad):

- Lado largo máximo **2400 px** (hero) / **1600 px** (resto). Más es inútil.
- Formato fuente JPG calidad ~85 o PNG solo si hay transparencia. Nunca HEIC.
- Elimina EXIF y corrige la orientación. Con `sharp` (lo usa Astro; si no está, `npm i -D sharp`), un script puntual en el scratchpad:

```js
// resize-originals.mjs — sobrescribe los originales: haz commit antes
import sharp from 'sharp';
import { globSync } from 'node:fs';
for (const file of globSync('src/assets/images/**/*.{jpg,jpeg}')) {
  const max = file.includes('/hero/') ? 2400 : 1600;
  const buf = await sharp(file).rotate().resize(max, max, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true }).toBuffer();
  await sharp(buf).toFile(file);
}
```

Revisa con `find src/assets -type f -size +1M` — cualquier original > 1 MB debe reducirse.

### 1.3 Componente según el caso

```astro
---
import { Image, Picture } from 'astro:assets';
import hero from '../../assets/images/hero/parrilla-brasas.jpg';
import plato from '../../assets/images/carta/chuleton-brasa.jpg';
---
```

**Hero / imagen LCP** — `<Picture />` con AVIF + WebP, carga inmediata, prioridad alta:

```astro
<Picture
  src={hero}
  formats={['avif', 'webp']}
  alt="Chuletón chisporroteando sobre las brasas de encina"
  widths={[640, 960, 1280, 1920, 2400]}
  sizes="100vw"
  loading="eager"
  fetchpriority="high"
  class="hero__img"
/>
```

**Imágenes de contenido** (tarjetas de carta, about, equipo) — `<Image />` lazy (por defecto):

```astro
<Image
  src={plato}
  alt="Chuletón de vaca madurada cortado en tiras con sal en escamas"
  widths={[320, 640, 960]}
  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
/>
```

**Decorativas** (texturas, fondos de humo): `alt=""` y, si es posible, CSS `background-image` con `image-set()` de una imagen importada (`getImage()`), o un SVG/gradiente en vez de foto.

### 1.4 Reglas imprescindibles

1. **Siempre `widths` + `sizes`.** El `sizes` debe reflejar el ancho real en el layout; si la tarjeta ocupa un tercio en desktop, `33vw`, no `100vw`. Un `sizes` mal puesto descarga imágenes 3× más grandes.
2. **Solo UNA imagen con `loading="eager"` + `fetchpriority="high"`** por página: la del LCP (normalmente el hero). Todo lo demás, lazy.
3. **Nada de CLS:** las imágenes importadas ya tienen `width`/`height`; no los sobrescribas con CSS sin `aspect-ratio`. Para recortes usa `aspect-ratio` + `object-fit: cover` en el contenedor:
   ```css
   .menu-card__media { aspect-ratio: 4 / 3; overflow: hidden; }
   .menu-card__media img { width: 100%; height: 100%; object-fit: cover; }
   ```
4. **`alt` descriptivo y apetecible**, en español, describiendo el plato o la escena (no "imagen de comida"). Vacío solo si es decorativa.
5. **Calidad:** el valor por defecto es correcto. Para el hero puedes usar `quality={75}`; nunca subas a 100.
6. **Imágenes remotas** (CDN, Instagram, CMS): autoriza el dominio en `astro.config.mjs` y pasa `width`/`height` o `inferSize`:
   ```js
   image: { domains: ['images.ejemplo-cms.com'] }
   ```
7. **Opcional — layout responsive global.** Para no repetir estilos, se puede activar en config y usar `layout` por imagen:
   ```js
   image: { layout: 'constrained', responsiveStyles: true }
   ```
   Con `layout="full-width"` en el hero, Astro calcula `srcset`/`sizes` automáticamente. Elige un enfoque (manual o `layout`) y sé coherente en todo el proyecto.

### 1.5 Galerías y listas largas

- Imágenes desde una content collection con el helper `image()` del schema, para tiparlas y optimizarlas:
  ```ts
  // src/content.config.ts
  schema: ({ image }) => z.object({ title: z.string(), photo: image(), alt: z.string() })
  ```
- O, para una carpeta entera: `import.meta.glob('/src/assets/images/galeria/*.{jpg,png}', { eager: true })`.
- Thumbnails pequeños (`widths={[300, 600]}`) y la versión grande solo al abrir el lightbox.
- Un placeholder de color mientras carga: `background: var(--color-surface)` en el contenedor (sin librerías de blur salvo que se pida).

### 1.6 Open Graph y favicon

- `og:image`: 1200×630, JPG < 300 KB. Si se genera por página, usa `getImage({ src, width: 1200, height: 630, format: 'jpg' })` y una URL absoluta (requiere `site` en config).
- Favicon: `favicon.svg` + `favicon.ico` (32 px) + `apple-touch-icon.png` (180 px) en `public/`.

### 1.7 Vídeo (hero con brasas en movimiento)

- MP4 H.264 + WebM, **≤ 2–3 MB**, 8–15 s en bucle, sin audio, 1280 px de ancho máx.
  ```bash
  ffmpeg -i brasas.mov -an -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart brasas.mp4
  ffmpeg -i brasas.mov -an -vf "scale=1280:-2" -c:v libvpx-vp9 -crf 36 -b:v 0 brasas.webm
  ```
- `<video autoplay muted loop playsinline preload="none" poster={posterUrl}>` con el poster generado con `getImage()`. El **poster** es el LCP, trátalo como la imagen del hero.
- En móvil o con `prefers-reduced-motion: reduce`, muestra solo el poster.

---

## Parte 2 — Fuentes

Tipografías del proyecto (ver skill `ui-ux-design`): **Playfair Display** (titulares) e **Inter** (texto). Si cambian, conserva los nombres de los tokens `--font-display` y `--font-body`.

### 2.1 Usa la API de fuentes de Astro (nunca `<link>` a Google Fonts ni `@import`)

Astro descarga, autoaloja y genera `@font-face` + fallbacks métricos. En `astro.config.mjs`:

```js
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-display',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400 700'],        // fuente variable: un solo archivo para todo el rango
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
```

Y en el `<head>` de `src/layouts/Layout.astro`:

```astro
---
import { Font } from 'astro:assets';
---
<head>
  <Font cssVariable="--font-display" preload={[{ weight: 700, style: 'normal' }]} />
  <Font cssVariable="--font-body" preload />
</head>
```

En `tokens.css` **no** redefinas `--font-display`/`--font-body` con el nombre de la familia: ya los define `<Font />` (incluidos los fallbacks). Úsalos directamente: `font-family: var(--font-display);`.

### 2.2 Reglas

1. **Mínimos pesos y estilos.** Cada peso/estilo es un archivo. Display: 1–2 pesos. Body: variable o 400 + 600. Sin itálicas salvo que el diseño las use de verdad.
2. **Subset `latin`** basta para español (incluye á é í ó ú ñ ü ¿ ¡ € ). No añadas `latin-ext` salvo nombres con caracteres especiales.
3. **Preload solo lo crítico:** la fuente del `h1` del hero y el peso normal del cuerpo. Máximo 2–3 archivos precargados. Precargar de más retrasa el LCP.
4. **`display: 'swap'`** (valor por defecto de la API) — texto visible al instante. Los fallbacks métricos optimizados (`optimizedFallbacks`, activo por defecto) evitan el salto de layout al cambiar de fuente; no lo desactives.
5. **Formato:** WOFF2 (por defecto). No añadas WOFF/TTF.
6. **Fuentes propias de marca** (archivos `.woff2` que entregue el cliente): ponlas en `src/assets/fonts/` y usa el provider local:
   ```js
   {
     provider: fontProviders.local(),
     name: 'Circulo Display',
     cssVariable: '--font-display',
     fallbacks: ['Georgia', 'serif'],
     options: {
       variants: [
         { src: ['./src/assets/fonts/circulo-display-700.woff2'], weight: 700, style: 'normal' },
       ],
     },
   }
   ```
7. **Iconos:** SVG inline o componente, nunca una fuente de iconos completa.

---

## Checklist al terminar

```bash
npm run build
find dist/_astro -type f \( -name '*.avif' -o -name '*.webp' -o -name '*.jpg' \) -size +250k   # variantes sospechosas
find dist -name '*.woff2' | xargs du -ch | tail -1                                            # total fuentes (objetivo < 150 KB)
find public -type f -size +300k                                                              # nada pesado sin optimizar
grep -rn "<img" src --include='*.astro'                                                      # <img> crudos: revisar
grep -rn "fonts.googleapis\|@import url" src                                                 # debe salir vacío
```

- [ ] Ninguna foto de contenido en `public/`.
- [ ] Todas las imágenes con `alt`, `widths` y `sizes` coherentes con el layout.
- [ ] Una sola imagen `eager` + `fetchpriority="high"` por página (la LCP).
- [ ] Contenedores con `aspect-ratio`; CLS < 0.1.
- [ ] Fuentes vía `fonts` + `<Font />`, ≤ 4 archivos, preload solo de las críticas.
- [ ] Lighthouse móvil sobre `npm run preview`: LCP < 2.5 s, sin avisos de "Properly size images" ni "Serve images in next-gen formats".

Relación con otras skills: `astro-component` (cómo se integran las imágenes en componentes), `ui-ux-design` (qué tipografías y qué fotos), `pre-deploy-check` (verificación final).
