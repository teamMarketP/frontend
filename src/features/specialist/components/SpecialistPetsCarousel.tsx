import { FC } from 'react';
import { SpecialistMock } from '../types';
// import { Link } from 'react-router-dom';

interface Props {
  images: SpecialistMock;
}

export const SpecialistPetsCarousel: FC<Props> = ({ images }) => {
  const {  petsPhotos } = images;

  return  (
    <div
    // ref={scrollRef}
    className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-10 py-2"
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
  );

};