export type Language = 'en' | 'es';

export interface MenuItem {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  priceDop: number;
  priceUsd: number;
  category: 'signature-cocktails' | 'classic-mixology' | 'tapas-gastronomy' | 'wines-champagne' | 'bottle-service';
  tags: string[];
  tagsEs: string[];
  isSignature?: boolean;
  isChefPick?: boolean;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleEs: string;
  category: 'mixology' | 'ambiance' | 'gastronomy' | 'events' | 'skyline';
  imageUrl: string;
  span?: string; // For bento grid layout
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  roleEs: string;
  rating: number;
  date: string;
  text: string;
  textEs: string;
  avatar: string;
  highlight: string;
  highlightEs: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  titleEs: string;
  time: string;
  description: string;
  descriptionEs: string;
  imageUrl: string;
  badge: string;
  badgeEs: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'rooftop-terrace' | 'cocktail-lounge' | 'vip-cabana' | 'sunset-front-row';
  occasion: 'casual' | 'birthday' | 'anniversary' | 'business' | 'vip-celebration';
  specialRequests?: string;
}
