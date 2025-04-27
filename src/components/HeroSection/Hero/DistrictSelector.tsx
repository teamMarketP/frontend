const DistrictSelector = () => {
    return (
      <select className="w-1/2 rounded-[12px] border-[2px] border-tenn text-fire text-base bg-alabaster px-12 appearance-none">
        <option value="">Обрати район</option>
        <option value="center">Центр</option>
        <option value="left-bank">Лівий берег</option>
        <option value="right-bank">Правий берег</option>
      </select>
    );
  };
  
  export default DistrictSelector;