import { Logo } from './Logo';
import { LangSwitch } from './LangSwitch';
import { Navigation } from './Navigation';
// import { MobileMenuToggle } from "./MobileMenuToggle";
import { UserActions } from './UserActions';

const Header: React.FC = () => {
  return (
    <header className="bg-alabaster h-[64px] py-[2px] shadow-sm font-primary rounded-lg flex">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left block: Language, Nav, Mobile toggle */}
        <div className="flex items-center gap-4">
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
