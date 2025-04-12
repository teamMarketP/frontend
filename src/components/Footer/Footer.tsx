import sprite from '@/assets/sprite.svg';

const footerSections = [
  {
    title: 'Про нас',
    items: ['Про проєкт', 'Контакти'],
  },
  {
    title: 'Як це працює',
    items: ['Як замовити послугу'],
  },
  {
    title: 'Допомога',
    items: [
      'Питання та відповіді',
      'Правила конфіденційності',
      'Служба підтримки',
      'Публічна оферта',
    ],
  },
  {
    title: 'Посилання',
    items: ['Всі категорії послуг', 'Популярні послуги', 'Топ спеціалістів'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#6d2e01] to-[#ce5601] text-white rounded-t-[60px] w-full">
      <div className="flex max-w-[1280px] mx-auto justify-between items-start gap-[60px] px-[120px] mb-[50px]">
        {/* Ліва частина */}
        <div className="flex gap-[40px]">
          {footerSections.slice(0, 2).map(({ title, items }, index) => (
            <div key={index} className="pt-[61px]">
              <h3 className="font-semibold mb-[15px] text-xl">{title}</h3>
              <ul className="leading-[2.5] text-base font-normal text-alabaster font-primary">
                {items.map((item, i) => (
                  <li key={i}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Центр: Логотип і соцмережі */}
        <div className="flex flex-col items-center pt-[43px]">
          {/* Логотип */}
          <div className="flex items-end justify-center h-[38px] mb-[73px]">
            <p className="text-lg font-normal font-third text-alabaster leading-none">
              PETS
            </p>
            <svg className="w-[59px] h-[38px] fill-[#f9f9f9]">
              <use xlinkHref={`${sprite}#icon-logo`} />
            </svg>
            <p className="text-lg font-normal font-third text-alabaster leading-none">
              HELP
            </p>
          </div>

          {/* Соцмережі */}
          <div className="flex gap-[29px] flex-row justify-start items-center">
            <a href="#" aria-label="Viber">
              <svg className="w-[31px] h-[31px] fill-alabaster">
                <use xlinkHref={`${sprite}#icon-viber`} />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-[27px] h-[26px] fill-alabaster">
                <use xlinkHref={`${sprite}#icon-instagram`} />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-[26px] h-[25px] fill-alabaster">
                <use xlinkHref={`${sprite}#icon-facebook`} />
              </svg>
            </a>
          </div>
        </div>

        {/* Права частина */}
        <div className="flex gap-[40px]">
          {footerSections.slice(2).map(({ title, items }, index) => (
            <div key={index} className="pt-[61px]">
              <h3 className="font-semibold mb-[15px] text-xl">{title}</h3>
              <ul className="leading-[2.5] text-base font-normal text-alabaster font-primary">
                {items.map((item, i) => (
                  <li key={i}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Копірайт */}
      <p className="text-center font-primary text-xs text-alabaster pb-5">
        &copy; 2025 PetsHelp marketplace
      </p>
    </footer>
  );
};

export default Footer;
