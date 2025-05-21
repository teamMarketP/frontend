import { ReviewSchemaType } from '@/features/review/validation/reviewSchema';
import RatingStars from '@/shared/components/UI/RatingStars';
import { useState } from 'react';
import ChooseService from '@/features/review/components/ChooseService';
import { useFormContext } from 'react-hook-form';

const ReviewForm = () => {
  const methods = useFormContext<ReviewSchemaType>();
  const onSubmit = (data: ReviewSchemaType) => {
    console.log('Form data:', data);
  };

  const ratingLabels = ['Погано', 'Так собі', 'Нормально', 'Добре', 'Чудово'];
  const [userRating, setUserRating] = useState(0);

  return (
    <div>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-[30px]"
      >
        <div>
          <h1 className="xl:text-xl xl:font-semibold text-fire xl:mb-6">
            Оцініть послугу
          </h1>
          <RatingStars
            readOnly={false}
            size="w-[35px] h-[35px]"
            className="grid grid-cols-5 justify-between w-[473px]"
            rating={userRating}
            onRate={val => setUserRating(val)}
            labels={ratingLabels}
          />
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="xl:text-xl xl:font-semibold text-fire">
            Замовник послуги
          </h2>
          <label htmlFor="name" className="flex gap-[6px] items-center">
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Ім'я"
                className="input-base w-[472px] h-[48px] px-11 py-[11px]"
              />
              <svg className="w-6 h-6 absolute fill-none stroke-mountain-400 right-[32px] top-1/2 transform -translate-y-1/2">
                <use href="/icons.svg#icon-pencil" />
              </svg>
            </div>
            <svg className="w-[13px] h-[13px] fill-fire">
              <use href="/icons.svg#icon-required" />
            </svg>
          </label>

          <label htmlFor="lastName" className="flex gap-[6px] items-center">
            <div className="relative">
              <input
                id="lastName"
                type="text"
                placeholder="Прізвище"
                className="input-base w-[472px] h-[48px] px-[44px] py-[11px]"
              />
              <svg className="w-6 h-6 absolute fill-none stroke-mountain-400 right-[32px] top-1/2 transform -translate-y-1/2">
                <use href="/icons.svg#icon-pencil" />
              </svg>
            </div>
          </label>

          <ChooseService />
        </div>

        <div>
          <h2 className="xl:text-xl xl:font-semibold text-fire xl:mb-5">
            Відгук на послугу
          </h2>
          <textarea
            name=""
            id=""
            placeholder="Приклад: Ігор максимально відповідальний та приємний чоловік, замовлення виконано відповідно до наданих інструкцій..."
            className="input-base min-w-[679px] min-h-[184px] resize-none xl:p-4 block overflow-y-auto"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
