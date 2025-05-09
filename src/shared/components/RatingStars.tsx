type RatingProps = {
  rating: number;
  size?: string; // tailwind class, e.g. "w-4 h-4"
  max?: number;
  className?: '';
};

const RatingStars = ({
  rating,
  max = 5,
  size = 'w-4 h-4',
  className = '',
}: RatingProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length: max }).map((_, i) => {
        const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;

        return (
          <span key={i} className="relative inline-block ">
            <svg className={`${size} fill-none stroke-fire stroke-2`}>
              <use href="/icons.svg#icon-star" />
            </svg>

            <svg
              className={`${size} fill-fire stroke-fire absolute top-0 left-0`}
              style={{
                fill: 'var(--color-fire)',
                maskImage: `linear-gradient(to right, black ${fillPercent}%, transparent ${fillPercent}%)`,
                WebkitMaskImage: `linear-gradient(to right, black ${fillPercent}%, transparent ${fillPercent}%)`,
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            >
              <use href="/icons.svg#icon-star" />
            </svg>
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
