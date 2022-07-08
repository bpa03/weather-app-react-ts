import { FC, useRef, useMemo, useEffect, memo, CSSProperties } from 'react';
import gsap from 'gsap';
// Interfaces
import { Forecastday } from '@/services/Weather/interfaces';
// Components
import WeatherCard from '../WeatherCard';
// Styles
import { List } from './styles';

interface WeatherListProps {
  forecast: Array<Forecastday>;
}

const WeatherList: FC<WeatherListProps> = ({ forecast }) => {
  const tl = useMemo(() => gsap.timeline(), []);
  const cardRefs = useRef<HTMLLIElement[]>([]);

  const addRef = (ref: HTMLLIElement) => ref && cardRefs.current.push(ref);

  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      tl.fromTo(
        ref,
        { opacity: 0, translateY: -40 },
        { opacity: 1, translateY: 0 }
      );
    });

    tl.delay(0.5);
  }, []);

  return (
    <List>
      {forecast.map(({ date_epoch, day, date }) => (
        <WeatherCard
          key={date_epoch}
          date={date}
          day={day}
          ref={addRef}
          styles={{ opacity: 0 }}
        />
      ))}
    </List>
  );
};

export default memo(WeatherList);
