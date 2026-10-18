# Mi clon de Airbnb

Soy Tatiana y estoy aprendiendo a ser ingeniera de IA. En este proyecto
voy a construir mi propia versión de la página de Airbnb, en esta web la gente busca casas para disfrutar sus vacaciones.

## ¿Quién usa esta plataforma y qué quiere lograr?
Una turista que está planeando un viaje. Quiere encontrar una casa que este dentro de su presupuesto y cerca a los lugares que quiere visitar,
busca por nombre, elije un tipo de lugar (playa, mansiones...),
compara precios y, cuando encuentra una que le gusta, ve todos los
detalles y reserva.

## Las 3 páginas

### 1. Inicio (/)
Es la primera página que ve la persona. Tiene una barra de arriba con
el logo, el buscador y los íconos del usuario. Debajo hay una fila de
categorías y, después, una cuadrícula de tarjetas con las casas.

### 2. Catálogo (/catalog)
Muestra los resultados. Arriba dice cuántas casas hay y tiene un
selector para ordenarlas por precio (de menor a mayor o al revés).
Usa las mismas tarjetas de la página de inicio y tiene un espacio
gris para el mapa.

### 3. Detalle de una casa (/rooms/[id])
Es la página de una casa en particular. Tiene una galería de fotos con
botones Anterior y Siguiente, el título con estrellas y ubicación, la
información del anfitrión, los servicios (como wifi o piscina) y una
tarjeta para reservar con el precio y el número de huéspedes.

## Componentes principales
- Navbar: logo, buscador e íconos de usuario.
- CategoryFilter: fila de categorías con ícono y nombre.
- ListingCard: tarjeta de una casa. Se usa en Inicio y en Catálogo.
- ListingGrid: cuadrícula que ordena las tarjetas.
- ResultsHeader: número de resultados y selector de orden.
- MapPlaceholder: recuadro gris que dice "Mapa".
- PhotoGallery: fotos con botones Anterior y Siguiente.
- ListingHeader: título, estrellas, reseñas y ubicación.
- HostInfo: avatar, nombre y años del anfitrión.
- Amenities: cuadrícula de servicios con ícono y nombre.
- BookingCard: precio por noche, contador de huéspedes y botón.

## Reglas que voy a seguir
- Primero diseño para celular (375px) y luego para computador.
- Un componente por archivo, pequeño y con una sola tarea.
- Solo Tailwind CSS y mis propios componentes, sin librerías ya hechas.
- Navegación con <Link> de Next.js, sin recargar la página.
