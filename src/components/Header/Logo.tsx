export const Logo = () => {
  return (
    <a href="#" className="flex items-end gap-1 ">
      <span className="text-fire font-bold text-lg  relative top-1">PETS</span>
      {/* <img src="/icons.svg#icon-logo" alt="PetsHelp" className="h-8 w-auto" /> */}
      <svg className="w-[60px] h-[40px] fill-fire ">
        <use href="/icons.svg#icon-logo" />
      </svg>
      <span className="text-fire font-bold text-lg relative top-1">HELP</span>
    </a>
  );
};
