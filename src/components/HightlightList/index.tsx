import { FC, useMemo, useRef, useEffect, memo } from 'react';
import gsap from 'gsap';
// Interfaces
import { Current } from '@/services/Weather/interfaces';
// components
import HightlightCard from '../HightlightCard';
import useArrayRef from '@/hooks/useArrayRef';

// Styles
import { List, ListTitle, Container } from './styles';

interface HightlightListProps {
  current: Current;
}

const HightlightList: FC<HightlightListProps> = ({ current }) => {
  const tl = useMemo(() => gsap.timeline(), []);
  const [cardRefs, addCardRef] = useArrayRef<HTMLLIElement>();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      tl.fromTo(
        ref,
        { opacity: 0, translateY: -10 },
        { opacity: 1, translateY: 0 }
      );
    });

    tl.to(titleRef.current, { translateY: 0 });

    tl.delay(0.2);
  }, []);

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
    <Container>
      <div style={{ overflow: 'hidden' }}>
        <ListTitle
          ref={titleRef}
          style={{ transform: 'translateY(25px)' }}
        >
          Today’s Hightlights{' '}
        </ListTitle>
      </div>
      <List>
        <HightlightCard
          title="Wind status"
          value={data.wind}
          unit="mph"
          ref={addCardRef}
          styles={{ opacity: 0 }}
        />
        <HightlightCard
          title="Humidity"
          value={data.humidity}
          unit="%"
          ref={addCardRef}
          styles={{ opacity: 0 }}
        />
        <HightlightCard
          title="Visibility"
          value={data.visibility}
          unit="miles"
          ref={addCardRef}
          styles={{ opacity: 0 }}
        />
        <HightlightCard
          title="Air Pressure"
          value={data.airPressure}
          unit="mb"
          ref={addCardRef}
          styles={{ opacity: 0 }}
        />
      </List>
    </Container>
  );
};

export default memo(HightlightList);
