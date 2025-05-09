import BookingForm from '@/features/booking/components/BookingForm';
import BookingSpecialistCard from '@/features/booking/components/BookingSpecialistCard';
import { BookingProvider } from '@/features/booking/context/BookingProvider';
import BackButton from '@/shared/components/UI/BackButton';

const BookingPage = () => {
  return (
    <BookingProvider>
      <section className="mx-auto xl:w-7xl xl:px-30 xl:pt-12 xl:pb-18">
        <BackButton label="Назад" className=" mb-9" />
        <div className="flex gap-8 items-start">
          <BookingForm />
          <BookingSpecialistCard />
        </div>
      </section>
    </BookingProvider>
  );
};

export default BookingPage;
