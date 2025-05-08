export type LocationOptions = 'specialist' | 'customer';

export interface BookingLocationState {
  selectedLocationOption: LocationOptions;
  setSelectedLocationOption: React.Dispatch<
    React.SetStateAction<LocationOptions>
  >;
}
