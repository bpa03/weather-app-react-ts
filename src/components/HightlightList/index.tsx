import { FC } from 'react';
// components
import HightlightCard from '../HightlightCard';

// Styles
import { List, ListTitle } from './styles';

const HightlightList: FC = () => {
  return (
    <div>
      <ListTitle>Today’s Hightlights </ListTitle>
      <List>
        <HightlightCard
          title="Wind status"
          value={7}
          unit="mph"
        />
        <HightlightCard
          title="Humidity"
          value={84}
          unit="%"
        />
        <HightlightCard
          title="Visibility"
          value={6.4}
          unit="miles"
        />
        <HightlightCard
          title="Air Pressure"
          value={998}
          unit="mb"
        />
      </List>
    </div>
  );
};

export default HightlightList;
