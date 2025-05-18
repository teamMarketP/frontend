import BookingForm from '@/features/booking/components/BookingForm';
import BookingSpecialistCard from '@/features/booking/components/BookingSpecialistCard';
import {
  bookingSchema,
  BookingSchemaType,
} from '@/features/booking/validation/bookingSchema';
import BackButton from '@/shared/components/UI/BackButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { FormProvider, useForm } from 'react-hook-form';

const BookingPage = () => {
  const methods = useForm<BookingSchemaType>({
    resolver: zodResolver(bookingSchema),
    mode: 'onChange',
    defaultValues: {
      locationOption: 'customer',
      date: format(new Date(), 'yyyy-MM-dd'),
      time: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <section className="mx-auto xl:w-7xl xl:px-30 xl:pt-[69px] xl:pb-18">
        <BackButton label="Назад" className=" mb-9" />
        <div className="flex gap-8">
          <BookingForm />
          <BookingSpecialistCard />
        </div>
      </section>
    </FormProvider>
  );
};

export default BookingPage;
