import { CSSProperties, FC, forwardRef } from 'react';
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
  styles?: CSSProperties;
}

const HightlightCard = forwardRef<HTMLLIElement, HightlightCardProps>(
  ({ title, value, unit, styles }, ref) => {
    return (
      <HightlightCardBase
        ref={ref}
        style={styles ? styles : {}}
      >
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
  }
);

export default HightlightCard;
