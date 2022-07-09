import { FC, useEffect } from 'react';
// Layout Components
import Sidebar from '@/layout/Sidebar';
import Dashboard from '@/layout/Dashboard';
// Hooks
import { useDispatch } from '@/context';
// Thunks
import { thunkGetInitialWeather } from '@/context/weather/weather.thunk';
// App Styles
import { Wrapper } from '@/AppStyles';
import GlobalStyles from '@/GlobalStyles';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    thunkGetInitialWeather(dispatch);
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <Dashboard />
      <GlobalStyles />
    </Wrapper>
  );
};

export default App;
