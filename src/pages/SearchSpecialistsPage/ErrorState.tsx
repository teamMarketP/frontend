
import StateDisplay from '@/components/Ui/StateDisplay/StateDisplay';
import errorAnimation from '@/assets/animations/black-cat-error.json';


const ErrorState = () => {


  return (
    <div>

      <StateDisplay
        animationData={errorAnimation}
        size={300}
        message={<>Щось пішло не так. Спробуйте ще раз пізніше.</>}
      />
    </div>
  );
};

export default ErrorState;
