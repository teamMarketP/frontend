import { Specialist } from '@/features/searchSpecialists/types/specialist';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Ui/Button/Button';
import Bio from '@/features/searchSpecialists/components/Bio';
import { useState } from 'react';

type Props = {
  specialist: Specialist;
};

const SpecialistCard = ({ specialist }: Props) => {
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

  const [hasImageError, setHasImageError] = useState(false);
  const imageBase = image_id?.[0]?.trim();
  const hasImageBase = imageBase && imageBase.length > 0;
  const imageSrc = avatar?.trim()
    ? avatar
    : hasImageBase
    ? `/imagesSpecialists/${imageBase}-1x.webp`
    : '/placeholder.webp';

  const renderExperience = () => {
    if (experience === 0) return 'Менше року';
    if (experience === 1) return '1 рік';
    if (experience > 1 && experience < 5) return `${experience} роки`;
    return `${experience} років`;
  };

  const shortFamilyName = family_name ? `${family_name[0]}.` : '';

  return (
    <div
      className="h-full w-full max-w-full grid 
    bg-alabaster rounded-2xl shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)]
    p-4 sm:p-5 gap-x-[9px] gap-y-[23px] xl:gap-6
    [grid-template-areas:'photo_text'_'bio_bio']
    xl:[grid-template-areas:'photo_text'_'photo_text']
    [grid-template-columns:minmax(80px,138px)_minmax(0,1fr)]
    xl:[grid-template-columns:236px_minmax(0,1fr)]
    xl:max-w-[500px]"
    >
      {/* Фото */}
      <div className="[grid-area:photo] max-w-[138px] h-[174px] xl:max-w-[236px] xl:h-[360px] rounded-2xl overflow-hidden">
        <picture>
          {!hasImageError && hasImageBase && (
            <source
              srcSet={`/imagesSpecialists/${imageBase}-2x.webp 2x, /imagesSpecialists/${imageBase}-1x.webp 1x`}
              type="image/webp"
            />
          )}
          <img
            src={imageSrc}
            alt={`${name} ${family_name}`}
            className={`w-full h-full object-cover ${
              hasImageError
                ? `border-2 border-fire rounded-2xl bg-alabaster`
                : ''
            }`}
            onError={e => {
              setHasImageError(true);
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/placeholder.webp';
            }}
            loading="lazy"
          />
        </picture>
      </div>

      {/* Контент + десктопний опис */}
      <div className="[grid-area:text] flex flex-col gap-[18px] h-full xl:justify-between">
        {/* Ім’я + іконка */}
        <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-2 whitespace-nowrap flex-wrap">
          <h2 className="text-xl font-semibold text-fire">
            {name} {shortFamilyName}
          </h2>
          {is_verified && (
            <svg
              className="w-[17px] h-[17px] fill-fire shrink-0 xl:hidden"
              aria-label="Перевірений фахівець"
              role="img"
            >
              <use href="/icons.svg#icon-verified" />
            </svg>
          )}
          </span>
        </div>

        {/* Десктопний бейдж */}
        {is_verified && (
          <div className="hidden xl:flex items-center gap-[7px]">
            <svg
              className="w-[17px] h-[17px] fill-fire"
              aria-label="Перевірений фахівець"
              role="img"
            >
              <use href="/icons.svg#icon-verified" />
            </svg>
            <span className="text-sm font-normal text-cod-gray">
              Перевірений фахівець
            </span>
          </div>
        )}

        {/* Досвід */}
        <p className="text-sm text-cod-gray mb-8px">
          <span className="font-semibold">Досвід:</span>{' '}
          <span className="font-normal">{renderExperience()}</span>
        </p>

        {/* Bio (всередині тексту на десктопі) */}
        <div className="hidden xl:block">
          <Bio text={bio ?? null} />
        </div>

        {/* Кнопка */}
        <Button
          label="Відкрити профіль"
          type="button"
          onClick={() => navigate(`/specialists/${id}`)}
          className="w-full min-h-[35px] mt-auto xl:min-w-[200px] xl:h-[40px] whitespace-nowrap text-sm xl:text-base font-normal text-alabaster text-center rounded-lg xl:rounded-xl bg-tenn hover:shadow-shark active:shadow-inset-shark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tenn overflow-hidden text-ellipsis"
          aria-label={`Відкрити профіль ${name} ${family_name}`}
        />
      </div>

      {/* Мобільний опис — окремим рядком */}
      <div className="[grid-area:bio] xl:hidden">
        <Bio text={bio ?? null} />
      </div>
    </div>
  );
};

export default SpecialistCard;
