import React, { useState } from 'react';
import { addDays, subDays, isSameDay, format } from 'date-fns';
import { uk } from 'date-fns/locale';

const NUM_DAYS = 5;

const BookingDatePicker: React.FC = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  const displayedDates = Array.from({ length: NUM_DAYS }, (_, i) =>
    addDays(startDate, i)
  );

  const handleNext = () => {
    setStartDate(prev => addDays(prev, 1));
  };

  const handlePrev = () => {
    if (!isSameDay(startDate, today)) {
      setStartDate(prev => subDays(prev, 1));
    }
  };

  const showLeftArrow = !isSameDay(startDate, today);

  return (
    <div>
      <h4 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Дата виконання замовлення
      </h4>
      <div className="relative">
        {showLeftArrow && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2"
          >
            <svg className="w-[13px] h-[26px] fill-fire ">
              <use href="/icons.svg#icon-arrow-left" />
            </svg>
          </button>
        )}

        <div className="flex justify-center gap-4 ">
          {displayedDates.map((date, index) => {
            const isSelected = isSameDay(selectedDate, date);
            const isToday = isSameDay(date, today);
            const day = format(date, 'd', { locale: uk });
            const month = format(date, 'LLLL', { locale: uk });
            const dayOfWeek = format(date, 'eeee', { locale: uk });

            return (
              <div
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col justify-between xl:w-[132px] xl:h-[132px] rounded-2xl px-2 py-3 text-center cursor-pointer transition border-2
                ${
                  isSelected
                    ? 'bg-tenn text-alabaster border-tenn'
                    : 'border-fire text-fire'
                }`}
              >
                <div
                  className={`${
                    isSelected ? 'bg-alabaster rounded-2xl text-fire' : ''
                  }`}
                >
                  <p className="text-sm capitalize">{month}</p>
                </div>
                <p
                  className={`text-[40px] font-semibold ${
                    isSelected ? 'text-alabaster' : 'text-tenn'
                  }`}
                >
                  {day}
                </p>
                <p className="text-sm capitalize">
                  {isToday ? 'сьогодні' : dayOfWeek}
                </p>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2"
        >
          <svg className="w-[13px] h-[26px] fill-fire transform rotate-180 ">
            <use href="/icons.svg#icon-arrow-left" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookingDatePicker;
