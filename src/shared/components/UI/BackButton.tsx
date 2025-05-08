import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

type BackButtonProps = {
  label?: string;
  className?: string;
};

const BackButton: React.FC<BackButtonProps> = ({
  label = 'Назад',
  className,
}) => {
  const backBtnClass = clsx(
    'font-semibold text-fire flex gap-3 items-center',
    className
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Повертає на попередню сторінку
  };

  return (
    <button type="button" onClick={handleClick} className={backBtnClass}>
      <svg className="w-2 h-4 fill-fire  ">
        <use href="/icons.svg#icon-arrow-left" />
      </svg>
      {label}
    </button>
  );
};

export default BackButton;
