const SpecialistCardSkeleton = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div
      className="w-[500px] h-[400px] bg-alabaster rounded-[16px] shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)] p-5 gap-[24px] flex overflow-hidden animate-pulse"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Зображення */}
      <div className="w-[236px] h-[360px] bg-gray-300 rounded-[16px] flex-shrink-0" />

      {/* Контент */}
      <div className="flex flex-col h-[360px] flex-1">
        {/* Ім’я */}
        <div className="h-6 w-[60%] bg-gray-400 rounded mb-[20px]" />

        {/* Verified */}
        <div className="flex gap-[7px] mb-[23px] items-center">
          <div className="w-[17px] h-[17px] bg-gray-300 rounded-full" />
          <div className="w-[120px] h-[16px] bg-gray-300 rounded" />
        </div>

        {/* Досвід */}
        <div className="h-[16px] w-[180px] bg-gray-300 rounded mb-[32px]" />

        {/* Опис */}
        <div className="space-y-2">
          <div className="h-[14px] w-full bg-gray-300 rounded" />
          <div className="h-[14px] w-[90%] bg-gray-300 rounded" />
          <div className="h-[14px] w-[75%] bg-gray-300 rounded" />
        </div>

        {/* Кнопка */}
        <div className="w-[200px] h-[40px] bg-gray-300 rounded-[16px] mt-auto" />
      </div>
    </div>
  );
};

export default SpecialistCardSkeleton;
