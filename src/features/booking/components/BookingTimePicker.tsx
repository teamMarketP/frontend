import { timeSlots } from '@/shared/constants/bookingTime';
import { useState } from 'react';

const BookingTimePicker = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <h2 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Час виконання замовлення
      </h2>
      <fieldset className="flex gap-2">
        <legend className="sr-only">Оберіть час</legend>
        {timeSlots.map((slot, index) => {
          return (
            <label
              key={index}
              className="h-10 flex items-center gap-2 leading-none text-sm px-[10px] w-[132px] border-2 border-fire rounded-2xl"
            >
              <input
                type="radio"
                name="time"
                value={slot.value}
                checked={selectedTime === slot.value}
                onChange={handleTimeChange}
                className="book-radio-btn"
                aria-checked={selectedTime === slot.value ? 'true' : 'false'}
              />
              {slot.time}
            </label>
          );
        })}
      </fieldset>
    </div>
  );
};

export default BookingTimePicker;
