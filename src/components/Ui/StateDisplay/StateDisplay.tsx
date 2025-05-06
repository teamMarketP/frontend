import { FC } from 'react';
import Lottie from 'lottie-react';

type StateDisplayProps = {
  animationData: object;
  message: string | React.ReactNode;
  size?: number;
};

const StateDisplay: FC<StateDisplayProps> = ({ animationData, message, size = 200 }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-20 mt-20 px-4">
      <Lottie
        autoplay
        loop
        animationData={animationData}
        style={{ width: size, height: size }}
      />
      <div className="text-center text-lg text-cod-gray mt-6 mb-6">{message}</div>
    </div>
  );
};

export default StateDisplay;