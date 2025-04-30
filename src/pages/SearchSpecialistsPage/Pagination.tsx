import { FC } from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination: FC<Props> = ({ currentPage, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;

      return (
        <button
          key={pageNumber}
          type="button"
          onClick={() => onChange(pageNumber)}
          className={`h-[27px] text-fire ${
            pageNumber === currentPage
              ? 'font-bold text-[24px]'
              : 'font-semibold text-[20px]'
          }`}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-baseline gap-2">
        {/* Стрілка назад */}
        <button
          type="button"
          className="text-fire mr-[8px]"
          aria-label="Previous page"
          onClick={() => onChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg className="w-[10px] h-[19px] fill-fire">
            <use href="/icons.svg#icon-arrow-left" />
          </svg>
        </button>

        {/* Кнопки з цифрами */}
        {renderPageNumbers()}

        {/* Стрілка вперед */}
        <button
          type="button"
          className="text-fire ml-[8px]"
          aria-label="Next page"
          onClick={() => onChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg className="w-[10px] h-[19px] fill-fire">
            <use href="/icons.svg#icon-arrow-right" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
