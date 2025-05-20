import { animalField, nameField, serviceField } from '@/validations/filds';
import { z } from 'zod';

export const reviewSchema = z.object({
  rating: z
    .number({
      required_error: 'Оберіть оцінку',
    })
    .min(1)
    .max(5),
  name: nameField,
  lastName: nameField.optional(),
  animal: animalField,
  service: serviceField,
  review: z
    .string()
    .min(30, 'Має містити мінімум 30 символів')
    .max(300, 'Не може перевищувати 300 символів'),
});

export type ReviewSchemaType = z.infer<typeof reviewSchema>;
