import { Logo } from './Logo';
import { LangSwitch } from './LangSwitch';
import { Navigation } from './Navigation';
// import { MobileMenuToggle } from "./MobileMenuToggle";
import { UserActions } from './UserActions';

const Header: React.FC = () => {
  return (
    <header className="bg-alabaster h-[64px] shadow-sm font-primary max-w-[1232px] m-auto mt-2 rounded-lg flex">
      <div className="container mx-auto px-24 flex items-center justify-between">
        {/* Left block: Language, Nav, Mobile toggle */}
        <div className="flex items-center gap-10">
          <LangSwitch />
          <Navigation />
          {/* <MobileMenuToggle /> */}
        </div>

        {/* Center block: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Logo />
        </div>

        {/* Right block: User actions */}
        <div className="hidden md:flex items-center gap-6">
          <UserActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
