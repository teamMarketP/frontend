import { useState, useEffect, useRef } from 'react';
import Pagination from '@/pages/SearchSpecialistsPage/Pagination';
import SpecialistsList from '@/pages/SearchSpecialistsPage/SpecialistsList';
import { mockSpecialists } from '@/data/mockSpecialists';
import BackButton from '@/pages/SearchSpecialistsPage/BackButton';
import StateDisplay from '@/components/Ui/StateDisplay/StateDisplay';

const SearchSpecialistsPage = () => {
  const specialistsPerPage = 16;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  const totalPages = Math.ceil(mockSpecialists.length / specialistsPerPage);

  const specialistsToShow = mockSpecialists.slice(
    (page - 1) * specialistsPerPage,
    page * specialistsPerPage
  );

  useEffect(() => {
    setLoading(true);
    setHasError(false);

    // Прокрутка до початку списку при зміні сторінки
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [page]);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="max-w-[1040px] mx-auto pt-[47px] pb-[58px]">
      <BackButton />
      {!loading && !hasError && specialistsToShow.length > 0 && (
        <h1 className="flex items-center gap-2 font-semibold text-[20px] text-fire mb-5">
          Ми знайшли фахівців для вашого запиту
          <svg className="w-[17px] h-[15px] fill-fire">
            <use href="/icons.svg#icon-two-paws-print" />
          </svg>
        </h1>
      )}
      <div ref={listRef}>
        {loading ? (
          <SpecialistsList specialists={[]} loading={true} />
        ) : hasError ? (
          <StateDisplay type="error" />
        ) : specialistsToShow.length === 0 ? (
          <StateDisplay type="empty" />
        ) : (
          <SpecialistsList specialists={specialistsToShow} loading={false} />
        )}
      </div>
      {!loading && !hasError && specialistsToShow.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={handleChangePage}
        />
      )}
    </div>
  );
};

export default SearchSpecialistsPage;
