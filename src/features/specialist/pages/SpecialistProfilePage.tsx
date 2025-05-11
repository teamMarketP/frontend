import { SpecialistProfileHeader } from "../components/SpecialistProfileHeader";
import { SpecialistPetsCarousel } from "../components/SpecialistPetsCarousel";
import SpecialistReviewsSection from "../components/SpecialistReviewsSection";
import mockProfileData from "../../../data/__mocks__/mockProfileData";

const SpecialistProfilePage = () => {
  return (
    <div className="mx-auto px-[120px] pt-37 pb-30 max-w-[1280px]">

      <div className="flex">
        {/* <BackButton /> */}
        <h1 className="sr-only text-7xl uppercase">Сторінка фахівця</h1>
      </div>
      <SpecialistProfileHeader profile={mockProfileData} />
      <SpecialistPetsCarousel images={mockProfileData} />
     <SpecialistReviewsSection />
    </div>
  );
};

export default SpecialistProfilePage;



  