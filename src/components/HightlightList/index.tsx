import { FC, useMemo } from 'react';
// Interfaces
import { Current } from '@/services/Weather/interfaces';
// components
import HightlightCard from '../HightlightCard';

// Styles
import { List, ListTitle } from './styles';

interface HightlightListProps {
  current: Current;
}

const HightlightList: FC<HightlightListProps> = ({ current }) => {
  const data = useMemo(
    () => ({
      humidity: current.humidity,
      wind: current.wind_mph,
      visibility: current.vis_miles,
      airPressure: current.pressure_mb,
    }),
    [current]
  );
  
  return (
    <div>
      <ListTitle>Today’s Hightlights </ListTitle>
      <List>
        <HightlightCard
          title="Wind status"
          value={data.wind}
          unit="mph"
        />
        <HightlightCard
          title="Humidity"
          value={data.humidity}
          unit="%"
        />
        <HightlightCard
          title="Visibility"
          value={data.visibility}
          unit="miles"
        />
        <HightlightCard
          title="Air Pressure"
          value={data.airPressure}
          unit="mb"
        />
      </List>
    </div>
  );
};

export default HightlightList;
