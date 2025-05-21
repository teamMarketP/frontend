export interface Animal {
  name: string;
  services: string[];
}

export const animals: Animal[] = [
  {
    name: 'собаки',
    services: ['Грумінг', 'Перетримка', 'Вигул', 'Догляд вдома'],
  },
  {
    name: 'коти',
    services: ['Догляд вдома', 'Перетримка', 'Грумінг', 'Вакцинація'],
  },
];
