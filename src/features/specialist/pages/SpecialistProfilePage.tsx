import { SpecialistProfileHeader } from "../components/SpecialistProfileHeader";
import { SpecialistPetsCarousel } from "../components/SpecialistPetsCarousel";
import SpecialistReviewsSection from "../components/SpecialistReviewsSection";
import mockProfileData from "../../../data/__mocks__/mockProfileData";

const SpecialistProfilePage = () => {
  return (
    <div className="mx-auto p-[120px] max-w-[1280px]">
      {/* <BackButton /> */}
      <SpecialistProfileHeader profile={mockProfileData} />
      <SpecialistPetsCarousel images={mockProfileData} />
     <SpecialistReviewsSection />
    </div>
  );
};

export default SpecialistProfilePage;



  