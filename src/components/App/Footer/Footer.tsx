import sprite from "../../../assets/sprite.svg";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#6d2e01] to-[#ce5601] text-white rounded-t-[60px] w-full  pl-[121px] pr-[119px]">
      <div className="flex flex-nowrap items-start mb-[50px] pl-[121px] pr-[119px]">
        {/* Column 1 */}
        <div className="w-[90px] pt-[61px] mr-[112px]">
          <h3 className="font-semibold mb-[15px] text-xl">Про нас</h3>
          <ul className="leading-[2.5] text-base font-normal text-[#f9f9f9] font-primary">
            <li>
              <a href="#">Про проєкт</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
            <li>
              <a href="#">Щоденник</a>
            </li>
            <li>
              <a href="#">PetsHelp</a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-[183px] pt-[61px] mr-[62px]">
          <h3 className="font-semibold mb-[15px] text-xl">Як це працює</h3>
          <ul className="leading-[2.5] text-base font-normal text-[#f9f9f9] font-primary">
            <li>
              <a href="#">Як замовити послугу</a>
            </li>
            <li>
              <a href="#">Переваги для компаній</a>
            </li>
            <li>
              <a href="#">Гарантії та безпека</a>
            </li>
            <li>
              <a href="#">Останні відгуки</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Лого + соцмережі + текст */}
        <div className="flex flex-col items-center  pt-[43px] mr-[52px]">
          {/* Логотип */}
          <div className="flex items-center w-[164px] mb-[73px]">
            <p className="text-lg font-normal text-[#f9f9f9] font-third">
              PETS
            </p>
            <svg className="w-[25px] h-[25px] fill-[#f9f9f9] ">
              <use xlinkHref={`${sprite}#icon-logo`} />
              <use xlinkHref={`${sprite}#icon-logo`} />
            </svg>
            <p className="text-lg font-normal text-[#f9f9f9] font-third">
              HELP
            </p>
          </div>

          {/* Соцмережі */}
          <div className="flex gap-[29px] flex-row justify-start items-center w-[164px]">
            <a href="#" aria-label="Viber">
              <svg className="w-[27px] h-[27px] fill-white">
                <use xlinkHref={`${sprite}#icon-viber`} />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-[27px] h-[26px] fill-white">
                <use xlinkHref={`${sprite}#icon-instagram`} />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-[26px] h-[25px] fill-white">
                <use xlinkHref={`${sprite}#icon-facebook`} />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-[208px] pt-[61px] mr-[23px]">
          <h3 className="font-semibold mb-[15px] text-xl">Допомога</h3>
          <ul className="leading-[2.5] text-base font-normal text-[#f9f9f9] font-primary">
            <li>
              <a href="#">Питання та відповіді</a>
            </li>
            <li>
              <a href="#">Правила конфіденційності</a>
            </li>
            <li>
              <a href="#">Служба підтримки</a>
            </li>
            <li>
              <a href="#">Публічна оферта</a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="w-[152px] pt-[61px]">
          <h3 className="font-semibold mb-[15px] text-xl">Посилання</h3>
          <ul className="leading-[2.5] text-base font-normal text-[#f9f9f9] font-primary">
            <li>
              <a href="#">Всі категорії послуг</a>
            </li>
            <li>
              <a href="#">Популярні послуги</a>
            </li>
            <li>
              <a href="#">Топ спеціалістів</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Текст */}
      <p className="text-xs text-white pb-5 text-center text-primary">
        &copy; 2025 PetsHelp marketplace
      </p>
    </footer>
  );
};

export default Footer;
