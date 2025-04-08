const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#6d2e01] to-[#ce5601] text-white rounded-t-[60px] w-full py-[43px] pb-[20px]">
      <div className="max-w-[1281px] mx-auto flex flex-wrap justify-between items-start pl-[121px] pr-[119px]">
        {/* Column 1 */}
        <div className="w-[90px] h-[146px] mr-[112px]">
          <h3 className="font-semibold mb-4 text-[18px]">Про нас</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Про проєкт
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Контакти
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Щоденник
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                PetsHelp
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-[183px] h-[146px] mr-[62px]">
          <h3 className="font-semibold mb-4 text-[18px]">Як це працює</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Як замовити послугу
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Переваги для компаній
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Гарантії та безпека
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Останні відгуки
              </a>
            </li>
          </ul>
        </div>

        {/* Center Block: Logo, Icons, Text */}
        <div className="flex flex-col items-center justify-start space-y-4 mr-[62px]">
          <div className="flex items-center gap-2">
            <p className="text-[18px] font-normal text-[#f9f9f9]">PETS</p>
            <svg className="w-[61px] h-[39px]" aria-hidden="true">
              <use href="#icon-logo" />
            </svg>
            <p className="text-[18px] font-normal text-[#f9f9f9]">HELP</p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Viber"
              className="hover:opacity-80 transition"
            >
              <svg className="w-6 h-6 fill-white">
                <use href="#icon-viber" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:opacity-80 transition"
            >
              <svg className="w-6 h-6 fill-white">
                <use href="#icon-instagram" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:opacity-80 transition"
            >
              <svg className="w-6 h-6 fill-white">
                <use href="#icon-facebook" />
              </svg>
            </a>
          </div>
          <div className="text-xs text-white mt-2">
            &copy; 2025 PetsHelp marketplace
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-[208px] h-[146px] mr-[23px]">
          <h3 className="font-semibold mb-4 text-[18px]">Допомога</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Питання та відповіді
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Правила конфіденційності
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Служба підтримки
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Публічна оферта
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="w-[152px] h-[111px]">
          <h3 className="font-semibold mb-4 text-[18px]">Посилання</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Всі категорії послуг
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Популярні послуги
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Топ спеціалістів
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
