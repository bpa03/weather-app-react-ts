import { FC, useMemo } from 'react';
// Hooks
import { useStore } from '@/context';
// Assets
import bgImage from 'assets/Cloud-background.png';
// Sidebar components
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';

// Styles
import { Aside, Container, Image } from './styles';

const Sidebar: FC = () => {
  const store = useStore();
  const { weather, loading } = store;

  const { location, current } = weather;

  return (
    <Aside>
      <Image src={bgImage} />
      <Container>
        <SidebarHeader />
        {!loading && Object.keys(weather).length && (
          <SidebarBody
            location={location}
            current={current}
          />
        )}
      </Container>
    </Aside>
  );
};

export default Sidebar;
