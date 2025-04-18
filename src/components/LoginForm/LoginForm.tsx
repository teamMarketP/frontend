import Button from '@/components/Ui/Button/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-[16px] text-center">
      <h3 className="text-fire capitalize">УВІЙТИ</h3>

      <Button
        label="Увійти з Google"
        type="submit"
        disabled
        className="btn-icon"
        icon={
          <svg className="w-[21px] h-[21px] fill-gray-400 ">
            <use href="/icons.svg#icon-google2" />
          </svg>
        }
      />

      <p className="text-[11px] text-mineShaft">або заповніть форму</p>
      <form className="flex flex-col gap-[16px]">
        <input
          type="email"
          placeholder="Email або телефон"
          className="input-base"
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          className="input-base"
          required
        />
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
