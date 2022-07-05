import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

// Store
import WeatherProvider from '@/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>
);
