import {
  emailRegex,
  lowerCaseRegex,
  numberRegex,
  phoneRegex,
  specialCharRegex,
  upperCaseRegex,
} from '@/constants/regex';
import { z } from 'zod';

export const registerSchema = z
  .object({
    fullName: z
      .string({
        required_error: "Введіть прізвище та ім'я",
      })
      .min(2, "Введіть прізвище та ім'я"),
    phone: z
      .string({
        required_error: 'Номер телефону обов’язковий',
      })
      .regex(phoneRegex, 'Невірний формат. Використовуйте +38 (XXX) XXX-XX-XX'),
    email: z
      .string({
        required_error: 'Email обов’язковий',
      })
      .regex(emailRegex, 'Невірний формат email'),
    password: z
      .string({
        required_error: 'Пароль обов’язковий',
      })
      .min(12, 'Пароль має містити мінімум 12 символів')
      .regex(upperCaseRegex, 'Пароль має містити хоча б одну велику літеру')
      .regex(lowerCaseRegex, 'Пароль має містити хоча б одну малу літеру')
      .regex(numberRegex, 'Пароль має містити хоча б одну цифру')
      .regex(
        specialCharRegex,
        'Пароль має містити хоча б один спеціальний символ'
      ),
    confirmPassword: z.string(),
  })
  .refine(data => data.password !== data.email, {
    message: 'Не можна використовувати email як пароль',
    path: ['password'],
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Паролі не збігаються',
    path: ['confirmPassword'],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
