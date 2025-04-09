import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string; // Проп для передачі кастомних класів
};

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const buttonClass = clsx(
    'bg-tenn text-alabaster rounded-[10px] hover:bg-tenn/80 transition ease-in-out duration-300', // Загальні стилі для всіх кнопок
    {
      'cursor-not-allowed opacity-50': disabled,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
