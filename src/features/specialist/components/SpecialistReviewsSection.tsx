import { useEffect, useRef, useState } from 'react';
import { ReviewCard } from './SpecialistReviewCard';
import mockReviewsData from '../__mocks__/mockReviewsData';

const BATCH_SIZE = 0;

function SpecialistReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE + 3);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const hasLoadedOnce = useRef(false);

  useEffect(() => {
    if (showAll) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];

        if (entry.isIntersecting && hasLoadedOnce.current) {
          setVisibleCount(prev =>
            Math.min(prev + BATCH_SIZE, mockReviewsData.length)
          );
        } else {
          hasLoadedOnce.current = true;
        }
      },
      { threshold: 1 }
    );

    const current = loaderRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [showAll]);

  const reviewsToShow = showAll
    ? mockReviewsData
    : mockReviewsData.slice(0, visibleCount);

  const hasMore = visibleCount < mockReviewsData.length;
  const arrowMore = { title: 'Більше відгуків', icon: 'icon-arrow-bottom' };

  return (
    <section className="section">
      
        <h2 className="text-center text-xl text-fire font-semibold uppercase mb-10">
          Відгуки
        </h2>        
          <div className="flex flex-col gap-10 mb-[34px]">
            {reviewsToShow.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>

        {hasMore && !showAll && <div ref={loaderRef} />}

        {mockReviewsData.length > BATCH_SIZE && (
          <div className="flex justify-center">
            <button
              onClick={() => {
                setShowAll(prev => !prev);
                if (showAll) setVisibleCount(BATCH_SIZE + 3);
              }}
              className="flex gap-[11px] hover:underline hover:fill-fire items-center"
            >
              {showAll ? 'Згорнути' : `Всі відгуки (${mockReviewsData.length})`}
              <svg width="22" height="12"  className={`transform transition-transform duration-300 ease-in-out ${showAll ? 'rotate-180' : 'rotate-0'}`}>
                <title>{arrowMore.title}</title>
                <use href={`/icons.svg#${arrowMore.icon}`} />
              </svg>
            </button>
          </div>
        )}
      
    </section>
  );
}

export default SpecialistReviewsSection;
