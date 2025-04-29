import LoginForm from '@/components/LoginForm/LoginForm';
// import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Modal from '@/components/Ui/Modal/Modal';
import { useState } from 'react';

const SearchButton = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
    return (
      <>
      <button 
      className="btn flex flex-1 items-center justify-center text-[20px]  max-w-[304px] h-auto px-6 py-4 rounded-[16px] hover:shadow-shark active:shadow-inset-shark" 
      type="button"
        onClick={() => setOpenRegisterModal(true)}>
        Пошук
      </button>
      <Modal
      isOpen={openRegisterModal}
      onClose={() => setOpenRegisterModal(false)}
    >
      <LoginForm />
    </Modal>
    </>
    );
  };
  
  export default SearchButton;
  