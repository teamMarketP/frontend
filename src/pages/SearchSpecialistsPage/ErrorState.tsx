
import StateDisplay from '@/components/Ui/StateDisplay/StateDisplay';
import errorAnimation from '@/assets/animations/black-cat-error.json';


const ErrorState = () => {


  return (


      <StateDisplay
        animationData={errorAnimation}
        size={300}
        message={<>Щось пішло не так. Спробуйте ще раз пізніше.</>}
      />
  
  );
};

export default ErrorState;
