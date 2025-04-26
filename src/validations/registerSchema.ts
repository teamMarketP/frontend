import {
  emailRegex,
  lowerCaseRegex,
  nameRegex,
  numberRegex,
  specialCharRegex,
  upperCaseRegex,
} from '@/constants/regex';
import { z } from 'zod';

export const registerSchema = z
  .object({
    fullName: z
      .string({
        required_error: 'Введіть прізвище та ім’я',
      })
      .min(2, 'Ім’я має містити мінімум 12 символів')
      .max(100, 'Ім’я не може перевищувати 100 символів')
      .regex(
        nameRegex,
        'Ім’я може містити тільки літери, апострофи та дефіси.'
      ),
    phone: z
      .string({
        required_error: 'Номер телефону обов’язковий',
      })
      .min(10, 'Введіть коректний номер телефону'),
    email: z
      .string({
        required_error: 'Email обов’язковий',
      })
      .max(255, 'Email не може перевищувати 255 символів')
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

    confirmPassword: z.string({
      required_error: 'Підтвердіть пароль',
    }),
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
