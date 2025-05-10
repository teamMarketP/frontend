import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/')}
      className="flex items-center gap-3 text-fire transition-[text-shadow] duration-300 ease-in-out hover:text-shadow-xs
 font-semibold text-[16px] mb-6"
    >
      <svg className="w-2 h-4 fill-fire">
        <use href="/icons.svg#icon-arrow-left" />
      </svg>
      Повернутись до пошуку
    </button>
  );
};

export default BackButton;
