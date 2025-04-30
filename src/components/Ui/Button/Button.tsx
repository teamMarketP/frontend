import { FC, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  label: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string; // Проп для передачі кастомних класів
};

const Button: FC<ButtonProps> = ({
  label,
  icon,
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
      {icon && (
        <span className="absolute left-[16px] flex items-center">{icon}</span>
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
