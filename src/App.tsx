import { FC, useEffect } from 'react';
// Layout Components
import Sidebar from '@/layout/Sidebar';
import Dashboard from '@/layout/Dashboard';
// Hooks
import { useDispatch } from '@/context';
// Services
import WeatherAPI from '@/services/Weather';
import GeoAPI from '@/services/Geolocation';
// Action creators
import { getWeather, setWeather } from '@/context/weather/weather.actions';
// App Styles
import { Wrapper } from '@/AppStyles';
import GlobalStyles from '@/GlobalStyles';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const request = async () => {
      dispatch(getWeather());
      try {
        const coords = await GeoAPI.getGeolocation();
        if (coords) {
          const { latitude, longitude } = coords;
          const weather = await WeatherAPI.getForecastFromCoords(
            latitude,
            longitude
          );
          return dispatch(setWeather(weather));
        }
        const weather = await WeatherAPI.getForecastFromCity('London');
        return dispatch(setWeather(weather));
      } catch (err) {
        console.log(err);
      }
    };

    request();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <Dashboard />
      <GlobalStyles />
    </Wrapper>
  );
};

export default App;
