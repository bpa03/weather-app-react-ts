import { FC } from 'react';
// Components
import WeatherList from '@/components/WeatherList';
import HightlightList from '@/components/HightlightList';
// Hooks
import { useStore } from '@/context';
// Styles
import { Container } from './styles';

const Dashboard: FC = () => {
  const store = useStore();
  const { loading, weather } = store;
  const { forecast } = weather;

  return (
    <Container>
      {!loading && Object.keys(weather).length && (
        <>
          <WeatherList forecast={forecast.forecastday} />
          <HightlightList />
        </>
      )}
    </Container>
  );
};

export default Dashboard;
