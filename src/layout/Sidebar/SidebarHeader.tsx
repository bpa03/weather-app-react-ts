import { FC, MouseEventHandler } from 'react';
import { BiCurrentLocation } from 'react-icons/all';
// Store and Dispatch
import { useDispatch, useStore } from '@/context';
// Thunks
import { thunkGetInitialWeather } from '@/context/weather/weather.thunk';
// Components
import Button from '@/components/Button';

// Styles
import { Row } from './styles';

interface SidebarHeaderProps {
  openMenu: VoidFunction;
}

const SidebarHeader: FC<SidebarHeaderProps> = ({ openMenu }) => {
  const dispatch = useDispatch();
  const { loading } = useStore();

  const handleClick = () => {
    if (loading) return;
    thunkGetInitialWeather(dispatch);
  };

  return (
    <Row justifyContent="space-between">
      <Button handleClick={openMenu}>Search for places</Button>
      <Button
        type="icon"
        handleClick={handleClick}
      >
        <BiCurrentLocation
          title="Current Location"
          size={22}
        />
      </Button>
    </Row>
  );
};

export default SidebarHeader;
