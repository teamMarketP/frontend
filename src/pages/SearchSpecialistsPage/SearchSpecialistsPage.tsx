import { useState, useEffect } from 'react';
import Pagination from '@/pages/SearchSpecialistsPage/Pagination';
import SpecialistsList from '@/pages/SearchSpecialistsPage/SpecialistsList';
import { mockSpecialists } from '@/data/mockSpecialists';

import BackButton from '@/pages/SearchSpecialistsPage/BackButton';

const SearchSpecialistsPage = () => {
  const specialistsPerPage = 16;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const totalPages = Math.ceil(mockSpecialists.length / specialistsPerPage);

  const specialistsToShow = mockSpecialists.slice(
    (page - 1) * specialistsPerPage,
    page * specialistsPerPage
  );

  useEffect(() => {
    setLoading(true);
    setError(false);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [page]);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-[120px] pt-[47px] pb-[58px]">
      <BackButton />
      {/* <button
        type="button"
        onClick={() => navigate('/')}
        className="flex items-center gap-[11px] text-fire hover:underline font-semibold text-[16px] mb-[25px]"
      >
        <svg className="w-2 h-4 fill-fire">
          <use href="/icons.svg#icon-arrow-left" />
        </svg>
        Повернутись до пошуку
      </button> */}

      <h1 className="flex items-center gap-[8px] font-semibold text-[20px] text-fire mb-[20px]">
        Ми знайшли фахівців для вашого запиту
        <svg className="w-[17px] h-[15px] fill-fire">
          <use href="/icons.svg#icon-two-paws-print" />
        </svg>
      </h1>

      <SpecialistsList
        specialists={specialistsToShow}
        loading={loading}
        error={error}
      />

      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default SearchSpecialistsPage;
