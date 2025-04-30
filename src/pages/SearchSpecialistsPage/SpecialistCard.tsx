import { FC } from 'react';
import { Specialist } from '@/types/specialist';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Ui/Button/Button';

type Props = {
  specialist: Specialist;
};

const SpecialistCard: FC<Props> = ({ specialist }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    family_name,
    experience,
    is_verified,
    image_id,
    avatar,
    bio,
  } = specialist;

  const imageBase = image_id?.[0];

  const imageSrc =
    avatar ??
    (imageBase
      ? `/imagesSpecialists/${imageBase}-1x.webp`
      : '/placeholder.webp');

  const renderExperience = () => {
    if (experience === 0) return 'Менше року';
    if (experience === 1) return '1 рік';
    if (experience > 1 && experience < 5) return `${experience} роки`;
    return `${experience} років`;
  };
  function truncateText(text: string, maxLength = 160) {
    if (typeof text !== 'string') return '';
    const clean = text.trim().replace(/\s+/g, ' ');
    return clean.length > maxLength ? clean.slice(0, maxLength) + '…' : clean;
  }
  return (
    <div className="w-[500px] h-[400px] bg-alabaster rounded-[16px] shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)] p-5 gap-[24px] flex overflow-hidden">
      {/* Зображення */}
      <div className="w-[236px] h-[360px]  flex-shrink-0 rounded-[16px] overflow-hidden ">
        <picture>
          {imageBase && (
            <source
              srcSet={`/imagesSpecialists/${imageBase}-2x.webp 2x, /imagesSpecialists/${imageBase}-1x.webp 1x`}
              type="image/webp"
            />
          )}
          <img
            src={imageSrc}
            alt={`${name} ${family_name}`}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Контент */}
      <div className="flex flex-col  h-[360px]">
        <div className="flex flex-col gap-[16px] ">
          <h2 className="text-[20px] font-semibold text-fire ">
            {name} {family_name}
          </h2>

          {is_verified && (
            <div className="flex  gap-[7px]">
              <svg className="w-[17px] h-[17px] fill-fire">
                <use href="/icons.svg#icon-verified" />
              </svg>
              <span className="text-sm font-normal text-cod-gray">
                Перевірений фахівець
              </span>
            </div>
          )}

          <p className="text-sm text-cod-gray ">
            <strong className="font-semibold">Досвід:</strong>{' '}
            <span className="font-normal">{renderExperience()}</span>
          </p>
          {/* перший варівнт */}
          {/* <p className="text-sm text-cod-gray text-justify line-clamp-8">
            <strong className="font-semibold">Про себе:</strong>{' '}
            {bio || 'Опис відсутній'}
          </p> */}
          {/* другий варіант */}
          {/* <p className="text-sm text-cod-gray text-justify">
            <strong className="font-semibold">Про себе:</strong>{' '}
            {bio
              ? bio.length > 180
                ? bio.slice(0, 180) + '…'
                : bio
              : 'Опис відсутній'}
          </p> */}
          {/* третій варіант */}
          <p className="text-sm text-cod-gray text-justify line-clamp-8">
            <strong className="font-semibold">Про себе:</strong>{' '}
            {truncateText(bio || 'Опис відсутній', 180)}
          </p>
        </div>
        <Button
          label="Відкрити профіль"
          type="button"
          onClick={() => navigate(`/specialist/${id}`)}
          className="w-[200px] min-h-[40px] mt-auto text-[16px] font-normal text-alabaster text-center rounded-[16px] bg-tenn hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] active:shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
        />
      </div>
    </div>
  );
};

export default SpecialistCard;
