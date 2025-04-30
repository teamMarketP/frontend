import SpecialistInfo from '@/components/BookingForm/Booking/SpecialistInfo';
import SpecialistReview from '@/components/BookingForm/Booking/SpecialistReview';

const BookingSpecialistCard = () => {
  return (
    <div className="xl:w-[316px] xl:p-[22px] shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)]">
      <SpecialistInfo />
      <SpecialistReview />
    </div>
  );
};

export default BookingSpecialistCard;
