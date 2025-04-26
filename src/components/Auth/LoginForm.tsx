import Button from '@/components/Ui/Button/Button';
import { loginSchema, LoginSchemaType } from '@/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { emailOrPhone, password },
    },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log('Form data:', data);
  };

  return (
    <div className="flex flex-col gap-[16px] text-center">
      <h3 className="text-fire uppercase">УВІЙТИ</h3>

      <Button
        label="Увійти з Google"
        type="submit"
        disabled
        className="btn-icon"
        icon={
          <svg className="w-[28px] h-[28px]  ">
            <use href="/icons.svg#icon-google" />
          </svg>
        }
      />

      <p className="text-[11px] text-mineShaft">або заповніть форму</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px]"
      >
        <div>
          <input
            type="text"
            placeholder="Email або телефон"
            className="input-base"
            {...register('emailOrPhone')}
          />
          {emailOrPhone && (
            <p className="text-red-500 text-[10px]">{emailOrPhone.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Пароль"
            className="input-base"
            {...register('password')}
          />
          {password && (
            <p className="text-red-500 text-[10px]">{password.message}</p>
          )}
        </div>
        <p className="text-[10px] text-fire font-semibold">Забули пароль?</p>

        <Button label="Увійти" type="submit" />
      </form>

      <p className="text-[10px] text-mineShaft">
        Увійшовши, ви погоджуєтесь з{' '}
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

export default LoginForm;
