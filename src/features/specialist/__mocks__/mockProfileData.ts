// features/specialist/__mocks__/mockProfileData.ts
import { SpecialistMock } from '../types';

const mockProfileData: SpecialistMock = {
  id: 'spc12345',
  name: 'Ігор Литвин',
  avatar: '/images/specy/ihor-lytvyn-2.jpg',
  updata: '2022-03-09', 
  icon: 'icon-verified',
  iconDog: 'icon-spec-dog',
  iconCat: 'icon-cat',
  profession: 'Перетримка / Догляд вдома',
  rating: 4.8,
  reviewsCount: 56,
  experience: '3 роки',
  location: 'Київ, Україна',
  online: true,
  bio: 'Про себе: Я Ігор, живу в приватному будинку з великим огородженим двором. Приймаю собак будь-якого розміру на перетримку. Є зона для вигулу, місце для ігор і, головне — любов до тварин. Проживаю в районі Академмістечка, проте також маю можливість виїзду до вас додому, де буду здійснювати догляд за вашим улюбленцем.',
  services: [
    {
      id: 'srv1',
      title: 'Догляд дома',
      duration: '1 год',
      price: 250,
      currency: '₴',
    },
    {
      id: 'srv2',
      title: 'Перетримка',
      duration: '1 доба',
      price: 450,
      currency: '₴',
    },
  ],
  specializations: ['Собаки', 'Коти', 'Перетримка', 'Догляд вдома'],
  education: [
    {
      institution: 'КНУ ім. Т. Шевченка',
      degree: 'Магістр психології',
      year: 2015,
    },
  ],
  languages: ['Українська', 'Російська', 'Англійська'],
  availableDays: ['Понеділок', 'Середа', 'П’ятниця'],
  isVerified: true,
  contact: {
    email: 'ihor@example.com',
    phone: '+380961234567',
    website: 'https://pet-help.com.ua',
  },
};

export default mockProfileData;