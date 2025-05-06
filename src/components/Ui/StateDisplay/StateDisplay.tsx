import { FC } from 'react';
import Lottie from 'lottie-react';

type StateDisplayProps = {
  animationData: object;
  message: string | React.ReactNode;
  size?: number;
};

const StateDisplay: FC<StateDisplayProps> = ({ animationData, message, size = 200 }) => {
  return (
    <div className="flex flex-col items-center gap-6 my-20 px-4">
      <Lottie
        autoplay
        loop
        animationData={animationData}
        className={`w-[${size}px] h-[${size}px]`}
      />
      <div className="text-center text-lg text-cod-gray">{message}</div>
    </div>
  );
};

export default StateDisplay;