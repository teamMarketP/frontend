import { FC } from 'react';

interface SpecialistCardSkeletonProps {
  delay?: number;
}

const SpecialistCardSkeleton: FC<SpecialistCardSkeletonProps> = ({ delay = 0 }) => {
  return (
    <div
      className="w-[500px] h-[400px] bg-alabaster rounded-[16px] shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)] p-5 gap-6 flex overflow-hidden animate-pulse"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Зображення */}
      <div className="skeleton w-[236px] h-[360px] rounded-[16px] flex-shrink-0 bg-gray-300" />

      {/* Контент */}
      <div className="flex flex-col justify-between h-[360px] flex-1">
        {/* Ім’я */}
        <div className="skeleton h-6 w-[60%] rounded mb-[20px] bg-gray-400" />

        {/* Verified */}
        <div className="flex gap-[7px] mb-[23px] items-center">
          <div className="skeleton w-[17px] h-[17px] rounded-full bg-gray-300" />
          <div className="skeleton w-[120px] h-[16px] rounded bg-gray-300" />
        </div>

        {/* Досвід */}
        <div className="skeleton h-[16px] w-[180px] rounded mb-[32px] bg-gray-300" />

        {/* Опис */}
        <div className="space-y-2">
          <div className="skeleton h-[14px] w-full rounded bg-gray-300" />
          <div className="skeleton h-[14px] w-[90%] rounded bg-gray-300" />
          <div className="skeleton h-[14px] w-[75%] rounded bg-gray-300" />
        </div>

        {/* Кнопка */}
        <div className="skeleton w-[200px] h-[40px] rounded-[16px] mt-auto bg-gray-300" />
      </div>
    </div>
  );
};

export default SpecialistCardSkeleton;
