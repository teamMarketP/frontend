// import { useState } from 'react';
// import LoginForm from '../LoginForm/LoginForm'; // Імпортуємо форму для входу
// import RegisterForm from '../RegisterForm/RegisterForm'; // Імпортуємо форму для реєстрації
// import Button from '@/components/Ui/Button/Button'; // Універсальна кнопка

// const UserActions = () => {
//   // Стейти для відображення модальних вікон
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

//   // Функції для відкриття і закриття модальних вікон
//   const openLoginModal = () => setIsLoginModalOpen(true);
//   const closeLoginModal = () => setIsLoginModalOpen(false);

//   const openRegisterModal = () => setIsRegisterModalOpen(true);
//   const closeRegisterModal = () => setIsRegisterModalOpen(false);

//   return (
//     <div className="flex flex-row">
//       {/* Кнопка для відкриття модального вікна входу */}
//       <Button
//         label="Увійти як фахівець"
//         onClick={openLoginModal}
//         type="button"
//         className="bg-transparent text-fire text-base p-0 hover:bg-none hover:shadow-none hover:text-cod-gray"
//       />

//       {/* Кнопка для відкриття модального вікна реєстрації */}
//       <Button
//         label="Стати фахівцем"
//         onClick={openRegisterModal}
//         type="button"
//         className="bg-transparent text-fire p-0 hover:bg-none hover:shadow-none btn"
//       />

//       {/* Модальне вікно входу */}
//       {isLoginModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeLoginModal}>
//               &times;
//             </span>
//             <LoginForm />
//           </div>
//         </div>
//       )}

//       {/* Модальне вікно реєстрації */}
//       {isRegisterModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeRegisterModal}>
//               &times;
//             </span>
//             <RegisterForm />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserActions;

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
        className="hover:text-mineShaft transition-colors"
        type="button"
        onClick={() => setOpenRegisterModal(true)}
      >
        Увійти як фахівець
      </button>
      <Modal
        isOpen={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      >
        <RegisterForm />
      </Modal>

      <button
        className="hover:text-mineShaft transition-colors"
        type="button"
        onClick={() => setOpenLoginModal(true)}
      >
        Стати фахівцем
      </button>
      <Modal isOpen={openLoginModal} onClose={() => setOpenLoginModal(false)}>
        <LoginForm />
      </Modal>
    </div>
  );
};
