import BookingCategory from '@/features/booking/components/BookingCategory ';
import BookingDatePicker from '@/features/booking/components/BookingDatePicker';
import BookingDetails from '@/features/booking/components/BookingDetails';
import BookingLocation from '@/features/booking/components/BookingLocation';
import BookingPrice from '@/features/booking/components/BookingPrice';
import BookingTimePicker from '@/features/booking/components/BookingTimePicker';
import { useBookingContext } from '@/features/booking/hooks/useBookingContext';

const BookingForm = () => {
  const { selectedLocationOption, setSelectedLocationOption } =
    useBookingContext();

  return (
    <>
      <form className="xl:flex xl:flex-col xl:gap-[30px] xl:w-[692px] novalidate">
        <BookingCategory
          selectedLocationOption={selectedLocationOption}
          setSelectedLocationOption={setSelectedLocationOption}
        />
        <BookingLocation selectedLocationOption={selectedLocationOption} />
        <BookingDetails />
        <BookingDatePicker />
        <BookingTimePicker />
        <BookingPrice />
      </form>
    </>
  );
};

export default BookingForm;
