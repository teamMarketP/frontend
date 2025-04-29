import BookingDatePicker from '@/components/Booking/BookingDatePicker';
import BookingPrice from '@/components/Booking/BookingPrice';
import BookingTimePicker from '@/components/Booking/BookingTimePicker';
import { useState } from 'react';

const BookingForm = () => {
  const [selectedOption, setSelectedOption] = useState('specialist');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <form className="xl:w-[692px] ">
        <div>
          <h4 className="text-xl font-semibold text-fire">
            Оберіть категорію послуг
          </h4>
          <div>
            <select
              name="service"
              id="service"
              className="input-base xl:w-[472px] "
            >
              <option value="">Обрати послугу</option>
              <option value="Грумінг">Грумінг</option>
              <option value="Перетримка">Перетримка</option>
            </select>
            <div>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="specialist"
                  checked={selectedOption === 'specialist'}
                  onChange={handleChange}
                />
                У фахівця
              </label>

              <label>
                <input
                  type="radio"
                  name="location"
                  value="home"
                  checked={selectedOption === 'home'}
                  onChange={handleChange}
                />
                На виїзді
              </label>

              {/* <p>
                Обрано:{' '}
                {selectedOption === 'specialist' ? 'У фахівця' : 'На виїзді'}
              </p> */}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-fire">
            Місце виконання замовлення
          </h4>
          <input
            type="text"
            defaultValue="Київ"
            className="input-base xl:w-[472px] "
          />
          <select
            name="district"
            id="district"
            className="input-base xl:w-[472px] "
          >
            <option value="">Обрати район</option>
            <option value="Грумінг">Грумінг</option>
            <option value="Перетримка">Перетримка</option>
          </select>

          <input
            type="text"
            placeholder="Приклад: вул. Шевченка"
            className="input-base xl:w-[472px] "
          />

          <input
            type="text"
            placeholder="Приклад: буд. 1, корп. 2, кв. 3"
            className="input-base xl:w-[472px] "
          />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-fire">Деталі замовлення</h4>
          <textarea
            name="orderDetails"
            id="orderDetails"
            className="input-base xl:min-h-[186px] "
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
