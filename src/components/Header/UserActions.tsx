import LoginForm from '@/components/LoginForm/LoginForm';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Modal from '@/components/Ui/Modal/Modal';
import { useState } from 'react';

export const UserActions = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <div className="flex gap-6 text-fire">
      <button
        className="hover:text-mineShaft transition-colors py-2"
        type="button"
        onClick={() => setOpenLoginModal(true)}
      >
        Увійти як фахівець
      </button>
      <Modal isOpen={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <LoginForm />
      </Modal>

      <button
        className="hover:text-mineShaft transition-colors py-2"
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
