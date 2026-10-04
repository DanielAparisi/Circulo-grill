// Añade el euro a cada importe del precio: "5 / 5,5" → "5 € / 5,5 €".
// Espacio fino no separable para que el € nunca se quede solo en otra línea.
export const conEuro = (precio: string) =>
  precio
    .split('/')
    .map((importe) => `${importe.trim()} €`)
    .join(' / ');
