interface SpecialistCardSkeletonProps {
  delay?: number;
}

function SpecialistCardSkeleton({ delay = 0 }: SpecialistCardSkeletonProps) {
  return (
    <div
      className="w-[500px] h-[400px] rounded-xl p-5 gap-6 flex overflow-hidden animate-pulse transition-all duration-300 ease-in-out shadow-[0_1px_4px_4px_rgba(0,0,0,0.15)] bg-alabaster"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Зображення */}
      <div className="w-[236px] h-[360px] rounded-xl flex-shrink-0 bg-hot-cinnamon-500/30" />

      {/* Контент */}
      <div className="flex flex-col justify-between h-[360px] flex-1">
        {/* Ім’я */}
        <div className="h-6 w-[60%] rounded mb-5 bg-hot-cinnamon-500/40" />

        {/* Verified */}
        <div className="flex gap-[7px] mb-6 items-center">
          <div className="w-[17px] h-[17px] rounded-full bg-hot-cinnamon-500/30" />
          <div className="w-[120px] h-[16px] rounded bg-hot-cinnamon-500/30" />
        </div>

        {/* Досвід */}
        <div className="h-[16px] w-[180px] rounded mb-8 bg-hot-cinnamon-500/30" />

        {/* Опис */}
        <div className="space-y-2">
          <div className="h-[14px] w-full rounded bg-hot-cinnamon-500/30" />
          <div className="h-[14px] w-[90%] rounded bg-hot-cinnamon-500/30" />
          <div className="h-[14px] w-[75%] rounded bg-hot-cinnamon-500/30" />
        </div>

        {/* Кнопка */}
        <div className="w-[200px] h-[40px] rounded-xl mt-auto bg-hot-cinnamon-500/40" />
      </div>
    </div>
  );
}

export default SpecialistCardSkeleton;
