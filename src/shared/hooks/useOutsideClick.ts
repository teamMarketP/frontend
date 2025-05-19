import { useEffect } from 'react';

export function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleEventOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleEventOutside);
    document.addEventListener('touchstart', handleEventOutside);

    return () => {
      document.removeEventListener('mousedown', handleEventOutside);
      document.removeEventListener('touchstart', handleEventOutside);
    };
  }, [ref, callback]);
}
