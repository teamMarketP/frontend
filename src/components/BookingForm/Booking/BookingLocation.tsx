import { BookingLocationState } from '@/components/BookingForm/types';

// this code will be deleted when API is ready
const districts = [
  'Голосіївський',
  'Дарницький',
  'Печерський',
  'Дніпровський',
  "Солом'янський",
  'Оболонський',
  'Шеченківський',
  'Подільський',
  'Деснянський',
];

// Sort districts alphabetically
const sortedDistricts = [...districts].sort((a, b) => a.localeCompare(b));

const BookingLocation = ({
  selectedLocationOption,
}: Pick<BookingLocationState, 'selectedLocationOption'>) => {
  return (
    <div>
      <h4 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Місце виконання замовлення
      </h4>
      {selectedLocationOption === 'specialist' ? (
        <div className="flex items-center input-base xl:w-[472px]  text-fire select-none cursor-not-allowed">
          Київ / Святошинський р-н
        </div>
      ) : (
        <div className="xl:flex xl:flex-col xl:gap-[21px] ">
          <input
            type="text"
            defaultValue="Київ"
            className="input-base xl:w-[472px] cursor-not-allowed placeholder:text-fire text-fire select-none pointer-events-none"
            readOnly
            tabIndex={-1}
          />
          <select
            name="district"
            id="district"
            className="input-base xl:w-[472px] "
          >
            <option value="">Обрати район</option>
            {sortedDistricts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
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
      )}
    </div>
  );
};

export default BookingLocation;
