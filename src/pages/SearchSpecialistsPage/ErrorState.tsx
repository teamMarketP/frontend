import Player from 'lottie-react';
import errorAnimation from '@/assets/animations/black-cat-error.json';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Ui/Button/Button';

const ErrorState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4">
      {/* Lottie анімація */}
      <Player
        autoplay
        loop
        animationData={errorAnimation}
        className="w-[220px] h-[220px]"
      />

      <div className="text-center text-cod-gray text-lg mt-6 mb-6">
        Щось пішло не так. Спробуйте ще раз пізніше.
      </div>

      <Button
        label="Повернутись до пошуку"
        type="button"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default ErrorState;
