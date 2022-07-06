import { FC } from 'react';
// Components
import WeatherList from '@/components/WeatherList';
import HightlightList from '@/components/HightlightList';
import Loader from '@/components/Loader';
// Hooks
import { useStore } from '@/context';
// Styles
import { Container } from './styles';

const Dashboard: FC = () => {
  const store = useStore();
  const { loading, weather } = store;
  const { forecast, current } = weather;

  return (
    <Container>
      {!loading && Object.keys(weather).length ? (
        <>
          <WeatherList forecast={forecast.forecastday} />
          <HightlightList current={current} />
        </>
      ) : (
        <Loader size="5rem" />
      )}
    </Container>
  );
};

export default Dashboard;
