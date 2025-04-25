import Button from '@/components/Ui/Button/Button';
import {
  registerSchema,
  RegisterSchemaType,
} from '@/validations/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { fullName, phone, email, password, confirmPassword },
    },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log('Form data:', data);
  };

  return (
    <div className="flex flex-col gap-[16px] text-center">
      <h3 className="text-fire uppercase">РЕЄСТРАЦІЯ</h3>

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
      <p className="text-[11px] text-mineShaft">або заповніть форму</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px] text-center"
      >
        <div>
          <input
            type="text"
            placeholder="Прізвище та ім'я"
            className=" input-base"
            {...register('fullName')}
          />
          {fullName && (
            <p className="text-red-500 text-xs">{fullName.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="+38 (ХХХ) ХХХ-ХХ-ХХ"
            className=" input-base"
            {...register('phone')}
          />
          {phone && <p className="text-red-500 text-xs">{phone.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className=" input-base"
            {...register('email')}
          />
          {email && <p className="text-red-500 text-xs">{email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Пароль"
            className=" input-base"
            {...register('password')}
          />
          {password && (
            <p className="text-red-500 text-xs">{password.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Повторити пароль"
            className=" input-base"
            {...register('confirmPassword')}
          />
          {confirmPassword && (
            <p className="text-red-500 text-xs">{confirmPassword.message}</p>
          )}
        </div>

        <Link to={'#'} className="text-[10px] text-fire font-semibold">
          Забули пароль?
        </Link>
        <Button label="Зареєструватися" type="submit" />
      </form>

      <p className="text-[10px] text-mineShaft">
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
