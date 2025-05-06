
import StateDisplay from '@/components/Ui/StateDisplay/StateDisplay';
import dogInBox from '@/assets/animations/dog-in-the-box.json';


const EmptyState = () => {
 

  return (
    <div>
 
      <StateDisplay
        animationData={dogInBox}
        message={
          <>
            На жаль, ми не знайшли фахівців за вашим запитом.
            <br />
            Спробуйте змінити фільтри або ключові слова.
          </>
        }
      />
    </div>
  );
};

export default EmptyState;