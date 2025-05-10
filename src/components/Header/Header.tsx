import { Logo } from './Logo';
import { LangSwitch } from './LangSwitch';
import { Navigation } from './Navigation';
import GradientHeaderWrapper from '../Shared/ui/GradientHeaderWrapper/GradientHeaderWrapper';
import { UserActions } from './UserActions';

const Header: React.FC = () => {
  return (
    <>
    <GradientHeaderWrapper />
    <header className="relative bg-alabaster z-30 h-[68px] shadow-sm font-primary max-w-[1232px] mx-auto mt-2 rounded-[16px] flex">
      
    
      <div className="container mx-auto px-24 flex items-center justify-between">
        {/* Left block: Language, Nav*/}
        <div className="flex items-center gap-10">
          <LangSwitch />
          <Navigation />
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
    </>
  );
};

export default Header;
