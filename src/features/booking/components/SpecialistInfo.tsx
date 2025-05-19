import mockProfileData from '@/data/__mocks__/mockProfileData';

const SpecialistInfo = () => {
  const { avatar, name, joinDate, experience } = mockProfileData;

  return (
    <div>
      <div className="flex items-center justify-center w-[272px] h-[364px] mb-6 rounded-2xl overflow-hidden">
        <img
          src={avatar || '/booking-img/default-specialist-avatar.png'}
          alt={`Фото ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mb-5">
        <div className="flex gap-3 items-center">
          <p className="text-xl font-semibold text-fire">{name}</p>
          <svg className="w-5 h-5 fill-fire" role="img">
            <title>Верифікований фахівець</title>
            <use href="/icons.svg#icon-verified" />
          </svg>
        </div>
        <p>На сайті з {joinDate}</p>
        <p className="text-mineShaft">
          <span className="font-semibold">Досвід:</span> {experience}
        </p>
      </div>
      <div className="border border-fire rounded-2xl mb-5"></div>
    </div>
  );
};

export default SpecialistInfo;
