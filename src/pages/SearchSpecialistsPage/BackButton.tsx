import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/')}
      className="flex items-center gap-[11px] text-fire hover:underline font-semibold text-[16px] mb-[25px]"
    >
      <svg className="w-2 h-4 fill-fire">
        <use href="/icons.svg#icon-arrow-left" />
      </svg>
      Повернутись до пошуку
    </button>
  );
};

export default BackButton;
