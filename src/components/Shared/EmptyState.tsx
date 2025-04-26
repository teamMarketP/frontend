import Player from 'lottie-react';
import dogInBox from '@/assets/animations/dog-in-the-box.json';
import { useNavigate } from 'react-router-dom';

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
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-tenn text-alabaster rounded-full hover:bg-tenn-dark transition"
      >
        Повернутись до пошуку
      </button>
    </div>
  );
};

export default EmptyState;
