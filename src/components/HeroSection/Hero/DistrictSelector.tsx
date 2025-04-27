const DistrictSelector = () => {
    return (
      <select className="flex-1 rounded-[12px] border-[2px] border-tenn text-fire bg-alabaster px-12 py-2 appearance-none">
        <option value="">Обрати район</option>
        <option value="center">Центр</option>
        <option value="left-bank">Лівий берег</option>
        <option value="right-bank">Правий берег</option>
      </select>
    );
  };
  
  export default DistrictSelector;