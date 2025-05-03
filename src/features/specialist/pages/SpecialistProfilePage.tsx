import { FC } from "react";
import { SpecialistProfileHeader } from "../components/SpecialistProfileHeader";
import mockProfileData from "../__mocks__/mockProfileData";

const SpecialistProfilePage: FC = () => {
  return (
    <div className="container mx-auto p-[120px] space-y-8 max-w-[1280px]">
      <SpecialistProfileHeader profile={mockProfileData} />
      {/* <SpecialistPetsCarousel />
      <SpecialistReviewsSection /> */}
    </div>
  );
};

export default SpecialistProfilePage;



  