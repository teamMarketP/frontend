import BookingForm from '@/components/Booking/BookingForm';
import BookingSpecialistCard from '@/components/Booking/BookingSpecialistCard';
import BackButton from '@/components/Shared/BackButton';

const BookingPage = () => {
  return (
    <section className="mx-auto xl:w-7xl xl:px-30 xl:pt-12 xl:pb-18">
      <BackButton label="Назад" />
      <div className="flex gap-8">
        <BookingForm />
        <BookingSpecialistCard />
      </div>
    </section>
  );
};

export default BookingPage;
