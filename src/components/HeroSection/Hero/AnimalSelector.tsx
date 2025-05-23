// src/components/Hero/AnimalSelector.tsx
import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { setAnimal } from "@/features/hero/heroSlice";
import { selectAnimal } from "@/features/hero/heroSelectors";

const AnimalSelector = () => {
  const dispatch = useAppDispatch();
  const selectedAnimal = useAppSelector(selectAnimal);

  const handleSelect = (animal: "dog" | "cat") => {
    dispatch(setAnimal(animal));
  };

  return (
    <div className="flex justify-center rounded-[12px] bg-wildSand w-1/2 border-[2px] border-tenn">
      {(["dog", "cat"] as const).map((animal) => (
        <button
          key={animal}
          onClick={() => handleSelect(animal)}
          className={`px-4 w-1/2 py-3 font-semibold transition hover:shadow-shark active:shadow-inset-shark ${
            selectedAnimal === animal
              ? `bg-tenn text-alabaster ${animal === "dog" ? "rounded-l-[8px]" : "rounded-r-[8px]"}`
              : "text-fire"
          }`}
        >
          {animal === "dog" ? "Собаки" : "Коти"}
        </button>
      ))}
    </div>
  );
};

export default AnimalSelector;