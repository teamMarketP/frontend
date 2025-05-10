import { Specialist } from '@/types/specialist';
import SpecialistCard from '@/features/searchSpecialists/components/SpecialistCard';

type Props = {
  specialists: Specialist[];
};
const gridClasses = 'grid grid-cols-2 gap-x-[40px] gap-y-[40px] mb-[58px]';
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
