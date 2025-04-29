import LoginForm from '@/components/LoginForm/LoginForm';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Modal from '@/components/Ui/Modal/Modal';
import { useState } from 'react';

export const UserActions = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <div className="flex gap-2 text-fire">
      <button
        className="px-2 py-1 border-[2px] border-transparent rounded-full hover:border-fire transition-colors"
        type="button"
        onClick={() => setOpenLoginModal(true)}
      >
        Увійти як фахівець
      </button>
      <Modal isOpen={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <LoginForm />
      </Modal>

      <button
        className="px-2 py-1 border-[2px] border-transparent rounded-full hover:border-fire transition-colors"
        type="button"
        onClick={() => setOpenRegisterModal(true)}
      >
        Стати фахівцем
      </button>
      <Modal
        isOpen={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
};
