import {
  createContext,
  useReducer,
  useContext,
  FC,
  ReactNode,
  Dispatch as DispatchType,
  ReducerAction,
} from 'react';
import reducer, { State, ReducerType } from '@/context/weather/weather.reducer';

interface ProviderProps {
  children: ReactNode;
}

type Dispatch = DispatchType<ReducerAction<ReducerType>>;
type ContextValue = [State, Dispatch];
const WeatherContext = createContext<ContextValue | null>(null);

const intialState = {
  loading: false,
  error: null,
  weather: {},
} as State;

const WeatherProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<ReducerType, State>(
    reducer,
    intialState,
    (arg) => arg
  );

  return (
    <WeatherContext.Provider value={[state, dispatch]}>
      {children}
    </WeatherContext.Provider>
  );
};

export function useWeatherContext(): ContextValue {
  const context = useContext(WeatherContext);

  if (context === null) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }

  return context;
}

export function useDispatch(): Dispatch {
  const [, dispatch] = useWeatherContext();
  return dispatch;
};

export function useStore(callback?: Function): State {
  const [state] = useWeatherContext();

  return callback instanceof Function ? callback(state) : state;
};


export default WeatherProvider;
