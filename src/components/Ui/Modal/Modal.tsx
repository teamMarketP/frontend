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
    }

    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex justify-center items-start bg-gray-400/20 transition-opacity duration-800 ease-in-out',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
    >
      <div
        className={clsx(
          'absolute top-[91px] bg-alabaster rounded-2xl w-[496px] py-[40px] px-[96px] transition-all duration-800 ease-in-out transform',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4',
          className
        )}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="icon-close absolute right-[29px] top-[26px] text-fiery-orange hover:text-gray-800"
          onClick={onClose}
        ></button>
        <div>{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
