import BookingCategory from '@/features/booking/components/BookingCategory ';
import BookingDatePicker from '@/features/booking/components/BookingDatePicker';
import BookingDetails from '@/features/booking/components/BookingDetails';
import BookingLocation from '@/features/booking/components/BookingLocation';
import BookingPrice from '@/features/booking/components/BookingPrice';
import BookingTimePicker from '@/features/booking/components/BookingTimePicker';
import { LocationOptions } from '@/features/booking/types';
import { useState } from 'react';

const BookingForm = () => {
  const [selectedOption, setSelectedOption] =
    useState<LocationOptions>('customer');

  return (
    <div>
      <form className="xl:flex xl:flex-col xl:gap-[30px] xl:w-[692px] ">
        <BookingCategory
          selectedLocationOption={selectedOption}
          setSelectedLocationOption={setSelectedOption}
        />
        <BookingLocation selectedLocationOption={selectedOption} />
        <BookingDetails />
        <BookingDatePicker />
        <BookingTimePicker />
        <BookingPrice />
      </form>
    </div>
  );
};

export default BookingForm;
