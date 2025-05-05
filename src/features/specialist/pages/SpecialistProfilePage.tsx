import { SpecialistProfileHeader } from "../components/SpecialistProfileHeader";
import { SpecialistPetsCarousel } from "../components/SpecialistPetsCarousel"
import mockProfileData from "../__mocks__/mockProfileData";

const SpecialistProfilePage = () => {
  return (
    <div className="container mx-auto p-[120px] max-w-[1280px]">
      <SpecialistProfileHeader profile={mockProfileData} />
      <SpecialistPetsCarousel images={mockProfileData} />
      {/* <SpecialistPetsCarousel />
      <SpecialistReviewsSection /> */}
    </div>
  );
};

export default SpecialistProfilePage;



  