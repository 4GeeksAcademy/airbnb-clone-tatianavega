import { Listing } from "@/types/listing";

export const listings: Listing[] = [
  { id: "1", title: "Villa en La Vega", location: "La Vega, Colombia", pricePerNight: 1359000, rating: 4.96, reviews: 82, category: "casas", hostName: "Carolina", hostYears: 5, amenities: ["Wifi", "Piscina", "Parqueadero", "Cocina"], maxGuests: 8 },
  { id: "2", title: "Alojamiento en Villeta", location: "Villeta, Colombia", pricePerNight: 516000, rating: 4.82, reviews: 41, category: "casas", hostName: "Andrés", hostYears: 3, amenities: ["Wifi", "Cocina", "Aire acondicionado"], maxGuests: 6 },
  { id: "3", title: "Casa frente al mar", location: "Santa Marta, Colombia", pricePerNight: 890000, rating: 4.9, reviews: 67, category: "playa", hostName: "Laura", hostYears: 4, amenities: ["Wifi", "Playa privada", "Cocina", "TV"], maxGuests: 6 },
  { id: "4", title: "Mansión con piscina", location: "Anapoima, Colombia", pricePerNight: 2100000, rating: 4.88, reviews: 53, category: "mansiones", hostName: "Miguel", hostYears: 6, amenities: ["Wifi", "Piscina", "Jacuzzi", "Parqueadero"], maxGuests: 12 },
  { id: "5", title: "Estudio en Candelaria", location: "Bogotá, Colombia", pricePerNight: 115000, rating: 4.69, reviews: 39, category: "tendencias", hostName: "Miguel", hostYears: 6, amenities: ["Wifi", "Cocina", "TV"], maxGuests: 2 },
  { id: "6", title: "Cabaña en la montaña", location: "Guatavita, Colombia", pricePerNight: 340000, rating: 4.75, reviews: 28, category: "casas", hostName: "Sofía", hostYears: 2, amenities: ["Wifi", "Chimenea", "Parqueadero"], maxGuests: 4 },
];