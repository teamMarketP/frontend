import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="header w-full bg-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Ліва частина */}
      <div className="font-custom flex items-center gap-6">
        <LanguageSwitcher />
        <a
          href="#services"
          className="text-sm text-black hover:text-orange-custom"
        >
          Сервіси
        </a>
        <MobileMenu />
      </div>

      {/* Центр */}
      <Logo />

      {/* Права частина */}
      <div className="flex items-center gap-4">
        <button className="text-sm text-black hover:text-orange-600">
          Вхід
        </button>
        <button className="text-sm text-orange-600 border border-orange-600 px-4 py-1 rounded-full hover:bg-orange-100">
          Реєстрація
        </button>
      </div>
    </header>
  );
};

export default Header;
