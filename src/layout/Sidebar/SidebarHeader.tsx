import { FC, MouseEventHandler } from 'react';
import { BiCurrentLocation } from 'react-icons/all';
import Button from '@/components/Button';

// Styles
import { Row } from './styles';

interface SidebarHeaderProps {
  openMenu: VoidFunction;
}

const SidebarHeader: FC<SidebarHeaderProps> = ({ openMenu }) => (
  <Row justifyContent="space-between">
    <Button handleClick={openMenu}>Search for places</Button>
    <Button type="icon">
      <BiCurrentLocation
        title="Current Location"
        size={22}
      />
    </Button>
  </Row>
);

export default SidebarHeader;
