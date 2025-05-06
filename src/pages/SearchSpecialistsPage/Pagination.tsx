import { FC } from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const DOTS = '...';

const Pagination: FC<Props> = ({ currentPage, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const generatePageRange = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (currentPage <= 8) {
      for (let i = 1; i <= 9; i++) pages.push(i);
      pages.push(DOTS);
      pages.push(totalPages); // 👈 Додаємо останню сторінку (за кроликом)
      return pages;
    }

    if (currentPage >= 9 && currentPage + 3 >= totalPages) {
      pages.push(1);
      pages.push(DOTS);
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    pages.push(DOTS);
    for (let i = currentPage - 1; i <= currentPage + 3; i++) pages.push(i);
    pages.push(DOTS); // за кроликом
    pages.push(totalPages); // за кроликом
    return pages;
  };

  const handleClick = (page: number | string) => {
    if (page !== DOTS && page !== currentPage) {
      onChange(Number(page));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-baseline gap-2">
        {currentPage > 1 && (
          <button
            type="button"
            className="mr-[8px] fill-fire"
            aria-label="Previous page"
            onClick={() => handleClick(currentPage - 1)}
          >
            <svg className="w-[10px] h-[19px]">
              <use href="/icons.svg#icon-arrow-left" />
            </svg>
          </button>
        )}

        {generatePageRange().map((page, i) =>
          page === DOTS ? (
            <span key={`dots-${i}`} className="text-fire px-2"
            aria-hidden="true"
  title="Проміжні сторінки">
              {DOTS}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => handleClick(page)}
              aria-label={`Перейти на сторінку ${page}${page === currentPage ? ' (поточна сторінка)' : ''}`}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`h-[27px] text-fire ${
                page === currentPage
                  ? 'font-bold text-[24px]'
                  : 'font-semibold text-[20px]'
              }`}
            >
              {page}
            </button>
          )
        )}

        {currentPage < totalPages && (
          <button
            type="button"
            className="ml-[8px] fill-fire"
            aria-label="Next page"
            onClick={() => handleClick(currentPage + 1)}
          >
            <svg className="w-[10px] h-[19px]">
              <use href="/icons.svg#icon-arrow-right" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
