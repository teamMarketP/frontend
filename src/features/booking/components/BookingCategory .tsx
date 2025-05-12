import { useRef, useState } from 'react';
import { animals } from '@/data/bookMock';
import {
  BookingLocationState,
  LocationOptions,
} from '@/features/booking/types';
import { dogsWeight } from '@/shared/constants/dogsWeight';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';

const BookingCategory: React.FC<BookingLocationState> = ({
  selectedLocationOption,
  setSelectedLocationOption,
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, () => setDropdownOpen(false));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocationOption(event.target.value as LocationOptions);
  };

  const handleServiceClick = (service: string, animalName: string) => {
    setSelectedService(service);
    setSelectedAnimal(animalName);

    if (animalName === 'собаки') {
      // Set 'Малі' only if not already selected.
      setSelectedWeight(prev => prev || dogsWeight[0].range);
    } else {
      setSelectedWeight(null);
    }

    setDropdownOpen(false);
  };

  return (
    <div>
      <h1 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Оберіть категорію послуг
      </h1>

      <div className="xl:flex xl:relative">
        {/* Custom dropdown  */}
        <div className="relative xl:w-[472px]" ref={dropdownRef}>
          <h2 className="sr-only ">Обрати тварину/послугу</h2>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="input-base h-12 pl-12 pr-8 w-full text-left flex items-center justify-between"
          >
            {selectedService || 'Обрати послугу'}
            <svg
              className={`w-[9px] h-[17px] fill-fire transform transition-transform duration-300 ease-in-out ${
                dropdownOpen ? 'rotate-90' : 'rotate-270'
              } `}
            >
              <use href="/icons.svg#icon-arrow-left" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 mt-2 flex gap-8 justify-between bg-alabaster border-2 border-tenn rounded-2xl shadow-[0_2px_3px_0_rgba(0,0,0,0.25)] w-full px-19 py-7">
              {animals.map(animal => (
                <div key={animal.name}>
                  <h3 className="mb-1 text-fire text-center capitalize">
                    {animal.name}
                  </h3>
                  <ul className="space-y-1">
                    {animal.services.map(service => (
                      <li
                        key={service}
                        onClick={() => handleServiceClick(service, animal.name)}
                        className="cursor-pointer hover:text-fire hover:underline transition-all duration-300 ease-in-out"
                        aria-selected={selectedService === service}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* radio-buttons for location service */}
        <fieldset className="xl:flex xl:flex-col xl:text-sm gap-5 xl:absolute xl:left-[520px]">
          <legend className="sr-only">Місце виконання замовлення</legend>
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
        </fieldset>

        {/* radio-buttons for dogs weight*/}
        {selectedAnimal === 'собаки' && (
          <fieldset className="xl:flex xl:flex-col xl:text-sm gap-5 xl:absolute xl:left-[520px] xl:top-[126px]">
            <legend className="sr-only">Вага собаки</legend>
            {dogsWeight.map((weight, index) => (
              <label
                key={index}
                className="xl:flex xl:items-center xl:gap-[10px] leading-none"
                aria-selected={selectedWeight === weight.range}
              >
                <input
                  type="radio"
                  name="dogWeight"
                  value={weight.range}
                  checked={selectedWeight === weight.range}
                  onChange={() => setSelectedWeight(weight.range)}
                  className="book-radio-btn"
                />
                {weight.label} {weight.range}
              </label>
            ))}
          </fieldset>
        )}
      </div>
    </div>
  );
};

export default BookingCategory;
