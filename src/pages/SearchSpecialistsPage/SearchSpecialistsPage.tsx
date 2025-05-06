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
      // Simulate occasional error for testing error state
      // Remove in production or replace with actual error handling
if (Math.random() < 0.1) {
setError(true);
 }
    }, 500);

    return () => clearTimeout(timer);
  }, [page]);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="max-w-[1040px] mx-auto  pt-[47px] pb-[58px]">
      <BackButton />
    

      <h1 className="flex items-center gap-2 font-semibold text-[20px] text-fire mb-5">
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

  
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={handleChangePage}
        />
     
    </div>
  );
};

export default SearchSpecialistsPage;
