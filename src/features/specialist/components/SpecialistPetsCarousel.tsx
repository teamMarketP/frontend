import { SpecialistMock } from '../types';
import { useRef, useEffect } from "react";

interface Props {
  images: SpecialistMock;
}

export const SpecialistPetsCarousel= ({ images }: Props) => {
  const {  petsPhotos, iconLeft, iconRight } = images;
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

    // Горизонтальна прокрутка колесом мишки
    useEffect(() => {
      const scrollContainer = scrollRef.current;
  
      if (!scrollContainer) return;
  
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        scrollContainer.scrollBy({
          left: e.deltaY * 10,
        });
      };
  
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
  
      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }, []);

    if (!petsPhotos || petsPhotos.length === 0) return null;

return (
  <section className="section">
    <div className="container">
      <h2 className="text-center text-xl font-semibold uppercase text-fire mb-10">
        Задоволені улюбленці
      </h2>

      <div className="relative fill-fire">
        {/* Кнопка вліво */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll("left")}
          aria-label="Прокрутити вліво"
        >
          <svg width="24" height="26">
            <use href={`/icons.svg#${iconLeft}`} />
          </svg>
        </button>

        {/* Слайдер */}
        <div
    ref={scrollRef}
    className="flex gap-[32px] overflow-x-auto scroll-smooth no-scrollbar max-w-[980px] mx-auto"
  >
    {petsPhotos.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Pet ${index + 1}`}
        className="w-55 h-55 object-cover rounded-xl shrink-0"
        width={220}
        height={220}
      />
    ))}
  </div>

        {/* Кнопка вправо */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll("right")}
          aria-label="Прокрутити вправо"
        >
          <svg width="24" height="26">
          <use href={`/icons.svg#${iconRight}`} />
          </svg>
        </button>
      </div>
    </div>
  </section>
);
}