import { Dispatch } from '../index';
// Service
import WeatherAPI from '@/services/Weather';
// Action creators
import { getWeather, setWeather } from './weather.actions';

export const thunkGetWeather = async (dispatch: Dispatch, city: string) => {
  dispatch(getWeather());
  try {
    const response = await WeatherAPI.getForecastFromCity(city);
    dispatch(setWeather(response));
  } catch (error) {
    console.log(error);
  }
};
