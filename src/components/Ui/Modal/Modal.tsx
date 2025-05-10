import clsx from 'clsx';
import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

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
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex justify-center backdrop-blur-xs items-center bg-[rgba(47,47,47,0.6)] transition-opacity duration-800 ease-in-out px-4',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          'relative bg-alabaster rounded-2xl w-124 py-10 px-24 transition-all duration-500 ease-in-out transform',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4',
          className
        )}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="flex justify-center items-center absolute right-[29px] top-[26px] w-5 h-5 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_4px_1px_rgba(207,86,0,0.8)]"
          onClick={onClose}
        >
          <svg className="w-[10px] h-[10px] fill-fiery-orange ">
            <use href="/icons.svg#icon-close-btn" />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
