import { FC } from 'react';
import { BiWind } from 'react-icons/all';

// Styles
import {
  HightlightCardTitle,
  HightlightCardBase,
  HightlightCardBody,
  HightlightCardUnit,
  HightlightCardValue,
  HightlightCardHumidityIndicator,
  HightlightCardIcon,
} from './styles';

interface HightlightCardProps {
  title: string;
  value: number;
  unit?: string;
}

const HightlightCard: FC<HightlightCardProps> = ({ title, value, unit }) => {
  return (
    <HightlightCardBase>
      <HightlightCardTitle>{title}</HightlightCardTitle>
      <HightlightCardBody>
        <HightlightCardValue>{value}</HightlightCardValue>
        <HightlightCardUnit>{unit}</HightlightCardUnit>
        {unit === '%' && <HightlightCardHumidityIndicator size={value} />}
        {unit === 'mph' && (
          <HightlightCardIcon type="icon">
            <BiWind
              title="Wind"
              size={22}
            />
          </HightlightCardIcon>
        )}
      </HightlightCardBody>
    </HightlightCardBase>
  );
};

export default HightlightCard;
