import Button from '@/components/Ui/Button/Button';
import {
  registerSchema,
  RegisterSchemaType,
} from '@/validations/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { useState } from 'react';

const RegisterForm = () => {
  const [hasInput, setHasInput] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log('Form data:', data);
  };

  const getInputClass = (error: boolean, success: boolean) => {
    if (error) return 'input-base border-red-tenn focus:border-red-tenn';
    if (success) return 'input-base border-tenn focus:border-tenn';
    return 'input-base border-fire focus:border-tenn';
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="text-fire uppercase text-center">РЕЄСТРАЦІЯ</h3>

      <Button
        label="Увійти з Google"
        type="submit"
        disabled
        className="btn-icon"
        icon={
          <svg className="w-[28px] h-[28px]">
            <use href="/icons.svg#icon-google" />
          </svg>
        }
      />
      <p className="text-[11px] text-mineShaft text-center">
        або заповніть форму
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px]"
      >
        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            placeholder="Прізвище та ім'я"
            className={getInputClass(
              !!errors.fullName,
              !!(!errors.fullName && dirtyFields.fullName)
            )}
            {...register('fullName')}
          />
          {errors.fullName && (
            <svg className="absolute right-[16px] top-1/2 transform -translate-y-1/2 w-[27px] h-[27px] fill-red-tenn">
              <use href="/icons.svg#icon-input-warning" />
            </svg>
          )}
          {errors.fullName && (
            <p className="absolute text-red-tenn text-[10px] pl-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <div className="relative">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  {...field}
                  mask="+38 (000) 000-00-00"
                  unmask={true}
                  lazy={false}
                  placeholder="+38 (___) ___-__-__"
                  className={
                    getInputClass(
                      !!errors.phone,
                      !!(!errors.phone && dirtyFields.phone)
                    ) + (hasInput ? ' text-mineShaft' : ' text-gray-400')
                  }
                  onAccept={value => {
                    console.log('Очищене значення телефону: ', value);
                    setHasInput(!!value);
                    field.onChange(value); // Передаємо очищене значення
                  }}
                />
              )}
            />
            {errors.phone && (
              <svg className="absolute right-[16px] top-1/2 transform -translate-y-1/2 w-[27px] h-[27px] fill-red-tenn">
                <use href="/icons.svg#icon-input-warning" />
              </svg>
            )}
            {errors.phone && (
              <p className="absolute text-red-tenn text-[10px] pl-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className={getInputClass(
                !!errors.email,
                !!(!errors.email && dirtyFields.email)
              )}
              {...register('email')}
            />
            {errors.email && (
              <svg className="absolute right-[16px] top-1/2 transform -translate-y-1/2 w-[27px] h-[27px] fill-red-tenn">
                <use href="/icons.svg#icon-input-warning" />
              </svg>
            )}
            {errors.email && (
              <p className="absolute text-red-tenn text-[10px] pl-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            <input
              type="password"
              placeholder="Пароль"
              className={getInputClass(
                !!errors.password,
                !!(!errors.password && dirtyFields.password)
              )}
              {...register('password')}
            />
            {errors.password && (
              <svg className="absolute right-[16px] top-1/2 transform -translate-y-1/2 w-[27px] h-[27px] fill-red-tenn">
                <use href="/icons.svg#icon-input-warning" />
              </svg>
            )}
          </div>
          {errors.password && (
            <p className="absolute text-red-tenn text-[10px] pl-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <div className="relative">
            <input
              type="password"
              placeholder="Повторити пароль"
              className={getInputClass(
                !!errors.confirmPassword,
                !!(!errors.confirmPassword && dirtyFields.confirmPassword)
              )}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <svg className="absolute right-[16px] top-1/2 transform -translate-y-1/2 w-[27px] h-[27px] fill-red-tenn">
                <use href="/icons.svg#icon-input-warning" />
              </svg>
            )}
            {errors.confirmPassword && (
              <p className="absolute text-red-tenn text-[10px] pl-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <Link
          to={'#'}
          className="text-[10px] text-fire font-semibold text-center"
        >
          Забули пароль?
        </Link>
        <Button label="Зареєструватися" type="submit" />
      </form>

      <p className="text-[10px] text-mineShaft text-center">
        Реєструючись, ви погоджуєтесь з{' '}
        <Link
          to={'#'}
          className="font-semibold lowercase underline [text-decoration-skip-ink:none] text-fire"
        >
          правилами
        </Link>{' '}
        сервісу
      </p>
    </div>
  );
};

export default RegisterForm;
