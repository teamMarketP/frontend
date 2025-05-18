import { districts } from '@/data/districts';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

// Sort districts alphabetically
const sortedDistricts = [...districts].sort((a, b) => a.localeCompare(b));

const BookingLocation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, () => setDropdownOpen(false));

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedLocationOption = watch('locationOption');
  const selectedDistrict = watch('district');
  const selectedAnimal = watch('animal');

  const handleDistrictClick = (district: string) => {
    setValue('district', district);
    setDropdownOpen(false);
  };

  return (
    <div>
      <h2 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Місце виконання замовлення
      </h2>
      {selectedLocationOption === 'specialist' ? (
        <div
          className={`flex items-center input-base h-12 pl-12 xl:w-[472px] text-fire select-none cursor-not-allowed ${
            selectedAnimal === 'собаки' ? ' mb-[63px]' : ''
          }`}
          aria-label={`Місце виконання замовлення: Київ / ${districts[9]}`}
        >
          Київ / {districts[9]}
        </div>
      ) : (
        <div className="xl:flex xl:flex-col xl:gap-[21px] ">
          <input
            type="text"
            defaultValue="Київ"
            className="input-base h-12 pl-12 xl:w-[472px] pointer-events-none placeholder:text-fire text-fire select-none"
            readOnly
            aria-readonly="true"
            tabIndex={-1}
            aria-disabled="true"
            aria-label="Місто"
          />
          <div className="xl:flex xl:relative">
            {/* Custom dropdown  */}
            <div className="relative xl:w-[472px]" ref={dropdownRef}>
              <h2 className="sr-only">Обрати район</h2>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="input-base h-12 pl-12 flex items-center justify-between"
              >
                {selectedDistrict || 'Обрати район'}
                <svg
                  className={`w-[9px] h-[17px] fill-fire transform transition-transform duration-300 ease-in-out ${
                    dropdownOpen ? 'rotate-90' : 'rotate-270'
                  } `}
                >
                  <use href="/icons.svg#icon-arrow-left" />
                </svg>
              </button>

              {errors.district?.message && (
                <p className="absolute text-red-tenn text-[10px] pl-12 mt-1">
                  {String(errors.district.message)}
                </p>
              )}

              {dropdownOpen && (
                <ul className="absolute z-10 mt-2 flex flex-col justify-between bg-alabaster border-2 border-tenn rounded-2xl shadow-[0_2px_3px_0_rgba(0,0,0,0.25)] w-full py-5">
                  {sortedDistricts.map((district, index) => (
                    <li
                      key={index}
                      onClick={() => handleDistrictClick(district)}
                      className="w-full cursor-pointer hover:bg-tenn hover:text-alabaster transition-all duration-300 ease-in-out py-[5px]  px-12"
                      aria-selected={selectedDistrict === district}
                    >
                      {district}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              {...register('street')}
              placeholder="Приклад: вул. Шевченка"
              className="input-base h-12 pl-12 xl:w-[472px] "
              aria-label="Вулиця"
            />
            {errors.street?.message && (
              <p className="absolute text-red-tenn text-[10px] pl-12 mt-1">
                {String(errors.street.message)}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              {...register('house')}
              placeholder="Приклад: буд. 1, корп. 2, кв. 3"
              aria-label="Номер будинку, корпус, квартира"
              className="input-base h-12 pl-12 xl:w-[472px] "
            />
            {errors.house?.message && (
              <p className="absolute text-red-tenn text-[10px] pl-12 mt-1">
                {String(errors.house.message)}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingLocation;
