import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-red-beech to-fiery-tenn text-alabaster  rounded-t-[60px] w-full pt-[29px] px-[120px] pb-[25px]  flex flex-col items-center max-w-[1280px] mx-auto">
      {/* Логотип */}
      <Link
        to="/"
        className="flex items-baseline justify-center gap-1 mb-[39px]"
      >
        <span className="text-lg text-alabaster font-third">PETS</span>
        <svg className="w-[61px] h-[39px] fill-alabaster">
          <use href="/icons.svg#icon-logo" />
        </svg>
        <span className="text-lg text-alabaster font-third">HELP</span>
      </Link>

      {/* 4 колонки */}
      <div className="flex gap-[138px] mb-[31px]">
        <div>
          <h3 className="font-semibold text-[20px] mb-[10px]">Про нас</h3>
          <ul className="leading-[2.5]">
            <li>
              <Link to="#">Про проєкт</Link>
            </li>
            <li>
              <Link to="#">Контакти</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[20px] mb-[10px]">Допомога</h3>
          <ul className="leading-[2.5]">
            <li>
              <Link to="#">Питання та відповіді</Link>
            </li>
            <li>
              <Link to="#">Правила конфіденційності</Link>
            </li>
            <li>
              <Link to="#">Служба підтримки</Link>
            </li>
            <li>
              <Link to="#">Публічна оферта</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[20px] mb-[10px]">Як це працює</h3>
          <ul className="leading-[2.5]">
            <li>
              <Link to="#">Як замовити послугу?</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[20px] mb-[10px]">Посилання</h3>
          <ul className="leading-[2.5]">
            <li>
              <Link to="#">Вигул</Link>
            </li>
            <li>
              <Link to="#">Підтримка</Link>
            </li>
            <li>
              <Link to="#">Грумінг</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Копірайт */}
      <p className="text-xs text-center text-alabaster">
        <span className="mr-[9px]">&copy;</span>
        2025 PetsHelp marketplace
      </p>
    </footer>
  );
};

export default Footer;
