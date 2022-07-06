import { FC } from 'react';
import { Forecastday } from '@/services/Weather/interfaces';
// Components
import WeatherCard from '../WeatherCard';
// Styles
import { List } from './styles';

interface WeatherListProps {
  forecast: Array<Forecastday>;
}

const WeatherList: FC<WeatherListProps> = ({ forecast }) => (
  <List>
    {forecast.map(({ date_epoch, day, date }) => (
      <WeatherCard
        key={date_epoch}
        date={date}
        day={day}
      />
    ))}
  </List>
);

export default WeatherList;
