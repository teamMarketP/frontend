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

const SpecialistsList = ({ specialists, loading, error }: Props) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[40px]">
        {Array.from({ length: 16 }).map((_, index) => (
          <SpecialistCardSkeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorState />;
  }

  if (specialists.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-2 gap-x-[40px] gap-y-[40px] mb-[58px]">
      {specialists.map(specialist => (
        <SpecialistCard key={specialist.id} specialist={specialist} />
      ))}
    </div>
  );
};

export default SpecialistsList;
