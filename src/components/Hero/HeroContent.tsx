import HeroTitle from './HeroTitle';
import HeroFilters from './HeroFilters';

const HeroContent = () => {
  return (
    <div className="flex flex-col items-start gap-6 max-w-xl w-full">
      <HeroTitle />
      <HeroFilters />
    </div>
  );
};

export default HeroContent;
