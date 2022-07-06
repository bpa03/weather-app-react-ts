import { FC, useState } from 'react';
// Components
import Searcher from '@/components/Searcher';
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
  const [open, setOpen] = useState(false);
  const { weather, loading } = store;

  const { location, current } = weather;

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <Aside>
      <Searcher
        isOpen={open}
        closeMenu={closeMenu}
      />
      <Image src={bgImage} />
      <Container>
        <SidebarHeader openMenu={openMenu} />
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
