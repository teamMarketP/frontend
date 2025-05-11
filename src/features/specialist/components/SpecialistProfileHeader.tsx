import { SpecialistMock } from '../types';
import Button from '@/components/Ui/Button/Button';
import { useState } from 'react';
import Modal from '@/components/Ui/Modal/Modal';
import SpecialistServices from './SpecialistServices';

interface Props {
  profile: SpecialistMock;
}

export const SpecialistProfileHeader = ({ profile }: Props) => {
  const {
    avatar,
    name,
    isVerified,
    icon,
    joinDate,
    profession,
    experience,
    bio,
    services,
    iconDog,
    iconCat,
  } = profile;
  const [openSpecialistServices, setOpenSpecialistServices] = useState(false);
  const shortDogServices = services.filter(s => s.type === 'dog').slice(0, 2);
  const shortCatServices = services.filter(s => s.type === 'cat').slice(0, 2);
  return (
    <section className="flex xl:flex-row gap-[26px] text-shark mb-[70px]">
      {/* Ліва частина */}
      <div className="flex-1 flex xl:flex-row gap-[37px] p-5 shadow-smoke rounded-[16px] bg-alabaster">
        <img
          src={avatar}
          alt={name}
          className="w-[236px] h-auto rounded-xl object-cover"
        />
        <div>
          <h2 className="text-fire text-xl font-semibold flex items-center gap-3 mb-5">
            {name}
            {isVerified && (
              <span className="fill-fire" title="Перевірений">
                <svg width="20" height="20" aria-hidden="true">
                  <use href={`/icons.svg#${icon}`} />
                </svg>
              </span>
            )}
          </h2>
          <p className="text-inherit mb-6">На сайті з: {joinDate}</p>
          <p className="text-inherit mb-5">{profession}</p>
          <p className="text-inherit mb-7">
            <span className="font-semibold">Досвід:</span> {experience}
          </p>
          <p className="text-inherit text-justify">{bio}</p>
        </div>
      </div>

      {/* Права частина */}
      <div className="flex xl:flex-col justify-between w-full md:w-1/3 max-w-[304px]">
        <div className="flex flex-col justify-center rounded-[16px] px-[25px] pt-5 pb-3 shadow-smoke bg-alabaster">
          {/* Собаки */}
          <div className="flex justify-center items-center gap-5 mb-[16px]">
            <svg
              className="fill-tenn"
              width="30"
              height="30"
              aria-hidden="true"
            >
              <use href={`/icons.svg#${iconDog}`} />
            </svg>
            <h3 className="text-fire text-xl font-semibold">Собаки</h3>
          </div>
          <div className="flex flex-col gap-[10px] mb-[28px]">
            {shortDogServices.map(service => (
              <ul className="flex gap-7" key={service.id}>
                <li className="flex min-w-30">{service.title}:</li> 
                <li className="flex">
                  {service.price}  {service.duration}
                </li>
              </ul>
            ))}
          </div>

          {/* Коти */}
          <div className="flex justify-center items-center gap-5 mb-[16px]">
            <svg
              className="fill-tenn"
              width="30"
              height="30"
              aria-hidden="true"
            >
              <use href={`/icons.svg#${iconCat}`} />
            </svg>
            <h3 className="text-tenn text-xl font-semibold">Коти</h3>
          </div>
          <div className="flex flex-col gap-[10px] mb-[28px]">
            {shortCatServices.map(service => (
              <ul className="flex gap-7" key={service.id}>
                <li className="flex min-w-30">{service.title}:</li> 
                <li className="flex">
                  {service.price}  {service.duration}
                </li>
              </ul>
            ))}
          </div>

          {/* Кнопка відкриття модалки */}
          {(services.filter(s => s.type === 'dog').length > 2 || services.filter(s => s.type === 'cat').length > 2) && (
            <button
              type="button"
              onClick={() => setOpenSpecialistServices(true)}
              className="bg-transparent text-tenn text-sm h-auto font-semibold hover:underline transition duration-200 ease-in-out"
            >
              Всі послуги
            </button>
          )}
          {/* Кнопка закриття модалки */}

          {/* Модалка */}
          <Modal
            isOpen={openSpecialistServices}
            onClose={() => setOpenSpecialistServices(false)}
            className="w-[800px] h-auto shadow-smoke px-[52px] py-[52px]"
          >
            <SpecialistServices
              profile={profile}
              services={services}
              onClose={() => setOpenSpecialistServices(false)} //функцію закриття
            />
          </Modal>
        </div>
        <Button
          label="Запропонувати роботу"
          type="button"
          className="text-xl py-4 px-9 rounded-[16px] h-auto"
        />
      </div>
    </section>
  );
};
