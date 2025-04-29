import { useState, useRef, useEffect } from "react";

const areas = [
  { label: "Центр", value: "center" },
  { label: "Лівий берег", value: "left-bank" },
  { label: "Правий берег", value: "right-bank" },
];

export default function CustomSelect() {
  const [selected, setSelected] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = areas.find((area) => area.value === selected)?.label || "Обрати район";

  return (
    <div className="relative w-1/2 border-[2px] border-tenn rounded-[12px] hover:shadow-shark" ref={dropdownRef}>
      <button
        type="button"
        className="w-full flex items-center justify-between py-[10px] pr-8 pl-12"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedLabel}
        <svg
          className={`w-4 h-4 transition-transform duration-200 text-tenn ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-100 mt-[16px] w-full border-tenn border-[2px] py-5 px-15 text-shark  bg-alabaster rounded-[12px]">
          {areas.map((area) => (
            <li key={area.value}>
              <a
                onClick={() => handleSelect(area.value)}
                className={`${
                  selected === area.value ? "bg-primary text-white" : ""
                } cursor-pointer`}
              >
                {area.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
