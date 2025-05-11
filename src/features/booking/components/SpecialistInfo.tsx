const SpecialistInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-[272px] h-[364px] mb-6 ">
        <img
          // src="/booking-img/default-specialist-avatar.png"
          src="/booking-img/ihor-lytvyn.jpg"
          alt="Фото Ігора Литвина"
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mb-6 ">
        <div className="flex gap-3 items-center ">
          <p className="text-xl font-semibold text-fire">Ігор Литвин</p>
          <svg className="w-5 h-5 fill-fire" aria-label="Верифікований">
            <use href="/icons.svg#icon-verified" />
          </svg>
        </div>
        <p>На сайті з 09.04.2022</p>
        <p className="text-mineShaft">
          <span className="font-semibold">Досвід:</span> 3 роки
        </p>
      </div>
    </div>
  );
};

export default SpecialistInfo;
