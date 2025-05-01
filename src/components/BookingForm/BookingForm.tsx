import BookingCategory from '@/components/BookingForm/Booking/BookingCategory ';
import BookingDatePicker from '@/components/BookingForm/Booking/BookingDatePicker';
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

        <div>
          <h4 className="text-xl font-semibold text-fire">Деталі замовлення</h4>
          <textarea
            name="orderDetails"
            id="orderDetails"
            className="input-base xl:min-h-[186px] resize-none "
            placeholder="Приклад: порода собаки, вимоги до виконавця, особливості собаки, розмір собаки, вік улюбленця та ін."
          ></textarea>
        </div>
        <BookingDatePicker />
        <BookingTimePicker />
        <BookingPrice />
      </form>
    </div>
  );
};

export default BookingForm;
