import { emailRegex } from '@/shared/constants/regex';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email обов’язковий',
    })
    .max(255, 'Email не може перевищувати 255 символів')
    .regex(emailRegex, 'Невірний формат email'),
  password: z.string().min(12, 'Пароль має містити мінімум 12 символів'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
