import {
  BookingLocationState,
  LocationOptions,
} from '@/components/BookingForm/types';

const BookingCategory: React.FC<BookingLocationState> = ({
  selectedLocationOption,
  setSelectedLocationOption,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocationOption(event.target.value as LocationOptions);
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
          className="input-base pl-12 xl:w-[472px] "
        >
          <option value="">Обрати послугу</option>
          <option value="Грумінг">Грумінг</option>
          <option value="Перетримка">Перетримка</option>
        </select>

        <div className="xl:flex xl:flex-col xl:text-sm gap-5 xl:absolute xl:left-[520px] ">
          <label className="xl:flex xl:items-center xl:gap-[10px] leading-none">
            <input
              type="radio"
              name="location"
              value="customer"
              checked={selectedLocationOption === 'customer'}
              onChange={handleChange}
              className="book-radio-btn"
            />
            На виїзді
          </label>

          <label className="xl:flex xl:items-center xl:gap-[10px] leading-none">
            <input
              type="radio"
              name="location"
              value="specialist"
              checked={selectedLocationOption === 'specialist'}
              onChange={handleChange}
              className="book-radio-btn"
            />
            У фахівця
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
