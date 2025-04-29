import AnimalSelector from './AnimalSelector';
import DistrictSelector from './DistrictSelector';
import ServiceTypeSelector from './ServiceTypeSelector';
import WeightSelector from './WeightSelector';

const HeroFilters = () => {
  return (
    <div className="relative bg-alabaster shadow-md rounded-[20px] py-4 px-8 w-full flex flex-col gap-4 -mt-60 z-10">
      <div className="flex justify-center gap-8">
        <AnimalSelector />
        <DistrictSelector />
      </div>
      <ServiceTypeSelector />
      <WeightSelector />
    </div>
  );
};

export default HeroFilters;