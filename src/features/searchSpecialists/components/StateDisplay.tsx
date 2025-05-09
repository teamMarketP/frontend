import Lottie from 'lottie-react';
import emptyAnimation from '@/assets/animations/dog-in-the-box.json';
import errorAnimation from '@/assets/animations/black-cat-error.json';

type StateType = 'empty' | 'error';

type Props = {
  type: StateType;
};

const config = {
  empty: {
    animationData: emptyAnimation,
    size: 200,
    message: (
      <>
        На жаль, ми не знайшли фахівців за вашим запитом.
        <br />
        Спробуйте змінити фільтри або ключові слова.
      </>
    ),
  },
  error: {
    animationData: errorAnimation,
    size: 300,
    message: <>Щось пішло не так. Спробуйте ще раз пізніше.</>,
  },
};

const StateDisplay = ({ type }: Props) => {
  const { animationData, size, message } = config[type];

  return (
    <div className="flex flex-col items-center gap-6 my-10 px-4">
      <Lottie
        autoplay
        loop
        animationData={animationData}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
      <div className="text-center text-lg text-cod-gray">{message}</div>
    </div>
  );
};

export default StateDisplay;
