const SpecialistInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-[272px] h-[364px] mb-[30px] ">
        <img
          // src="/public/booking-img/default-specialist-avatar.png"
          src="/public/booking-img/ihor-lytvyn.jpg"
          alt="Specailist's picture"
          className=" rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mb-[30px] ">
        <div className="flex gap-3 ">
          <p className="text-xl font-semibold text-fire">Ігор Литвин</p>
          <svg className="w-5 h-5 fill-fire">
            <use href="/icons.svg#icon-verified" />
          </svg>
        </div>
        <p>На сайті з 09.04.2022</p>
        <p className="text-mineShaft">
          <span className="font-semibold">Досвід:</span>
          {''}3 роки
        </p>
      </div>
    </div>
  );
};

export default SpecialistInfo;
