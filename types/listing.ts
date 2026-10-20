export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  category: string;
  hostName: string;
  hostYears: number;
  amenities: string[];
  maxGuests: number;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}