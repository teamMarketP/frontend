import Button from '@/components/Ui/Button/Button';
import ReviewForm from '@/features/review/components/ReviewForm';
import SpecialistInfo from '@/features/review/components/SpecialistInfo';
import {
  reviewSchema,
  ReviewSchemaType,
} from '@/features/review/validation/reviewSchema';
import BackButton from '@/shared/utils/UI/BackButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

const ReviewServicePage = () => {
  const methods = useForm<ReviewSchemaType>({
    resolver: zodResolver(reviewSchema),
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <section className="mx:auto xl:px-30 xl:pt-[69px] xl:pb-[73px]">
        <BackButton className="xl:mb-[34px]" />
        <div className="flex xl:gap-[57px]">
          <ReviewForm />
          <div className="flex flex-col xl:gap-5">
            <SpecialistInfo />
            <Button
              label="Відправити відгук"
              type="button"
              className="btn-lg"
            />
          </div>
        </div>
      </section>
    </FormProvider>
  );
};

export default ReviewServicePage;
