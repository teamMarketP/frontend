import BookingCategory from '@/components/BookingForm/Booking/BookingCategory ';
import BookingDatePicker from '@/components/BookingForm/Booking/BookingDatePicker';
import BookingDetails from '@/components/BookingForm/Booking/BookingDetails';
import BookingLocation from '@/components/BookingForm/Booking/BookingLocation';
import BookingPrice from '@/components/BookingForm/Booking/BookingPrice';
import BookingTimePicker from '@/components/BookingForm/Booking/BookingTimePicker';
import { LocationOptions } from '@/components/BookingForm/types';
import { useState } from 'react';

const BookingForm = () => {
  const [selectedOption, setSelectedOption] =
    useState<LocationOptions>('specialist');

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
