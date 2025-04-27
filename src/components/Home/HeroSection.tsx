// src/components/Hero/Hero.tsx
import HeroContent from '../Hero/HeroContent';
import HeroImage from '../Hero/HeroImage';
import HeroFilters from '../Hero/HeroFilters';
import DogWithBlob from '../Hero/HeroBlob';

const HeroSection = () => {
  return (
    <section className="py-12 bg-gradient-to-bl from-red-beech via-tenn to-red-beech w-full  rounded-b-[40px] max-w-[1280px] mx-auto -mt-20 px-30 max-h-165 mb-43">
      <div className="container relative mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <HeroContent />
        <HeroImage />
      </div>
      <div className="absolute z-0">
        <DogWithBlob />
      </div>
      <div className="relative z-20">
        <HeroFilters />
      </div>
    </section>
  );
};

export default HeroSection;
