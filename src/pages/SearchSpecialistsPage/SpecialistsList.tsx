import { useMemo, useState, useEffect } from 'react';
import { Specialist } from '@/types/specialist';
import SpecialistCard from '@/pages/SearchSpecialistsPage/SpecialistCard';
import SpecialistCardSkeleton from '@/pages/SearchSpecialistsPage/SpecialistCardSkeleton';

type Props = {
  specialists: Specialist[];
  loading: boolean;
};

const SpecialistsList = ({ specialists, loading }: Props) => {
  const [skeletonCount, setSkeletonCount] = useState(16);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 768) setSkeletonCount(4);
      else if (width < 1280) setSkeletonCount(8);
      else setSkeletonCount(16);
    }
  }, []);

  const skeleton = useMemo(
    () =>
      Array.from({ length: skeletonCount }).map((_, index) => (
        <SpecialistCardSkeleton key={`skeleton-${index}`} />
      )),
    [skeletonCount]
  );

  const gridClasses = 'grid grid-cols-2 gap-x-[40px] gap-y-[40px] mb-[58px]';

  return (
    <div className={gridClasses}>
      {loading
        ? skeleton
        : specialists.map(specialist => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
    </div>
  );
};

export default SpecialistsList;
