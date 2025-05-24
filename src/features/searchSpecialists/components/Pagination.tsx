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
      pages.push(DOTS, totalPages);
      return pages;
    }
    if (currentPage >= totalPages - 3) {
      pages.push(1, DOTS);
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    pages.push(1, DOTS);
    for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
    pages.push(DOTS, totalPages);
    return pages;
  };

  const handleClick = (page: number | string) => {
    if (page !== DOTS && page !== currentPage) onChange(Number(page));
  };

  return (
    <nav
      className="flex justify-center mt-6 select-none"
      role="navigation"
      aria-label="Пагінація"
      aria-live="polite"
    >
      <ul className="flex items-center gap-[13px] xl:gap-[17px]">
        {/* ← */}
        <li>
          <button
            type="button"
            aria-label="Попередня сторінка"
            disabled={currentPage === 1}
            onClick={() => handleClick(currentPage - 1)}
            className="w-[22px] h-[22px] xl:w-[27px] xl:h-[27px] flex items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-fire fill-fire transition-opacity disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg className="w-[10px] h-[19px]">
              <use href="/icons.svg#icon-arrow-left" />
            </svg>
          </button>
        </li>

        {/* --- Цифри і ... --- */}
        {generatePageRange().map((page, i) => (
          <li key={page === DOTS ? `dots-${i}` : `page-${page}`}>
            {page === DOTS ? (
              <span
                className="min-w-[20px] h-[20px] xl:min-w-[27px] xl:h-[27px] flex items-center justify-center text-[20px] xl:text-[20px] text-fire leading-none pointer-events-none select-none"
                aria-hidden="true"
              >
                {DOTS}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => handleClick(page)}
                aria-label={`Перейти на сторінку ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`
                  min-w-[18px] h-[18px] xl:min-w-[27px] xl:h-[27px]
                  flex items-center justify-center rounded
                  text-center text-fire leading-none
                  text-[20px] xl:text-[22px] transition-all duration-150
                  border border-transparent hover:border-fire
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-fire
                  ${
                    page === currentPage
                      ? 'font-bold text-[22px] xl:text-[24px]'
                      : 'font-semibold hover:border-fire'
                  }
                `}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* → */}
        <li>
          <button
            type="button"
            aria-label="Наступна сторінка"
            disabled={currentPage === totalPages}
            onClick={() => handleClick(currentPage + 1)}
            className="w-[22px] h-[22px] xl:w-[27px] xl:h-[27px] flex items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-fire fill-fire transition-opacity disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg className="w-[10px] h-[19px]">
              <use href="/icons.svg#icon-arrow-right" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
