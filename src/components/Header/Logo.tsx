import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-baseline">
      <span className="text-fire font-bold text-lg">PETS</span>
      <svg className="w-[60px] h-[40px] fill-fire relative top-[1px]">
        <use href="/icons.svg#icon-logo" />
      </svg>
      <span className="text-fire font-bold text-lg">HELP</span>
    </Link>
  );
};
