const services = [
  { label: 'Вигул', icon: 'icon-dog-on-the-leash' },
  { label: 'Перетримка', icon: 'icon-dog-house' },
  { label: 'Догляд вдома', icon: 'icon-sitting-dog' },
  { label: 'Грумінг', icon: 'icon-scissors' },
];

const ServiceTypeSelector = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
      {services.map(service => (
        <button
          key={service.label}
          className="flex flex-col items-center justify-center gap-2 py-2 px-13 border rounded-[16px] border-fire border-[2px] hover:bg-tenn hover:text-alabaster hover:border-none group"
        >
          
            <svg
              className="h-13 w-12 shrink-0 fill-tenn group-hover:fill-alabaster"
              role="img"
              aria-label={service.label}
            >
              <title>{service.label}</title>
              <use href={`/icons.svg#${service.icon}`} />
            </svg>
          <span>{service.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ServiceTypeSelector;
