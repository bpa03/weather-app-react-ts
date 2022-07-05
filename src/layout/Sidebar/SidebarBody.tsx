import { FC } from 'react';
import { TiLocation } from 'react-icons/all';
// Interfaces
import {
  Location as LocationType,
  Current as CurrentType,
} from '@/services/Weather/interfaces';
// Assets
import clearImage from 'assets/Clear.png';
// Styles
import {
  Row,
  SidebarImage,
  Indicator,
  Unit,
  Condition,
  Date,
  Location,
} from './styles';
// Format date
import { formatDate } from '@/lib/formatDate';

interface SidebarBodyProps {
  current: CurrentType;
  location: LocationType;
}

const SidebarBody: FC<SidebarBodyProps> = ({ current, location }) => {
  const { tz_id, localtime } = location;
  const { temp_c, condition } = current;
  const { text } = condition;

  const date = formatDate(localtime);
  const city = tz_id.split('/')[1];

  return (
    <>
      <Row justifyContent="center">
        <SidebarImage
          src={clearImage}
          alt="sidebar-image.png"
        />
      </Row>
      <Row justifyContent="center">
        <div>
          <Indicator>{temp_c}</Indicator>
          <Unit>℃</Unit>
        </div>
      </Row>
      <Row justifyContent="center">
        <Condition>{text}</Condition>
      </Row>
      <Row
        justifyContent="center"
        direction="column"
        gap="32px"
        alignItems="center"
      >
        <Date>Today • {date}</Date>
        <Location>
          <TiLocation size={22} />
          {city}
        </Location>
      </Row>
    </>
  );
};

export default SidebarBody;
