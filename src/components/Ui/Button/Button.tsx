import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string; // Проп для передачі кастомних класів
};

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className,
}) => {
  const buttonClass = clsx(
    'btn', // Загальні стилі для всіх кнопок
    {
      'btn-disabled': disabled,
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
