import { SpecialistMock } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  profile: SpecialistMock;
}

export const SpecialistProfileHeader = ({ profile }: Props) => {
  const { avatar, name, isVerified, icon, updata, profession, experience, bio, services, iconDog, iconCat } = profile;
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
          <p className="text-inherit mb-6">На сайті з:{updata}</p>
          <p className="text-inherit mb-5">{profession}</p>
          <p className="text-inherit mb-7">
            <span className="font-semibold">Досвід:</span> {experience}
          </p>
          <p className="text-inherit text-justify">{bio}</p>
        </div>
      </div>

      {/* Права частина */}
      <div className="flex xl:flex-col justify-between w-full md:w-1/3 max-w-[304px]">
        <div className="rounded-[16px] px-[25px] pt-5 pb-3 shadow-smoke bg-alabaster">
          <div className="flex justify-center items-center gap-5 mb-4">
              <svg className="fill-tenn" width="30" height="30" aria-hidden="true">
                <use href={`/icons.svg#${iconDog}`} />
              </svg>
              <h3 className="text-tenn text-xl font-semibold">Собаки</h3>
          </div>
          <div className="mb-7">
              {services.map(service => (
                <p key={service.id} className="text-base text-center">
                  {service.title}: {service.price}
                  {service.currency} / {service.duration}
                </p>
              ))}
          </div>
          <div className="flex justify-center items-center gap-5 mb-4">
              <svg className="fill-tenn" width="30" height="30" aria-hidden="true">
                <use href={`/icons.svg#${iconCat}`} />
              </svg>
              <h3 className="text-tenn text-xl font-semibold">Коти</h3>
          </div>
          <div className="mb-7">
              {services.map(service => (
                <p key={service.id} className="text-base text-center">
                  {service.title}: {service.price}
                  {service.currency} / {service.duration}
                </p>
              ))}
          </div>
          <Link to="#" className="text-md text-tenn flex justify-center underline">
            Всі послуги
          </Link>
        </div>
          <button className="bg-tenn text-alabaster text-xl py-4 px-9 rounded-[16px] hover:shadow-shark active:shadow-inset-shark transition">
            Запропонувати роботу
          </button>
      </div>
    </section>
  );
};
