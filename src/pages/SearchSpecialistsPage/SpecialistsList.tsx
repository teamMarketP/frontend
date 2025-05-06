import {useMemo, useState} from 'react';
import { Specialist } from '@/types/specialist';
import SpecialistCard from '@/pages/SearchSpecialistsPage/SpecialistCard';
import SpecialistCardSkeleton from '@/pages/SearchSpecialistsPage/SpecialistCardSkeleton';
import EmptyState from '@/pages/SearchSpecialistsPage/EmptyState';
import ErrorState from '@/pages/SearchSpecialistsPage/ErrorState';

type Props = {
  specialists: Specialist[];
  loading: boolean;
  error: boolean;
};
  const getSkeletonCount = (): number =>{
    const width = window.innerWidth;
    if(width < 768) return 4;
    if(width < 1280) return 8;
    return 16;
  } 


const SpecialistsList = ({ specialists, loading, error }: Props) => {

  const [skeletonCount] = useState(getSkeletonCount);
  const skeletonArray = useMemo(() => 
  Array.from({length: skeletonCount}).map((_, index) => (
    <SpecialistCardSkeleton key={`skeleton-${index}`} />
      )),
      [skeletonCount]
    );


    const gridClasses ="grid grid-cols-2 gap-x-[40px] gap-y-[40px] mb-[58px]";

  if (loading && specialists.length === 0) {
    return (
      <div className={gridClasses}>
        {skeletonArray}
      </div>
    );
  }

  if (error) {
    return <ErrorState />;
  }

  if (!loading && specialists.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={gridClasses}>
      {specialists.map(specialist => (
        <SpecialistCard key={specialist.id} specialist={specialist} />
      ))}
    </div>
  );
};

export default SpecialistsList;
