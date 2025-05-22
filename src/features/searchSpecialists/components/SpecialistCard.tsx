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
      className="h-full
    grid max-w-[345px] xl:max-w-[500px]
    bg-alabaster rounded-2xl shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)]
    p-5 gap-x-[9px] gap-y-[23px] xl:gap-6
    [grid-template-areas:'photo_text'_'bio_bio']
    xl:[grid-template-areas:'photo text'_'photo text']
    [grid-template-columns:138px_1fr]
    xl:grid-cols-[236px_1fr]
  "
    >
      {/* Фото */}
      <div className="[grid-area:photo] w-[138px] h-[174px] xl:w-[236px] xl:h-[360px] rounded-2xl overflow-hidden">
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
            className="w-full h-full object-cover"
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
        <div className="flex items-center justify-between gap-2 whitespace-nowrap overflow-hidden">
          <h2 className="text-xl font-semibold text-fire truncate">
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
          className="w-full mt-auto h-[35px] xl:max-w-[200px] xl:h-[40px] whitespace-nowrap text-[15px] xl:text-base font-normal text-alabaster text-center rounded-xl bg-tenn hover:shadow-shark active:shadow-inset-shark"
          aria-label={`Відкрити профіль ${name} ${family_name}`}
        />
      </div>

      {/* Мобільний опис — окремим рядком */}
      <div className="[grid-area:bio] xl:hidden">
        <Bio text={bio ?? null} />
      </div>
    </div>

    // <div className="grid max-w-[345px] xl:max-w-[500px] bg-alabaster rounded-2xl shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)] p-[18px] gap-x-[9px] gap-y-[23px] xl:gap-6 [grid-template-areas:'photo_text'_'bio_bio'] xl:[grid-template-areas:'photo text'_'photo text'] grid-cols-[138px_1fr] xl:grid-cols-[236px_1fr] ">
    //   {/* Фото */}
    //   <div className="[grid-area:photo] rounded-2xl overflow-hidden">
    //     <picture>
    //       {!hasImageError && hasImageBase && (
    //         <source
    //           srcSet={`/imagesSpecialists/${imageBase}-2x.webp 2x, /imagesSpecialists/${imageBase}-1x.webp 1x`}
    //           type="image/webp"
    //         />
    //       )}
    //       <img
    //         src={imageSrc}
    //         alt={`${name} ${family_name}`}
    //         className="w-[138px] h-[174px] xl:w-[236px] xl:h-[360px] object-cover"
    //         onError={e => {
    //           setHasImageError(true);
    //           e.currentTarget.onerror = null;
    //           e.currentTarget.src = '/placeholder.webp';
    //         }}
    //         loading="lazy"
    //       />
    //     </picture>
    //   </div>

    //   {/* Контент */}
    //   <div className="[grid-area:text] h-[174px] flex flex-col gap-[18px]  min-w-0">
    //     {/* Рядок: Ім’я + іконка праворуч (моб) */}
    //     <div className="flex items-center  gap-[10px]">
    //       <h2 className="text-xl font-semibold text-fire">
    //         {name} {shortFamilyName}
    //       </h2>

    //       {is_verified && (
    //         <svg
    //           className="w-[17px] h-[17px] fill-fire shrink-0 xl:hidden"
    //           aria-label="Перевірений фахівець"
    //           role="img"
    //         >
    //           <use href="/icons.svg#icon-verified" />
    //         </svg>
    //       )}
    //     </div>

    //     {/* Бейдж для десктопу */}
    //     {is_verified && (
    //       <div className="hidden xl:flex items-center gap-[7px]">
    //         <svg
    //           className="w-[17px] h-[17px] fill-fire"
    //           aria-label="Перевірений фахівець"
    //           role="img"
    //         >
    //           <use href="/icons.svg#icon-verified" />
    //         </svg>
    //         <span className="text-sm font-normal text-cod-gray">
    //           Перевірений <br /> фахівець
    //         </span>
    //       </div>
    //     )}

    //     <p className="text-sm text-cod-gray">
    //       <span className="font-semibold">Досвід:</span>{' '}
    //       <span className="font-normal">{renderExperience()}</span>
    //     </p>
    //     <Button
    //       label="Відкрити профіль"
    //       type="button"
    //       onClick={() => navigate(`/specialists/${id}`)}
    //       className="w-full w-max-[158px] h-[35px] xl:max-w-[200px] mt-auto xl:h-[40px] text-[15px] whitespace-nowrap xl:text-base font-normal text-alabaster text-center rounded-xl bg-tenn hover:shadow-shark active:shadow-inset-shark"
    //       aria-label={`Відкрити профіль ${name} ${family_name}`}
    //     />
    //   </div>
    //   <div className="[grid-area:bio] ">
    //     <Bio text={bio ?? null} />
    //   </div>
    // </div>
  );
};

export default SpecialistCard;
