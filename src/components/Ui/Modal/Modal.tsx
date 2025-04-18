import clsx from 'clsx';
import { FC, useEffect } from 'react';
// import sprite from '../../../assets/sprite.svg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  "
      onClick={onClose}
    >
      <div
        className={clsx(
          'modal-box relative bg-white rounded-2xl w-[496px] py-[40px] px-[96px]',
          className
        )}
        onClick={e => e.stopPropagation()} // Щоб клік по модалці не закривав
      >
        <button
          className=" absolute right-[29px] top-[26px] text-fiery-orange hover:text-gray-800"
          onClick={onClose}
        >
          Х
          {/* <svg className="w-[12px] h-[12px] fill-[#b74c00] stroke-amber-400">
            <use xlinkHref={`${sprite}#icon-vector`} />
          </svg> */}
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
