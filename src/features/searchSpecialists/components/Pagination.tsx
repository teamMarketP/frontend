type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const DOTS = '...';

const Pagination = ({ currentPage, totalPages, onChange }: Props) => {
  if (totalPages <= 1) return null;

  const generatePageRange = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push(DOTS);
      pages.push(totalPages);
      return pages;
    }

    if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push(DOTS);
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);
    pages.push(DOTS);
    for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
    pages.push(DOTS);
    pages.push(totalPages);
    return pages;
  };

  const handleClick = (page: number | string) => {
    if (page !== DOTS && page !== currentPage) {
      onChange(Number(page));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex  gap-2">
        <button
          type="button"
          className={`w-7 h-7 flex items-center justify-center transition-opacity ${
            currentPage === 1
              ? 'opacity-50 pointer-events-none cursor-not-allowed'
              : 'fill-fire'
          }`}
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        >
          <svg className="w-[10px] h-[19px] fill-fire">
            <use href="/icons.svg#icon-arrow-left" />
          </svg>
        </button>

        {generatePageRange().map((page, i) =>
          page === DOTS ? (
            <span
              key={`dots-${i}`}
              className="w-7 h-7 flex items-center justify-center text-fire text-xl"
              aria-hidden="true"
              title="Проміжні сторінки"
            >
              {DOTS}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => handleClick(page)}
              aria-label={`Перейти на сторінку ${page}${
                page === currentPage ? ' (поточна сторінка)' : ''
              }`}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`w-7 h-7 flex items-center justify-center text-fire rounded ${
                page === currentPage
                  ? 'font-bold text-2xl'
                  : 'font-semibold text-xl'
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          className={`w-7 h-7 flex items-center justify-center  transition-opacity ${
            currentPage === totalPages
              ? 'opacity-50 pointer-events-none cursor-not-allowed'
              : 'fill-fire'
          }`}
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
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
