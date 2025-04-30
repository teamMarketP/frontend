import { useState } from 'react';

const BookingCategory = () => {
  const [selectedOption, setSelectedOption] = useState('specialist');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h4 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Оберіть категорію послуг
      </h4>
      <div className="xl:flex xl:relative">
        <select
          name="service"
          id="service"
          className="input-base xl:w-[472px] "
        >
          <option value="">Обрати послугу</option>
          <option value="Грумінг">Грумінг</option>
          <option value="Перетримка">Перетримка</option>
        </select>

        <div className="xl:flex xl:flex-col xl:text-sm gap-5 xl:absolute xl:left-[520px] ">
          <label className="xl:flex xl:items-center xl:gap-[10px] ">
            <input
              type="radio"
              name="location"
              value="specialist"
              checked={selectedOption === 'specialist'}
              onChange={handleChange}
              className="book-radio-btn"
            />
            У фахівця
          </label>

          <label className="xl:flex xl:items-center xl:gap-[10px] ">
            <input
              type="radio"
              name="location"
              value="home"
              checked={selectedOption === 'home'}
              onChange={handleChange}
              className="book-radio-btn"
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
  );
};

export default BookingCategory;
