import { FC } from 'react';
import { BiCurrentLocation } from 'react-icons/all';
import Button from '@/components/Button';

// Styles
import { Row } from './styles';

const SidebarHeader: FC = () => (
  <Row justifyContent="space-between">
    <Button>Search for places</Button>
    <Button type="icon">
      <BiCurrentLocation
        title="Current Location"
        size={22}
      />
    </Button>
  </Row>
);

export default SidebarHeader;
