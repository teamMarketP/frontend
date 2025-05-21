import { useState } from 'react';

type RatingProps = {
  rating?: number;
  size?: string; // tailwind class, e.g. "w-4 h-4"
  max?: number;
  className?: string;
  readOnly?: boolean;
  onRate?: (value: number) => void;
  labels?: string[];
};

const RatingStars = ({
  rating = 0,
  max = 5,
  size = 'w-4 h-4',
  className = '',
  readOnly = true,
  onRate,
  labels = [],
}: RatingProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (!readOnly && onRate) onRate(index + 1);
  };

  const displayRating = hovered !== null ? hovered + 1 : rating;

  return (
    // <div className="flex flex-col gap-[6px]">
    <div className={`flex gap-2 ${className} `}>
      {Array.from({ length: max }).map((_, i) => {
        const fillPercent = Math.max(0, Math.min(1, displayRating - i)) * 100;
        const isInteractive = !readOnly;
        const showLabel = labels.length > i;
        const isHovered = hovered === i;

        return (
          <div
            key={i}
            className="flex flex-col items-center gap-[6px]"
            onClick={() => isInteractive && handleClick(i)}
            onMouseEnter={() => isInteractive && setHovered(i)}
            onMouseLeave={() => isInteractive && setHovered(null)}
          >
            <span
              className={`relative inline-block  ${
                isInteractive ? 'cursor-pointer' : ''
              }`}
            >
              <svg className={`${size} fill-none stroke-fire stroke-2 `}>
                <use href="/icons.svg#icon-star" />
              </svg>

              <svg
                className={`${size} fill-fire stroke-fire absolute top-0 left-0 pointer-events-none transition-all duration-500 ease-in-out`}
                style={{
                  // width: `${fillPercent}%`,
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

            {/* Label under each star */}
            {showLabel && (
              <span
                className={`transition-text duration-300 ease-in-out ${
                  isHovered || rating === i + 1
                }`}
              >
                {labels[i]}
              </span>
            )}
          </div>
        );
      })}
    </div>

    // </div>
  );
};

export default RatingStars;
