import { BookingLocationState } from '@/features/booking/types';
import { createContext } from 'react';

export const BookingContext = createContext<BookingLocationState | undefined>(
  undefined
);
