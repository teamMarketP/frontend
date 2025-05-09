import { LocationOptions } from '@/features/booking/types';
import { BookingContext } from './BookingContext';
import { ReactNode, useState } from 'react';

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLocationOption, setSelectedLocationOption] =
    useState<LocationOptions>('customer');
  return (
    <BookingContext.Provider
      value={{ selectedLocationOption, setSelectedLocationOption }}
    >
      {children}
    </BookingContext.Provider>
  );
};
