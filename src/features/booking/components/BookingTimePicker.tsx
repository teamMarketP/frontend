import { timeSlots } from '@/features/booking/constants/bookingTime';

const BookingTimePicker = () => {
  return (
    <div>
      <h4 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Час виконання замовлення
      </h4>
      <ul className="flex gap-2">
        {timeSlots.map((slot, index) => {
          return (
            <li
              key={index}
              className="w-[132px] border-2 border-fire rounded-2xl"
            >
              <label className="h-10 flex items-center gap-2 leading-none text-sm px-[10px] ">
                <input
                  type="radio"
                  name="time"
                  value={slot.value}
                  // checked={selectedOption === {slot.value}}
                  // onChange={handleChange}
                  className="book-radio-btn"
                />
                {slot.time}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookingTimePicker;
