import { Dispatch } from '../index';
// Interfaces
import { Wheather } from '@/services/Weather/interfaces';
// Service
import WeatherAPI from '@/services/Weather';
import GeoAPI from '@/services/Geolocation';
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

export const thunkGetInitialWeather = async (dispatch: Dispatch) => {
  dispatch(getWeather());
  try {
    let weather: Wheather;
    const coords = await GeoAPI.getGeolocation();

    if (coords) {
      const { latitude, longitude } = coords;
      weather = await WeatherAPI.getForecastFromCoords(latitude, longitude);
      return dispatch(setWeather(weather));
    }

    weather = await WeatherAPI.getForecastFromCity('London');
    return dispatch(setWeather(weather));
  } catch (error) {
    console.log(error);
  }
};
