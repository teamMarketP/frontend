import { emailRegex, streetOrHouseRegex } from '@/constants/regex';
import { timeSlots } from '@/shared/constants/bookingTime';
import { dogWeightRanges } from '@/shared/constants/dogsWeight';
import { z } from 'zod';

export const bookingSchema = z
  .object({
    animal: z.enum(['собаки', 'коти']),
    service: z.string({
      required_error: 'Оберіть послугу',
    }),
    weight: z
      .enum(dogWeightRanges, {
        invalid_type_error: 'Оберіть вагу собаки',
      })
      .optional(),
    locationOption: z.enum(['customer', 'specialist']),
    district: z.string({
      required_error: 'Оберіть район',
    }),
    street: z
      .string()
      .min(5, 'Поле обов’язкове')
      .max(50, 'Поле не може перевищувати 50 символів')
      .regex(
        streetOrHouseRegex,
        'Поле не може містити емодзі, ієрогліфів, нестандартних символів'
      ),
    house: z
      .string()
      .min(2, 'Поле обов’язкове')
      .max(50, 'Поле не може перевищувати 50 символів')
      .regex(
        streetOrHouseRegex,
        'Поле не може містити емодзі, ієрогліфів, нестандартних символів'
      ),
    details: z
      .string()
      .min(10, 'Поле має містити мінімум 10 символів')
      .max(500, 'Поле не може перевищувати 500 символів'),
    date: z.string({
      required_error: 'Оберіть дату виконання замовлення',
    }),
    time: z
      .array(
        z.enum(timeSlots, {
          invalid_type_error: 'Оберіть час виконання замовлення',
        })
      )
      .min(1, 'Оберіть хоча б один проміжок часу'),
    email: z
      .string({
        required_error: 'Введіть email',
      })
      .max(255, 'Email не може перевищувати 255 символів')
      .regex(emailRegex, 'Невірний формат email'),
  })
  .superRefine((data, ctx) => {
    if (data.animal === 'собаки' && !data.weight) {
      if (!data.weight) {
        ctx.addIssue({
          code: 'custom',
          path: ['weight'],
          message: 'Оберіть вагу собаки',
        });
      }
    }
  })
  .superRefine((data, ctx) => {
    if (data.locationOption === 'customer') {
      if (!data.district) {
        ctx.addIssue({
          code: 'custom',
          path: ['district'],
          message: 'Оберіть район',
        });
      }

      if (!data.street || !streetOrHouseRegex.test(data.street)) {
        ctx.addIssue({
          code: 'custom',
          path: ['street'],
          message:
            'Поле не може містити емодзі, ієрогліфів, нестандартних символів',
        });
      }

      if (!data.house || !streetOrHouseRegex.test(data.house)) {
        ctx.addIssue({
          code: 'custom',
          path: ['house'],
          message:
            'Поле не може містити емодзі, ієрогліфів, нестандартних символів',
        });
      }
    }
  });

export type BookingSchemaType = z.infer<typeof bookingSchema>;
