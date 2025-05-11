import { FC } from 'react';

interface SpecialistCardSkeletonProps {
  delay?: number;
}

const SpecialistCardSkeleton: FC<SpecialistCardSkeletonProps> = ({
  delay = 0,
}) => {
  return (
    <div
      className="w-[500px] h-[400px] rounded-[16px] p-5 gap-6 flex overflow-hidden animate-pulse transition-all duration-300 ease-in-out shadow-[0_1px_4px_4px_rgba(0,0,0,0.15)] bg-alabaster"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Зображення */}
      <div className="w-[236px] h-[360px] rounded-[16px] flex-shrink-0 bg-[#D9732B]/30" />

      {/* Контент */}
      <div className="flex flex-col justify-between h-[360px] flex-1">
        {/* Ім’я */}
        <div className="h-6 w-[60%] rounded mb-[20px] bg-[#D9732B]/40" />

        {/* Verified */}
        <div className="flex gap-[7px] mb-[23px] items-center">
          <div className="w-[17px] h-[17px] rounded-full bg-[#D9732B]/30" />
          <div className="w-[120px] h-[16px] rounded bg-[#D9732B]/30" />
        </div>

        {/* Досвід */}
        <div className="h-[16px] w-[180px] rounded mb-[32px] bg-[#D9732B]/30" />

        {/* Опис */}
        <div className="space-y-2">
          <div className="h-[14px] w-full rounded bg-[#D9732B]/30" />
          <div className="h-[14px] w-[90%] rounded bg-[#D9732B]/30" />
          <div className="h-[14px] w-[75%] rounded bg-[#D9732B]/30" />
        </div>

        {/* Кнопка */}
        <div className="w-[200px] h-[40px] rounded-[16px] mt-auto bg-[#D9732B]/40" />
      </div>
    </div>
  );
};

export default SpecialistCardSkeleton;
