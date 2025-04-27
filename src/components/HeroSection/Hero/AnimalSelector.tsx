const AnimalSelector = () => {
    return (
      <div className="flex justify-center rounded-[12px] bg-wildSand w-1/2 border-[2px] border-tenn">
        <button className="px-4 w-1/2 font-semibold rounded-l-[8px] bg-fire text-alabaster">
          Собаки
        </button>
        <button className="px-4 py-[10px] w-1/2 font-semibold text-fire hover:bg-wildSand">
          Коти
        </button>
      </div>
    );
  };
  
  export default AnimalSelector;