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

## Especificación: Inicio
La captura muestra una página móvil con búsqueda, categorías, carruseles de contenido y navegación inferior. Las props siguientes son una **propuesta de contrato**, no una implementación. `?` indica una prop opcional.

**Estructura Principal**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `HomePage` | Sin props obligatorias. | Contenedor general, adaptado al viewport de 375 px. |
| `SearchHeader` | `searchLabel: string`, `onSearch: () => void` | Parte superior, con margen lateral y espacio antes de las categorías. Contiene el buscador. |
| `SearchButton` | `label: string`, `onClick: () => void` | Botón ancho y redondeado con icono de lupa y texto «Empieza la búsqueda». |
| `CategoryTabs` | `items: { id: string; label: string; iconSrc: string }[]`, `selectedId: string`, `onSelect: (id: string) => void` | Debajo del buscador. Fila horizontal que se recorta en el borde derecho. |
| `CategoryTab` | `label: string`, `iconSrc: string`, `selected: boolean`, `onClick: () => void` | Cada opción de categorías: «Todo», «Alojamientos» y «Experiencias», esta última parcialmente visible. |
| `HomeContent` | `children: React.ReactNode` | Zona principal debajo de las categorías, con secciones apiladas verticalmente. |

**Secciones y Tarjetas**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `ContentSection` | `title: string`, `actionLabel?: string`, `onAction?: () => void`, `children: React.ReactNode` | Bloque reutilizable para experiencias y alojamientos. También se alcanza a ver el comienzo de otra sección inferior. |
| `SectionHeader` | `title: string`, `actionLabel?: string`, `onAction?: () => void` | Encima de cada carrusel. Título a la izquierda; en las dos secciones completas hay una flecha a la derecha. |
| `SectionActionButton` | `ariaLabel: string`, `onClick: () => void` | Botón circular gris claro con flecha hacia la derecha, alineado con el título. |
| `HorizontalCarousel` | `ariaLabel: string`, `children: React.ReactNode` | Debajo de cada encabezado. Tarjetas en una sola fila, con parte del siguiente elemento visible a la derecha. |
| `ExperienceCategoryCard` | `id: string`, `title: string`, `imageSrc: string`, `imageAlt: string`, `href: string` | Primer carrusel: «Experiencias culturales», «Al aire libre» y «Recorridos gastronómicos». Imagen casi cuadrada, con esquinas redondeadas, y título debajo. Hay otra tarjeta parcialmente visible. |
| `StayCard` | `id: string`, `title: string`, `imageSrc: string`, `imageAlt: string`, `href: string`, `price: number`, `currency: string`, `locale: string`, `nights: number`, `rating: number`, `badgeLabel?: string`, `isFavorite: boolean`, `onFavoriteChange: (value: boolean) => void` | Segundo carrusel, bajo «Alojamientos populares en La Vega». Se ven dos tarjetas completas y parte de otra. |
| `GuestFavoriteBadge` | `label: string` | Superpuesto en la esquina superior izquierda de la foto del alojamiento. Texto «Favorito entre huéspedes». |
| `FavoriteButton` | `isFavorite: boolean`, `ariaLabel: string`, `onToggle: () => void` | Corazón superpuesto en la esquina superior derecha de cada foto de alojamiento. |
| `StayPrice` | `amount: number`, `currency: string`, `locale: string`, `nights: number` | Debajo del nombre del alojamiento. Presenta el importe en COP y la duración «2 noches». |
| `RatingDisplay` | `value: number`, `ariaLabel?: string` | Debajo de los datos de precio y duración. Estrella pequeña seguida de la puntuación, como 4.96 o 4.82. |

**Elementos Inferiores**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `PriceDisclosureBanner` | `message: string`, `iconSrc?: string` | Aviso blanco con sombra e icono rosa de etiqueta: «Los precios incluyen todas las tarifas». Aparece superpuesto al contenido, justo encima de la navegación inferior. |
| `BottomNavigation` | `activeId: string`, `items: { id: string; label: string; icon: React.ReactNode; href: string }[]` | Franja inferior blanca con tres destinos distribuidos horizontalmente. |
| `BottomNavigationItem` | `label: string`, `icon: React.ReactNode`, `href: string`, `active: boolean` | Cada destino de la barra: «Explora», activo en rosa; «Favoritos» e «Iniciar sesión», en gris. Icono arriba y etiqueta debajo. |

**Precisiones del Layout**
- El título de alojamientos ocupa dos líneas; los títulos de algunas tarjetas también.
- El aviso de tarifas oculta parte de la siguiente sección: no se puede identificar su título completo ni su contenido con certeza.
- Una captura estática no permite confirmar si el encabezado, el aviso o la navegación usan posición fija o *sticky*.
- El marco gris exterior, las barras de desplazamiento y el control de redimensionado parecen pertenecer al visor, no a la interfaz de Airbnb.

## Especificación: Catálogo
La captura muestra un **catálogo con mapa y un panel inferior de alojamientos**. Las props son contratos propuestos; `?` indica que son opcionales.

**Cabecera y Filtros**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `CatalogPage` | Sin props obligatorias. | Contenedor general del catálogo móvil de 375 px. |
| `CatalogHeader` | `children: React.ReactNode` | Franja superior blanca. Agrupa volver, resumen de búsqueda y acceso a filtros. |
| `BackButton` | `ariaLabel: string`, `onClick: () => void` | Extremo izquierdo de la cabecera, con flecha hacia atrás. |
| `SearchSummaryButton` | `title: string`, `dateLabel: string`, `guestLabel: string`, `onClick: () => void` | Centro de la cabecera. Botón redondeado con «Alojamientos en Bogotá» y debajo «17 – 24 de oct · 1 huésped». |
| `FiltersButton` | `ariaLabel: string`, `activeCount?: number`, `onClick: () => void` | A la derecha del resumen, representado por un icono de ajustes. No se ve contador. |
| `QuickFilters` | `items: { id: string; label: string; selected: boolean }[]`, `onToggle: (id: string) => void` | Fila horizontal debajo de la cabecera y encima del mapa, recortada en el borde derecho. |
| `FilterChip` | `label: string`, `selected: boolean`, `onClick: () => void` | Cada filtro redondeado: «Wifi», «Se permiten mascotas», «Lavadora» y otro cuyo texto empieza por «Estaci…». |

**Mapa**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `ListingsMap` | `center: { lat: number; lng: number }`, `zoom: number`, `children?: React.ReactNode`, `onViewportChange?: (center: { lat: number; lng: number }, zoom: number) => void` | Debajo de los filtros, a todo el ancho del contenido. Su parte inferior queda cubierta por el panel de resultados. |
| `MapPriceMarker` | `listingId: string`, `position: { lat: number; lng: number }`, `amount: number`, `currency: string`, `locale: string`, `selected: boolean`, `onSelect: (listingId: string) => void` | Distribuido sobre el mapa. Etiquetas blancas redondeadas con sombra e importes en COP; algunas se solapan. |
| `MapLocationLabel` | `label: string`, `position: { lat: number; lng: number }` | Dentro del mapa. Se distingue una etiqueta «Bogotá» con un pequeño icono de ubicación. Puede formar parte del propio proveedor cartográfico. |

Los nombres de barrios, las vías y las zonas verdes pertenecen al **mapa base**, no necesitan componentes React independientes.

**Panel de Resultados**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `ListingsBottomSheet` | `children: React.ReactNode`, `ariaLabel: string`, `snapPoints?: number[]`, `onSnapChange?: (index: number) => void` | Panel blanco superpuesto a la parte inferior del mapa, con esquinas superiores redondeadas. Se extiende hasta la navegación inferior. |
| `SheetDragHandle` | `ariaLabel: string`, `onExpand?: () => void` | Pequeña barra gris centrada en el borde superior del panel. Su apariencia sugiere arrastre, aunque la captura no confirma el comportamiento. |
| `PriceDisclosureBanner` | `message: string`, `iconSrc: string`, `iconAlt: string` | Dentro del panel, debajo del tirador. Icono rosa de etiqueta y texto «Los precios incluyen todas las tarifas». Aquí no aparece como aviso flotante independiente. |
| `ListingPreviewCard` | `listingId: string`, `href: string`, `children: React.ReactNode` | Debajo del aviso de tarifas, con márgenes laterales. Solo se ve la zona fotográfica del alojamiento. |
| `ListingImageCarousel` | `images: { src: string; alt: string }[]`, `activeIndex: number`, `onIndexChange: (index: number) => void` | Ocupa la zona visible de la tarjeta. Muestra una habitación con cama; la imagen tiene esquinas redondeadas. |
| `SuperhostBadge` | `label: string` | Sobre la esquina superior izquierda de la fotografía. Insignia gris con texto «Superanfitrión». |
| `FavoriteButton` | `isFavorite: boolean`, `ariaLabel: string`, `onToggle: () => void` | Sobre la esquina superior derecha de la fotografía, representado por un corazón. |
| `CarouselPagination` | `count: number`, `activeIndex: number`, `onSelect?: (index: number) => void` | Puntos superpuestos y centrados cerca del borde inferior de la fotografía. El activo se distingue de los demás. |

**Navegación Inferior**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `BottomNavigation` | `items: { id: string; label: string; icon: React.ReactNode; href: string }[]`, `activeId: string` | Franja blanca en la parte inferior de la interfaz, debajo de la imagen del alojamiento. |
| `BottomNavigationItem` | `label: string`, `icon: React.ReactNode`, `href: string`, `active: boolean` | Tres destinos equidistantes: «Explora», activo en rosa; «Favoritos» e «Iniciar sesión», en gris. Icono encima del texto. |

**Límites de la Captura**
No se ven el título, el precio ni la valoración de la tarjeta inferior, por lo que no se incluyen como elementos observados. Tampoco puede confirmarse qué zonas son fijas o desplazables. El marco exterior, las barras grises y el control de redimensionado parecen pertenecer al visor, no al catálogo.
## Especificación: Detalle
La captura muestra una **página de detalle de alojamiento**, con galería superior, información del alojamiento y una zona inferior de reserva. Las props son una propuesta de contrato; `?` indica que son opcionales.

**Galería y Resumen**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `ListingDetailPage` | `children: React.ReactNode` | Contenedor general de la página móvil de 375 px. |
| `ListingPhotoGallery` | `images: { src: string; alt: string }[]`, `activeIndex: number`, `onIndexChange: (index: number) => void`, `onOpen?: () => void` | Parte superior, a todo el ancho del contenido. Muestra una fotografía del estudio. |
| `PhotoCounter` | `current: number`, `total: number` | Superpuesto en la esquina inferior derecha de la fotografía, sobre fondo oscuro. Muestra «1/17». |
| `ListingDetailsContent` | `children: React.ReactNode` | Superficie blanca debajo de la galería, con esquinas superiores redondeadas que se superponen ligeramente a la imagen. |
| `ListingTitle` | `title: string` | Encabezado centrado, en dos líneas: «Increíble estudio NOK en Candelaria». |
| `TranslationIndicator` | `ariaLabel: string` | Pequeño icono de traducción a la izquierda del título. No puede confirmarse si es interactivo. |
| `ListingLocationSummary` | `accommodationType: string`, `location: string` | Debajo del título, centrado y en gris. Describe el alojamiento entero y su ubicación en Bogotá, Colombia. |
| `ListingCapacitySummary` | `guests: number`, `bedrooms: number`, `beds: number`, `bathrooms: number` | Debajo de la ubicación. Línea centrada con «2 huéspedes · 1 habitación · 1 cama · 1.5 baños». |
| `ListingReviewSummary` | `rating: number`, `reviewCount: number`, `onReviewsClick?: () => void` | Debajo de la capacidad. Estrella, puntuación «4,69» y «39 reseñas» en una fila centrada. |
| `DiscountBadge` | `label: string` | Debajo de las reseñas. Insignia pequeña verde claro con texto «Descuento semanal». |

**Anfitrión y Características**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `SectionDivider` | Sin props obligatorias. | Línea horizontal fina antes del bloque del anfitrión y otra después de él, con márgenes laterales. |
| `HostSummary` | `name: string`, `avatarSrc: string`, `avatarAlt: string`, `hostingYears: number` | Debajo del primer separador. Avatar a la izquierda; «Anfitrión: Miguel» y «6 años anfitrionando» a la derecha. |
| `HostAvatar` | `src: string`, `alt: string`, `size?: number` | Imagen circular pequeña dentro de `HostSummary`. |
| `ListingHighlight` | `icon: React.ReactNode`, `title: string`, `description: string` | Debajo del segundo separador. Icono de puerta a la izquierda; título «Llegada autónoma» y descripción a la derecha. La descripción queda parcialmente oculta por la zona inferior. |

**Zona de Reserva**
| Componente | Props con tipos TypeScript | Posición en el layout |
|---|---|---|
| `BookingBar` | `children: React.ReactNode` | Zona inferior a todo el ancho, visualmente superpuesta al contenido. Agrupa el aviso de urgencia, el resumen económico y el botón. |
| `BookingUrgencyBanner` | `message: string`, `icon: React.ReactNode` | Franja gris clara en la parte superior de `BookingBar`. Icono pequeño y mensaje «¡Date prisa! Solo quedan 3 horas para reservar». |
| `BookingPriceSummary` | `originalAmount?: number`, `totalAmount: number`, `currency: string`, `locale: string` | Debajo del aviso, alineado a la izquierda. Precio original tachado y precio reducido destacado: «$803,531 COP». |
| `BookingDateSummary` | `nights: number`, `dateLabel: string` | Debajo del precio, en texto gris pequeño: «Por 7 noches · 17–24 de oct». |
| `ReserveButton` | `label: string`, `onClick: () => void`, `disabled?: boolean`, `loading?: boolean` | Debajo del resumen económico. Botón ancho, rosa intenso y redondeado con texto blanco «Reserva». |

**Precisiones**
- No aparecen botones de volver, compartir o favoritos, ni la navegación inferior de las capturas anteriores.
- La captura sugiere una barra de reserva fija, pero una imagen estática no permite confirmar ese comportamiento.
- El marco exterior, la barra lateral y los controles grises inferiores parecen pertenecer al visor, no a la página.