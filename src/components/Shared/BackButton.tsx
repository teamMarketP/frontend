// src/components/Ui/BackButton.tsx
import { useNavigate } from 'react-router-dom';

type BackButtonProps = {
  label?: string;
  className?: string;
};

const BackButton: React.FC<BackButtonProps> = ({
  label = 'Назад',
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Повертає на попередню сторінку
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
};

export default BackButton;
