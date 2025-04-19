import Button from '@/components/Ui/Button/Button';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className="flex flex-col gap-[16px] text-center">
      <h3 className="text-fire uppercase">РЕЄСТРАЦІЯ</h3>

      <Button
        label="Увійти з Google"
        type="submit"
        disabled
        className="btn-icon"
        icon={
          <svg className="w-[28px] h-[28px] fill-gray-400 ">
            <use href="/icons.svg#icon-google" />
          </svg>
        }
      />
      <p className="text-[11px] text-mineShaft">або заповніть форму</p>

      <form className="flex flex-col gap-[16px] text-center">
        <input
          type="text"
          placeholder="Прізвище та ім'я"
          className=" input-base"
          required
        />
        <input
          type="text"
          placeholder="+38 (ХХХ) ХХХ-ХХ-ХХ"
          className=" input-base"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className=" input-base"
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          className=" input-base"
          required
        />
        <input
          type="password"
          placeholder="Повторити пароль"
          className=" input-base"
          required
        />
        <p className="text-[10px] text-fire font-semibold">Забули пароль?</p>

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
