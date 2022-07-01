// Layout Components
import Sidebar from '@/layout/Sidebar';
import Dashboard from '@/layout/Dashboard';

// App Styles
import { Wrapper } from '@/AppStyles';
import GlobalStyles from '@/GlobalStyles';

const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Dashboard />
      <GlobalStyles />
    </Wrapper>
  );
};

export default App;
