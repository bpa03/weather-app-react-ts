import { FC } from 'react';
// Interfaces
import { Day } from '@/services/Weather/interfaces';
// Assets
import clearImage from 'assets/Shower.png';
import { formatDate } from '@/lib/formatDate';
// Styles
import {
  Wrapper,
  Date,
  WeatherCardImage,
  WeatherCardImageWrapper,
  WeatherCardTemperature,
  Max,
  Min,
} from './styles';

interface WeatherCardProps {
  day: Day;
  date: Date;
}

const WeatherCard: FC<WeatherCardProps> = ({ day, date }) => {
  const { mintemp_c, maxtemp_c } = day;
  const formatedDate = formatDate(date);

  return (
    <Wrapper>
      <Date>{formatedDate}</Date>
      <WeatherCardImageWrapper>
        <WeatherCardImage
          src={clearImage}
          alt="card-image.png"
        />
      </WeatherCardImageWrapper>
      <WeatherCardTemperature>
        <Max>{maxtemp_c}°C</Max>
        <Min>{mintemp_c}°C</Min>
      </WeatherCardTemperature>
    </Wrapper>
  );
};

export default WeatherCard;
