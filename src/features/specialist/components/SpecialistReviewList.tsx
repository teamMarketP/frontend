import { useState } from "react";
import { ReviewCard } from './SpecialistReviewCard';
import { ReviewMock } from '../types';

interface Props {
  reviews: ReviewMock[];
}

const arrowMore = {
  title: "Більше відгуків",
  icon: "icon-arrow-bottom",
};

export const ReviewsList = ({ reviews }: Props) => {    
  
  if (reviews.length === 0) {
    return (
      <div className="text-center text-lg text-shark py-10">
        Ще немає відгуків. Будьте першим, хто залишить відгук!
      </div>
    );
  }

  const {} = reviews[0];
  const [visibleCount, setVisibleCount] = useState(3);

const sortedReviews = [...reviews]
  .sort((a, b) => {
    // Приводимо до об'єктів Date для порівняння
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime(); // від новішого до старішого
  })
  .slice(0, 3);

    const visibleReviews = sortedReviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="flex flex-col gap-6">
      {visibleReviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}

      {hasMore && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 3)}
          className="self-center mt-4 px-6 py-2 text-fire border border-fire rounded-full hover:bg-fire hover:text-white flex items-center gap-2 transition"
          title={arrowMore.title}
        >
          Ще відгуки
        </button>
      )}
    </div>
  );
};
