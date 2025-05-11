import { districts } from '@/data/districts';
import { BookingLocationState } from '@/features/booking/types';

// Sort districts alphabetically
const sortedDistricts = [...districts].sort((a, b) => a.localeCompare(b));

const BookingLocation = ({
  selectedLocationOption,
}: Pick<BookingLocationState, 'selectedLocationOption'>) => {
  return (
    <div>
      <h2 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Місце виконання замовлення
      </h2>
      {selectedLocationOption === 'specialist' ? (
        <div
          className="flex items-center input-base h-12 pl-12 xl:w-[472px]  text-fire select-none cursor-not-allowed"
          aria-label={`Місце виконання замовлення: Київ / ${districts[9]}`}
        >
          Київ / {districts[9]}
        </div>
      ) : (
        <div className="xl:flex xl:flex-col xl:gap-[21px] ">
          <input
            type="text"
            defaultValue="Київ"
            className="input-base h-12 pl-12 xl:w-[472px] cursor-not-allowed placeholder:text-fire text-fire select-none"
            readOnly
            aria-readonly="true"
            tabIndex={-1}
            aria-disabled="true"
            aria-label="Місто"
          />
          <select
            name="district"
            id="district"
            className="input-base h-12 pl-12 xl:w-[472px] "
            aria-label="Обрати район"
            aria-required="true"
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
            className="input-base h-12 pl-12 xl:w-[472px] "
            aria-label="Вулиця"
          />

          <input
            type="text"
            placeholder="Приклад: буд. 1, корп. 2, кв. 3"
            aria-label="Номер будинку, корпус, квартира"
            className="input-base h-12 pl-12 xl:w-[472px] "
          />
        </div>
      )}
    </div>
  );
};

export default BookingLocation;
