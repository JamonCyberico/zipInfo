export interface ICityInfo {
  city: string;
  zipcode: number;
  state: string;
  latitude: string;
  longitude: string;
}

export interface ICurrentWeather {
  temperature: number;
  is_day: boolean;
  windspeed: number;
  time: string;
  winddirection: string;
  weathercode: number;
}

export interface IHourlyWeather {
  temperature_2m: number;
  relativehumidity_2m: number;
  windspeed_10m: number;
}

export interface IWeatherInfo {
  current_weather: ICurrentWeather;
  elevation: number;
  generationtime_ms: number;
  hourly: IHourlyWeather[];
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface IInfoStoreState {
  cityInfo: ICityInfo | null;
  weatherInfo: any | null;
}
