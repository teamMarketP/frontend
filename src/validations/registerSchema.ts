import { z } from 'zod';

// Regular expressions for each password requirement
const upperCaseRegex = /[A-Z]/;
const lowerCaseRegex = /[a-z]/;
const numberRegex = /\d/;
const specialCharRegex = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>/?]/;

// Phone number mask: +38 (XXX) XXX-XX-XX
const phoneRegex = /^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

// RFC 5322 email regex (simplified without comments)
const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+([a-zA-Z0-9]{2,})$/;

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
      .regex(
        phoneRegex,
        'Невірний формат телефону. Використовуйте +38 (XXX) XXX-XX-XX'
      ),
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
