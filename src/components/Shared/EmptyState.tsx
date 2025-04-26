import Player from 'lottie-react';
import dogInBox from '@/assets/animations/dog-in-the-box.json';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Ui/Button/Button';

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4">
      {/* Lottie animation */}
      <Player
        autoplay
        loop
        animationData={dogInBox}
        className="w-[200px] h-[200px]"
      />

      {/* Text */}
      <div className="text-center text-lg text-cod-gray mt-6 mb-6">
        На жаль, ми не знайшли фахівців за вашим запитом.
        <br />
        Спробуйте змінити фільтри або ключові слова.
      </div>

      {/* Button */}
      <Button
        label="Повернутись до пошуку"
        type="button"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default EmptyState;
