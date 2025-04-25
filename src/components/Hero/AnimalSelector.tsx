// src/components/Hero/AnimalSelector.tsx
const AnimalSelector = () => {
    return (
      <div className="flex-1 flex justify-center rounded-[12px] bg-wildSand w-fit border-[2px] border-tenn">
        <button className="flex-1 px-4 py-2 font-semibold rounded-l-[8px] bg-fire text-alabaster justify-between ">
          Собаки
        </button>
        <button className="flex-1 px-4 py-2 font-semibold text-fire hover:bg-wildSand">
          Коти
        </button>
      </div>
    );
  };
  
  export default AnimalSelector;