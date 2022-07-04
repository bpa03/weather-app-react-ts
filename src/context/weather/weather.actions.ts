import { Wheather } from '@/services/Weather/interfaces';
import { WeatherTypes } from './weather.types';

export type WeatherAction =
  | { type: WeatherTypes.SET_WEATHER; payload: Wheather }
  | { type: WeatherTypes.GET_WEATHER };

export const getWeather = (): WeatherAction => ({
  type: WeatherTypes.GET_WEATHER,
});

export const setWeather = (payload: Wheather): WeatherAction => ({
  type: WeatherTypes.SET_WEATHER,
  payload,
});
