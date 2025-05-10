import { useEffect, useRef, useState } from 'react';
import { animals } from '@/data/bookMock';
import {
  BookingLocationState,
  LocationOptions,
} from '@/features/booking/types';
import { dogsWeight } from '@/shared/constants/dogsWeight';

const BookingCategory: React.FC<BookingLocationState> = ({
  selectedLocationOption,
  setSelectedLocationOption,
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLocationOption(event.target.value as LocationOptions);
  };

  const handleServiceClick = (service: string, animalName: string) => {
    setSelectedService(service);
    setSelectedAnimal(animalName);

    if (animalName === 'собаки') {
      // встановити "Малі" тільки якщо ще не вибрано
      setSelectedWeight(prev => prev || dogsWeight[0].range);
    } else {
      setSelectedWeight(null);
    }

    setDropdownOpen(false);
  };

  // 👇 закриваємо дропдаун при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <h4 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
        Оберіть категорію послуг
      </h4>

      <div className="xl:flex xl:relative">
        {/* Кастомний дропдаун */}
        <div className="relative xl:w-[472px]" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="input-base h-12 pl-12 pr-8 w-full text-left flex items-center justify-between"
          >
            {selectedService || 'Обрати послугу'}
            <svg className="w-[9px] h-[17px] fill-fire transform rotate-270">
              <use href="/icons.svg#icon-arrow-left" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 mt-2 flex gap-8 justify-between bg-alabaster border-2 border-fire rounded-2xl shadow-[0_2px_3px_0_rgba(0,0,0,0.25)] w-full px-19 py-7">
              {animals.map(animal => (
                <div key={animal.name}>
                  <h6 className="mb-1 text-fire text-center capitalize">
                    {animal.name}
                  </h6>
                  <ul className="space-y-1">
                    {animal.services.map(service => (
                      <li
                        key={service}
                        onClick={() => handleServiceClick(service, animal.name)}
                        className="cursor-pointer hover:text-fiery-orange transition-colors duration-300 ease-in-out"
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
        <div className="xl:flex xl:flex-col xl:text-sm gap-5 xl:absolute xl:left-[520px]">
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
        </div>

        {/* radio-buttons for dogs weight*/}
        {selectedAnimal === 'собаки' && (
          <ul className="xl:flex xl:flex-col xl:text-sm gap-5 xl:absolute xl:left-[520px] xl:top-[126px]">
            {dogsWeight.map((weight, index) => (
              <li key={index}>
                <label className="xl:flex xl:items-center xl:gap-[10px] leading-none">
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookingCategory;
