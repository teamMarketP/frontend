import { Specialist } from '@/features/searchSpecialists/types/specialist';
import SpecialistCard from '@/features/searchSpecialists/components/SpecialistCard';

type Props = {
  specialists: Specialist[];
};
const gridClasses = 'grid grid-cols-2 gap-x-10 gap-y-10 mb-[58px]';
const SpecialistsList = ({ specialists }: Props) => {
  return (
    <div className={gridClasses}>
      {specialists.map(specialist => (
        <SpecialistCard key={specialist.id} specialist={specialist} />
      ))}
    </div>
  );
};

export default SpecialistsList;
