export interface ICityInfo {
  city: string;
  zipcode: number;
  state: string;
  latitude: string;
  longitude: string;
}

export interface IInfoStoreState {
  cityInfo: ICityInfo | null;
}
