import mockReviewsData from '@/data/bookReviewMock';
import { useBookingContext } from '@/features/booking/hooks/useBookingContext';
import RatingStars from '@/shared/components/RatingStars';

const SpecialistReview = () => {
  const latestReviews = [...mockReviewsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const { selectedLocationOption } = useBookingContext();
  const lineClamp =
    selectedLocationOption === 'customer' ? 'line-clamp-8' : 'line-clamp-5';

  return (
    <div className="overflow-hidden ">
      <div className="border-1 border-fire rounded-2xl mb-6 "></div>
      <h4 className="text-xl font-semibold text-fire mb-5 text-center">
        Останні відгуки
      </h4>
      {latestReviews.length > 0 ? (
        <ul className="flex flex-col gap-5 ">
          {latestReviews.map((review, index) => {
            return (
              <li key={index}>
                <div className="flex gap-4 items-center mb-2">
                  <p className=" font-semibold ">{review.name}</p>
                  <RatingStars rating={review.rating} />
                </div>
                <p
                  className={`text-sm text-mineShaft text-justify ${lineClamp}`}
                >
                  {review.comment}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center text-sm text-gray-400">
          У фахівця ще немає відгуків
        </p>
      )}
    </div>
  );
};

export default SpecialistReview;
