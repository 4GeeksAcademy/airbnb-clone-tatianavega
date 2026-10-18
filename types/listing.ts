export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  category: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}