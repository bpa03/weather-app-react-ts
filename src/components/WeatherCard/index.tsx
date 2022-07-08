import { forwardRef, CSSProperties } from 'react';
// Interfaces
import { Day } from '@/services/Weather/interfaces';
// Assets
import getStateImage from '@/lib/getStateImage';
import { formatDate } from '@/lib/formatDate';
// Styles
import {
  Item,
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
  styles?: CSSProperties;
}

const WeatherCard = forwardRef<HTMLLIElement, WeatherCardProps>(
  ({ day, date, styles }, ref) => {
    const { mintemp_c, maxtemp_c, condition } = day;
    const { code } = condition;
    const formatedDate = formatDate(date);

    return (
      <Item
        ref={ref}
        style={styles ? styles : {}}
      >
        <Date>{formatedDate}</Date>
        <WeatherCardImageWrapper>
          <WeatherCardImage
            src={getStateImage(code)}
            alt="card-image.png"
          />
        </WeatherCardImageWrapper>
        <WeatherCardTemperature>
          <Max>{maxtemp_c}°C</Max>
          <Min>{mintemp_c}°C</Min>
        </WeatherCardTemperature>
      </Item>
    );
  }
);

export default WeatherCard;
