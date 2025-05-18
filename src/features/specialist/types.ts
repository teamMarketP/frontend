export interface BaseService {
  id: string;
  price: number;
}

export interface SpecialistService extends BaseService {
  type: 'догляд вдома' | 'перетримка';
  period: string;
}

export interface AnimalService extends BaseService {
  type: 'dog' | 'cat';
  title: string;
  duration: string;
  currency: string;
}

// Спільний тип
export type Service = SpecialistService | AnimalService;

export interface SpecialistAnimalCategory {
  name: string; // 'Собаки' | 'Коти'
  services: SpecialistService[];
}

export interface SpecialistProfile {
  id: string;
  fullName: string;
  avatarUrl: string;
  joinedDate: string;
  experienceYears: number;
  description: string;
  categories: SpecialistAnimalCategory[];
}

export type Education = {
  institution: string;
  degree: string;
  year: number;
};

export type Contact = {
  email: string;
  phone: string;
  website: string;
};

export type SpecialistMock = {
  id: string;
  name: string;
  joinDate?: string;
  icon: string;
  iconDog: string;
  iconCat: string;
  iconLeft: string;
  iconRight: string;
  iconBottom: string;
  avatar: string;
  profession: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  location: string;
  online: boolean;
  bio: string;
  services: Service[];
  specializations: string[];
  education: Education[];
  languages: string[];
  availableDays: string[];
  isVerified: boolean;
  contact: Contact;
  petsPhotos: string[];
};

export type ReviewMock = {
  name: string;
  date: string;
  rating: number;
  id: string | number;
  service: string;
  comment: string;
};
