import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Modal from '@/components/Ui/Modal/Modal';
import Button from '@/components/Ui/Button/Button';
import { useState } from 'react';

const SearchButton = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  return (
    <>
      <Button
        label="Пошук"
        type="button"
        onClick={() => setOpenRegisterModal(true)}
        className="flex flex-1 items-center justify-center text-[20px] max-w-[304px] h-auto px-6 py-4 rounded-[16px] hover:shadow-shark active:shadow-inset-shark"
      />
      <Modal
        isOpen={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      >
        <RegisterForm />
      </Modal>
    </>
  );
};

export default SearchButton;
