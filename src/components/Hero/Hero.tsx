import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="custom-gradient py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <HeroContent />
        {/* <HeroImage /> */}
      </div>
    </section>
  );
};

export default Hero;
