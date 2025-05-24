interface SpecialistCardSkeletonProps {
  delay?: number;
}

function SpecialistCardSkeleton({ delay = 0 }: SpecialistCardSkeletonProps) {
  return (
    <div
      className="w-full max-w-full grid 
      bg-alabaster rounded-2xl shadow-[0_1px_4px_4px_rgba(0,0,0,0.25)]
      p-4 sm:p-5 gap-x-[9px] gap-y-[23px] xl:gap-6
      [grid-template-areas:'photo_text'_'bio_bio']
      xl:[grid-template-areas:'photo_text'_'photo_text']
      [grid-template-columns:minmax(120px,138px)_minmax(0,1fr)]
      xl:[grid-template-columns:236px_minmax(0,1fr)]
      xl:max-w-[500px] animate-pulse transition-all duration-300 ease-in-out"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Фото */}
      <div className="[grid-area:photo] w-[138px] h-[174px] xl:w-[236px] xl:h-[360px] rounded-2xl bg-hot-cinnamon-500/30" />

      {/* Контент */}
      <div className="[grid-area:text] flex flex-col gap-[18px] h-full xl:justify-between min-w-0">
        {/* Ім’я + іконка */}
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="h-6 w-[60%] rounded bg-hot-cinnamon-500/40" />
          <div className="w-[17px] h-[17px] rounded-full bg-hot-cinnamon-500/30" />
        </div>

        {/* Verified бейдж (десктоп) */}
        <div className="hidden xl:flex items-center gap-[7px]">
          <div className="w-[17px] h-[17px] rounded-full bg-hot-cinnamon-500/30" />
          <div className="w-[120px] h-[16px] rounded bg-hot-cinnamon-500/30" />
        </div>

        {/* Досвід */}
        <div className="h-[16px] w-full xl:w-[180px] rounded bg-hot-cinnamon-500/30" />

        {/* Опис для десктопа */}
        <div className="space-y-2 hidden xl:block">
          <div className="h-[14px] w-full rounded bg-hot-cinnamon-500/30" />
          <div className="h-[14px] w-[90%] rounded bg-hot-cinnamon-500/30" />
          <div className="h-[14px] w-[75%] rounded bg-hot-cinnamon-500/30" />
        </div>

        {/* Кнопка */}
        <div className="w-full max-w-[200px] h-[40px] rounded-xl mt-auto bg-hot-cinnamon-500/40" />
      </div>

      {/* Мобільний опис */}
      <div className="[grid-area:bio] xl:hidden space-y-2">
        <div className="h-[14px] w-full rounded bg-hot-cinnamon-500/30" />
        <div className="h-[14px] w-[90%] rounded bg-hot-cinnamon-500/30" />
        <div className="h-[14px] w-[75%] rounded bg-hot-cinnamon-500/30" />
      </div>
    </div>
  );
}

export default SpecialistCardSkeleton;
