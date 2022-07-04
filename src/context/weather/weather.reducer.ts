import { Wheather } from '@/services/Weather/interfaces';
import { WeatherAction } from './weather.actions';

export interface State {
  weather: Wheather;
  loading: boolean;
  error: Error | null;
}

export default function weatherReducer(state: State, action: WeatherAction): State {
  switch (action.type) {
    case 'weather/getWeather': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'weather/setWeather': {
      return {
        ...state,
        loading: false,
        weather: action.payload,
      }
    }
    default:
      return state;
  }
}

export type ReducerType = typeof weatherReducer;
