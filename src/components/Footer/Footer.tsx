import sprite from '@/assets/sprite.svg';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#6d2e01] to-[#ce5601] text-white rounded-t-[60px] w-full  pt-[29px] pr-[121px] pb-[25px] pl-[119px] flex flex-col items-center  max-w-[1280px] mx-auto ">
      {/* Логотип */}
      <div className="flex items-end justify-center h-[38px] mb-[39px]">
        <p className="text-base font-third text-alabaster leading-none">PETS</p>
        <svg className="w-[61px] h-[39px] fill-[#f9f9f9] mx-[4px]">
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
        <p className="text-base font-third text-alabaster leading-none">HELP</p>
      </div>

      {/* 4 колонки */}
      <div className="flex gap-[138px] mb-[31px]">
        <ul>
          <li className="font-semibold text-[20px] mb-[10px] text-alabaster font-primary">
            Про нас
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Про проєкт</a>
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Контакти</a>
          </li>
        </ul>

        <ul>
          <li className="font-semibold text-[20px] mb-[10px] text-alabaster font-primary">
            Допомога
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Питання та відповіді</a>
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Правила конфіденційності</a>
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Служба підтримки</a>
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Публічна оферта</a>
          </li>
        </ul>

        <ul>
          <li className="font-semibold text-[20px] mb-[10px] text-alabaster font-primary">
            Як це працює
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Як замовити послугу?</a>
          </li>
        </ul>

        <ul>
          <li className="font-semibold text-[20px] mb-[10px] text-alabaster font-primary">
            Посилання
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Вигул</a>
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Підтримка</a>
          </li>
          <li className="font-normal text-[16px] leading-[2.5] text-alabaster font-primary">
            <a href="#">Грумінг</a>
          </li>
        </ul>
      </div>

      {/* Копірайт */}
      <p className="font-normal text-[12px]  font-primary text-alabaster  text-center">
        &copy; 2025 PetsHelp marketplace
      </p>
    </footer>
  );
};

export default Footer;
