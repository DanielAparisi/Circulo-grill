## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Círculo Grill — Manual de marca

Bar y parrilla en Las Castillas (Torrejón del Rey), con segundo local en el C.C. Belvalle de Meco. Hamburguesas, costillas, entrantes para compartir, take away y delivery.

- **Círculo Grill de Las Castillas** — Torrejón del Rey · 640 529 409 / 949 327 451
- **Círculo Grill & Go** — C.C. Belvalle, Meco · 640 25 44 65 · L, X, J, V, S y D · 20:00 – 23:30
- Instagram: @circulogrill

---

## 1. De dónde sale este manual

Todo lo que hay aquí está medido sobre material real de Círculo Grill: el logotipo del perfil, las dos páginas de la carta, las tarjetas de take away y las portadas de destacados de Instagram. Los colores son valores muestreados píxel a píxel sobre esas piezas, no aproximaciones.

**Dos cosas están pendientes:**

1. El **logotipo original en vector** (`.ai`, `.eps` o `.svg`). Lo que hay son recortes de una captura de pantalla a 94 y 154 px: sirven de referencia de color, no para imprimir ni para web.
2. La **tipografía real** de la carta impresa. Mientras tanto se usan Montserrat e Inter, que son lo más parecido a lo que ya está en uso.

---

## 2. La idea

Una taberna de castillo que hace hamburguesas. El escudo almenado pone la parte de "Las Castillas" y la hamburguesa pone la parte de parrilla. El tono visual que sale de ahí, y que ya tienen la carta y el perfil:

- **Cálido, no oscuro.** El fondo es crema de papel, no negro de steakhouse. La carta respira.
- **Oro como color de la casa.** El naranja y el oro son la marca; los grises del escudo son el soporte.
- **Redondo.** Placa redondeada, destacados circulares, manchas orgánicas en los márgenes. Las esquinas vivas se evitan.
- **Directo.** El plato, qué lleva y el precio. Sin adjetivos de restaurante caro.

---

## 3. Voz

Se habla de tú, con el tono de quien atiende en barra: cercano y breve.

| Así sí | Así no |
| --- | --- |
| "Por si no puedes elegir: aros de cebolla, alitas, palitos de queso y jalapeños." | "Una selección de nuestros entrantes más representativos." |
| "¿Tú eliges?" | "Elija usted su preferencia." |
| "Añade guacamole por 2 € más." | "Suplemento de guacamole: 2,00 €." |
| "Pídelo con pollo empanado." | "Disponible con la opción de pollo empanado." |

Reglas cortas:

- Mayúsculas solo en rótulos y etiquetas, nunca en una frase entera.
- Precios sin símbolo de euro en la carta impresa; **en la web, con euro** (`7,5 €`). El decimal con coma: `7,5`.
- Los dos locales se nombran siempre completos — **Círculo Grill de Las Castillas** y **Círculo Grill & Go (Meco)** — porque tienen carta y teléfono distintos.

---

## 4. Color

### 4.1 La paleta

| Token | Claro | Oscuro | Para qué |
| --- | --- | --- | --- |
| `naranja-grill` | `#e08a0e` | igual | **Color principal.** Las letras GRILL del logo. Botones, precios destacados, iconos. |
| `oro-logo` | `#e7af5a` | igual | La placa del logo y las tarjetas de take away. Bandas y fondos grandes. |
| `oro-carta` | `#f2b76b` | igual | Filetes y adornos de la carta. Separadores y subrayados. |
| `naranja-destacado` | `#ffac54` | igual | Solo promociones: 2x1, ofertas, novedades. |
| `melocoton` | `#f5c390` | igual | Manchas de fondo e ilustraciones. |
| `marron-brasa` | `#a87a62` | `#c89b82` | Bloque de fondo o pieza gráfica. |
| `gris-castillo` | `#4c4c4c` | igual | Tinta del escudo y del pan del logo. |
| `gris-muro` | `#b4b4b4` | igual | Torres del castillo y grafismo secundario. |
| `crema` | `#fffcf1` | `#1c1916` | Fondo de absolutamente todo. |
| `blanco` | `#ffffff` | `#27221e` | Tarjetas y bloques que se levantan sobre crema. |
| `crema-hundido` | `#f7eedd` | `#15120f` | Franjas rebajadas, filas alternas. |
| `parrilla` | `#302a25` | `#0f0d0b` | Banda oscura de contraste. |
| `borde` | `#e8d6c6` | `#3e362e` | Línea fina entre platos. Solo decorativa. |
| `borde-fuerte` | `#cbae91` | `#5a4e43` | Borde de botones e inputs. |
| `texto` | `#241f1b` | `#f6efe4` | Texto principal. 15,9:1 sobre crema. |
| `texto-suave` | `#5c5248` | `#c3b8aa` | Descripciones y datos secundarios. 7,4:1. |
| `texto-ambar` | `#7d4a0c` | `#f0c07a` | **Naranja legible para texto:** enlaces y precios. 7,2:1. |
| `texto-sobre-oro` | `#241f1b` | igual | Tinta sobre cualquier fondo naranja u oro. |
| `texto-sobre-parrilla` | `#fffcf1` | igual | Texto sobre banda oscura o foto oscurecida. 13,8:1. |
| `verde-huerta` | `#36692d` | `#8cc47c` | Plato vegetariano. 6,4:1 sobre crema. |
| `rojo-picante` | `#b3261e` | `#ff8a7a` | Plato picante y avisos. 6,4:1 sobre crema. |

### 4.2 Las cinco reglas que importan

1. **El oro no es un color de texto.** `naranja-grill` sobre crema se queda en 2,8:1 de contraste. Cuando hay que escribir en naranja se usa `texto-ambar` (`#7d4a0c`, 7,2:1). Es la equivocación más fácil de cometer y la que más se nota.
2. **Sobre fondo naranja u oro, la tinta es negra** (`texto-sobre-oro`). Blanco sobre oro no se usa nunca: no llega al contraste mínimo y además no es lo que hace el logo.
3. **Un solo naranja por pieza.** `naranja-grill` manda; `naranja-destacado` solo aparece cuando hay promoción, y entonces no comparte sitio con el otro.
4. **`marron-brasa` y `melocoton` son colores de bloque, no de texto.** El marrón con texto negro se queda en 4,37:1: solo admite texto de 24 px o más.
5. **El color nunca informa solo.** Vegetariano y picante llevan siempre icono y palabra, no únicamente el verde o el rojo.

### 4.3 Dos temas

- **Carta (claro)** — el de siempre, el que está impreso.
- **Parrilla (oscuro)** — para pantallas de noche y piezas sobre foto de brasa. En él el logo sigue necesitando su placa clara: sus grises desaparecen sobre fondo oscuro.

---

## 5. Tipografía

Dos familias, para no acabar con cinco:

- **Montserrat** en los rótulos. Geométrica y rotunda en mayúsculas, como está escrita la carta. Pesos 700 y 800.
- **Inter** en todo lo demás: nombres de plato, descripciones, precios, datos de contacto.

### 5.1 Estilos

| Estilo | Familia | Tamaño / interlineado | Peso | Para qué |
| --- | --- | --- | --- | --- |
| `rotulo-xl` | Montserrat | 56 / 52 px, −0,5 px | 800 | Titular de cartel y portada de carta |
| `rotulo-l` | Montserrat | 40 / 40 px | 800 | Titular de página o post de Instagram |
| `rotulo-m` | Montserrat | 28 / 30 px, +0,5 px | 800 | Titular secundario, cabecera de bloque |
| `seccion` | Montserrat | 22 / 26 px, +1,5 px | 700 | Cabecera de sección de la carta |
| `plato` | Inter | 17 / 22 px | 600 | Nombre del plato |
| `precio` | Inter | 17 / 22 px | 800 | Precio, cifras tabulares |
| `descripcion` | Inter | 14 / 20 px | 400 | Ingredientes del plato |
| `cuerpo` | Inter | 16 / 24 px | 400 | Texto corrido |
| `cuerpo-s` | Inter | 14 / 20 px | 400 | Contacto, horarios, notas |
| `etiqueta` | Inter | 12 / 16 px, +1 px | 700 | Rótulos cortos en mayúsculas |
| `boton` | Inter | 15 / 16 px, +0,5 px | 700 | Texto de botones |

### 5.2 Normas

- Los rótulos (`rotulo-xl`, `rotulo-l`, `rotulo-m`, `seccion`) van **en mayúsculas**. Las descripciones, nunca.
- El nombre del plato y su precio comparten línea base; el precio a la derecha (con euro en la web).
- Las etiquetas tipo `TAKE AWAY · DELIVERY` usan `etiqueta`, con el espaciado abierto que ya tienen las tarjetas de reparto.
- Mínimo 14 px en pantalla y 9 pt en la carta impresa.

---

## 6. Forma y espacio

### 6.1 Espaciado — escala de 4 px

| Token | Valor | Para qué |
| --- | --- | --- |
| `espacio-1` | 4 px | Icono ↔ texto |
| `espacio-2` | 8 px | Interior de etiquetas, línea ↔ descripción |
| `espacio-3` | 12 px | Alto interior de botones y filas |
| `espacio-4` | 16 px | Padding de tarjeta, separación entre platos |
| `espacio-5` | 24 px | Bloques dentro de una sección |
| `espacio-6` | 32 px | Tarjeta grande, margen lateral en móvil |
| `espacio-7` | 48 px | Entre secciones de la carta |
| `espacio-8` | 64 px | Márgenes de cartel y portada |

Entre dos platos, nunca menos de `espacio-4`. Entre secciones, `espacio-7`.

### 6.2 Radios

| Token | Valor | Para qué |
| --- | --- | --- |
| `radio-s` | 6 px | Etiquetas e inputs |
| `radio-m` | 12 px | Botones y tarjetas pequeñas |
| `radio-l` | 20 px | Tarjetas, fotos de plato |
| `radio-xl` | 28 px | Placa del logo, bandas de promoción |
| `radio-pill` | 999 px | Botón principal, chips, portadas circulares |

La marca es redonda. Ante la duda, redondea.

### 6.3 Sombras

| Token | Claro | Oscuro |
| --- | --- | --- |
| `sombra-carta` | `0 1px 2px rgba(36,31,27,.08), 0 8px 20px rgba(36,31,27,.07)` | `0 1px 2px rgba(0,0,0,.5), 0 8px 20px rgba(0,0,0,.45)` |
| `sombra-elevada` | `0 12px 32px rgba(36,31,27,.14)` | `0 12px 32px rgba(0,0,0,.6)` |

Separar con línea `borde` es preferible a separar con sombra.

---

## 7. Logotipo

El logotipo es un escudo: dos torres almenadas de castillo que abrazan una hamburguesa, con el nombre partido en dos líneas — **CÍRCULO** en gris sobre el pan superior y **GRILL** en naranja sobre la carne.

### 7.1 Tintas

- Gris oscuro del pan y del texto CÍRCULO: `gris-castillo` `#4c4c4c`
- Gris claro de las torres: `gris-muro` `#b4b4b4`
- Naranja de GRILL: `naranja-grill` `#e08a0e`
- Placa sobre la que se apoya: `blanco` o `crema`

El logo tiene color propio y **no se recolorea**. No se pone en blanco sobre naranja ni en una sola tinta, salvo en bordados o rotulación de un solo color, donde va todo en `gris-castillo`.

### 7.2 Cómo colocarlo

- **Placa siempre.** Sobre foto, sobre `parrilla` o sobre fondo oro, el logo va dentro de una placa `blanco` o `crema` con `radio-xl`. Nunca directamente sobre la foto de un plato: los grises se pierden.
- **Aire mínimo:** la altura de una almena por cada lado. En la práctica, `espacio-4` en piezas pequeñas y `espacio-6` en cartelería.
- **Tamaño mínimo:** 32 px de alto en pantalla, 15 mm en impresión. Por debajo, las almenas y la línea ondulada del pan se cierran.
- **No se toca:** no se estira, no se gira, no lleva sombra ni contorno, no se cambia la tipografía del rótulo y no se separa el castillo de la hamburguesa.

### 7.3 Avatar y destacados

En redes el logo va centrado en círculo sobre `blanco`, con el aire mínimo respetado. Las portadas de destacados son círculos de un solo color de la paleta (`oro-logo`, `naranja-destacado`, `melocoton`, `marron-brasa`) con el logo encima — exactamente lo que ya hace el perfil.

---

## 8. Iconografía

Línea de 2 px, extremos redondeados, en `gris-castillo` o `texto-ambar`, dibujados sobre caja de 24 px.

Los que ya existen y hay que mantener: hoja verde para vegetariano, guindilla para picante, teléfono, reloj para horarios y ubicación para los locales.

Nada de iconos rellenos ni de emojis dentro de la carta. En Instagram sí, que es su sitio.

---

## 9. Fotografía

### 9.1 Cómo se fotografía

- **Fondo neutro.** Plato blanco sobre mármol o tabla de pizarra, o fondo blanco liso. Nada de manteles estampados ni mesas con servilleteros detrás.
- **Luz natural lateral**, sin flash directo. Las salsas y el queso fundido necesitan brillo; el flash los aplana.
- **Encuadre a 45º** para hamburguesas y costillas (se ve el corte y la altura) y **cenital** para tablas, nachos y platos de compartir.
- **Un plato protagonista.** Si salen dos, el segundo va desenfocado al fondo.
- La ración es la real, la que sale de cocina.

### 9.2 Cómo se monta

- Recorte en `radio-l`; en mosaicos de Instagram, cuadrado sin redondear.
- Sobre foto, el texto va dentro de una placa `blanco`, `crema` o `parrilla`, nunca directamente encima: ninguna foto garantiza contraste.
- Cuando hace falta texto sobre la imagen, se oscurece con un velo de `parrilla` al 55 % y el texto va en `texto-sobre-parrilla`.
- Nada de filtros fuertes ni virados azules o verdosos que peleen con el oro de la marca.

### 9.3 Mosaico de Instagram

Alternar: foto de producto → pieza de marca en oro (carta, promo, horario) → foto de producto. Así el perfil se lee como una parrilla y no como un folleto.

---

## 10. Componentes

### 10.1 Boton

Tres variantes. Una sola principal por pantalla.

- **Principal** — fondo `naranja-grill`, tinta `texto-sobre-oro`, `radio-pill`. La acción que da dinero: pedir, llamar, reservar.
- **Secundario** — transparente, borde `borde-fuerte` de 2 px, texto `texto`. Lo que acompaña.
- **Oscuro** — fondo `parrilla`, tinta `texto-sobre-parrilla`. Cuando cae sobre zona oro o sobre foto.

Medidas: alto mínimo 44 px de zona táctil; relleno `espacio-3` × `espacio-5`; radio `radio-pill` siempre; icono opcional de 16 px a la izquierda separado por `espacio-2`.

Reglas:

- Nunca texto blanco sobre naranja u oro.
- Hover: el fondo se oscurece un 8 %. Foco: anillo de 2 px en `texto-ambar` separado 2 px del borde.
- Desactivado: 40 % de opacidad, sin cambiar de color.
- El texto dice qué pasa al pulsar: "Pedir ahora", "Llamar a Las Castillas". Nunca "Más información".

### 10.2 EtiquetaPlato

| Variante | Color | Cuándo |
| --- | --- | --- |
| Vegetariano | borde y texto `verde-huerta`, con hoja | Platos sin carne ni pescado |
| Picante | borde y texto `rojo-picante`, con guindilla | Jalapeños, salsa búfalo, chili |
| Novedad | fondo `oro-carta`, tinta `texto-sobre-oro` | Plato nuevo, máximo un mes |
| Promoción | fondo `naranja-destacado`, tinta `texto-sobre-oro` | 2x1 y ofertas con fecha |

- **Nunca solo color:** cada etiqueta lleva su icono o su palabra.
- Máximo dos por plato. Si hacen falta tres, el problema está en la descripción.
- Van después del nombre del plato, separadas por `espacio-2`.
- Las de promoción llevan la fecha de fin en la descripción; una promo sin fecha se queda en la carta para siempre.

### 10.3 CabeceraSeccion

Abre cada bloque de la carta: ENTRANTES, SÁNDWICHES, ENSALADAS Y PASTA, TORTAS.

- Título con el estilo `seccion`, en mayúsculas, en `texto`.
- Debajo, el filete: un punto de `naranja-grill` y una línea de 3 px en `oro-carta` con `radio-pill`, separado por `espacio-2`.
- Entradilla opcional de una línea en `descripcion` y color `texto-suave`.
- Dos anchos: **larga** (la línea ocupa la columna entera, la de la carta impresa) y **corta** (72 px, para secciones seguidas en una misma columna).
- Separación por encima `espacio-7`, por debajo `espacio-4`. Nunca dos cabeceras seguidas sin platos entre medias.
- En web es un `<h2>` real, para que el lector de pantalla pueda saltar de sección en sección.

### 10.4 PlatoCarta

La unidad de la carta: nombre, etiquetas, precio y qué lleva.

- Nombre con el estilo `plato`, en `texto`.
- Etiquetas justo detrás del nombre, si las hay.
- Guía de puntos en `borde-fuerte` uniendo nombre y precio.
- Precio con el estilo `precio` en `texto-ambar`, con cifras tabulares; en la web lleva euro.
- Descripción con el estilo `descripcion` en `texto-suave`, máximo 46 caracteres de ancho y dos líneas.
- Línea `borde` de 1 px entre platos, `espacio-4` de separación.

**Variante destacada** para el plato de la casa: fondo `blanco`, `radio-l`, `sombra-carta` y cinta superior en `naranja-destacado`. Uno por sección como mucho.

Reglas:

- La descripción enumera ingredientes, no los adjetiva: "Cubiertos de chili casero, queso, pico de gallo" y no "una explosión de sabor mexicano".
- Los suplementos van en la descripción, no en el precio.
- Si un plato tiene opciones (las quesadillas tienen tres), van como lista debajo con sangría `espacio-4`.
- En web, nombre y precio son texto de verdad, no una imagen de la carta: hace falta para buscar, para traducir y para el lector de pantalla.

### 10.5 TarjetaLocal

Ficha de uno de los dos locales: dónde está, cuándo abre y a qué número se llama.

- Cabecera: marca cuadrada de `oro-logo` con `radio-m` y el icono del castillo, más el nombre del local.
- Datos con icono de 16 px en `naranja-grill`: ubicación, horario, teléfono.
- El teléfono es un enlace `tel:` en `texto-ambar` y negrita, con cifras tabulares. Desde el móvil se llama tocándolo: es la acción más usada de todas.
- Tarjeta en `blanco`, `radio-l`, `sombra-carta`, relleno `espacio-5`.

Reglas:

- **Los dos locales no se mezclan.** Cada uno su tarjeta, siempre con el nombre visible.
- Los números van agrupados como se dictan — `640 529 409`, `640 25 44 65` — y en el `href` seguidos con prefijo `+34`.
- El horario como figura en la carta: `L, X, J, V, S y D · 20:00 – 23:30`. Cuando haya cierre semanal, se dice, no se omite.
- Ancho mínimo 280 px.
- Si el local tiene reparto, el botón dice "Pedir a domicilio"; si no, "Ver la carta". Nunca "Más info".

### 10.6 BandaPromo

Pieza de promoción: el 2x1, una novedad de carta, un horario especial. Vale para post de Instagram, cartel en la puerta y cabecera de web.

- Fondo `naranja-destacado` (promoción) o `parrilla` (novedad y mensajes con foto detrás), con `radio-xl`.
- Uno o dos discos de `oro-logo` y `melocoton` saliendo por los bordes — el mismo recurso circular de las portadas de destacados.
- Antetítulo con el estilo `etiqueta`: PROMOCIÓN, NUEVO, HORARIO.
- Titular en `rotulo-l`, dos líneas como máximo, mayúsculas.
- Detalle en `cuerpo`, con la condición y la fecha.
- Pie opcional con teléfono y modalidad, en `etiqueta`.

Reglas:

- Tinta `texto-sobre-oro` sobre naranja, `texto-sobre-parrilla` sobre el oscuro. Nunca blanco sobre naranja.
- Los discos quedan detrás y por fuera de la caja de texto.
- **La condición siempre se escribe:** "Todos los miércoles de octubre", "hasta fin de existencias", "solo en Las Castillas". Una promo sin condición acaba en discusión en barra.
- Un solo mensaje por pieza. Dos promociones son dos piezas.
- Formatos: 1080 × 1080 para Instagram, 1080 × 1920 para historias, A4 vertical para la puerta. El titular ocupa alrededor de un tercio del alto.

---

## 11. Accesibilidad — mínimos que se cumplen

- Texto normal: 4,5:1 sobre su fondo. Texto de 24 px o más y bordes de control: 3:1.
- Todas las parejas de esta paleta están comprobadas en los dos temas. Las que no llegan están marcadas arriba (`marron-brasa`, `melocoton` y los naranjas como fondo de texto pequeño).
- Verde y rojo se distinguen también por luminosidad, no solo por tono, para quien no distingue uno de otro. Aun así, cada marca lleva icono o palabra.
- Zona táctil mínima de 44 × 44 px en cualquier cosa que se toque.
- Foco siempre visible: anillo de 2 px en `texto-ambar`.

---

## 12. Variables CSS

Para pegar tal cual en la web o en el gestor de pedidos.

```css
:root {
  /* Superficies */
  --crema: #fffcf1;
  --blanco: #ffffff;
  --crema-hundido: #f7eedd;
  --parrilla: #302a25;
  --borde: #e8d6c6;
  --borde-fuerte: #cbae91;

  /* Marca */
  --naranja-grill: #e08a0e;
  --oro-logo: #e7af5a;
  --oro-carta: #f2b76b;
  --naranja-destacado: #ffac54;
  --melocoton: #f5c390;
  --marron-brasa: #a87a62;
  --gris-castillo: #4c4c4c;
  --gris-muro: #b4b4b4;

  /* Texto */
  --texto: #241f1b;
  --texto-suave: #5c5248;
  --texto-ambar: #7d4a0c;
  --texto-sobre-oro: #241f1b;
  --texto-sobre-parrilla: #fffcf1;

  /* Estado */
  --verde-huerta: #36692d;
  --rojo-picante: #b3261e;

  /* Espaciado */
  --espacio-1: 4px;
  --espacio-2: 8px;
  --espacio-3: 12px;
  --espacio-4: 16px;
  --espacio-5: 24px;
  --espacio-6: 32px;
  --espacio-7: 48px;
  --espacio-8: 64px;

  /* Radios */
  --radio-s: 6px;
  --radio-m: 12px;
  --radio-l: 20px;
  --radio-xl: 28px;
  --radio-pill: 999px;

  /* Sombras */
  --sombra-carta: 0 1px 2px rgba(36, 31, 27, 0.08), 0 8px 20px rgba(36, 31, 27, 0.07);
  --sombra-elevada: 0 12px 32px rgba(36, 31, 27, 0.14);

  /* Tipografía */
  --font-display: Montserrat, "Trebuchet MS", system-ui, sans-serif;
  --font-texto: Inter, system-ui, -apple-system, sans-serif;
}

[data-theme="dark"] {
  --crema: #1c1916;
  --blanco: #27221e;
  --crema-hundido: #15120f;
  --parrilla: #0f0d0b;
  --borde: #3e362e;
  --borde-fuerte: #5a4e43;
  --marron-brasa: #c89b82;
  --texto: #f6efe4;
  --texto-suave: #c3b8aa;
  --texto-ambar: #f0c07a;
  --verde-huerta: #8cc47c;
  --rojo-picante: #ff8a7a;
  --sombra-carta: 0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 20px rgba(0, 0, 0, 0.45);
  --sombra-elevada: 0 12px 32px rgba(0, 0, 0, 0.6);
}
```

Fuentes:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800&display=swap">
```

---

## 13. Qué falta

- Logotipo en vector y versión en negativo.
- Fuente real de la carta impresa, si se quiere igualar al 100 %.
- Iconos de alérgenos completos.
- Fotos a resolución de impresión.
- Horario de Las Castillas y confirmación de si la carta de Meco es distinta.