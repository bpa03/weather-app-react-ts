import { FC } from 'react';
import { BiTargetLock } from 'react-icons/all';
// Services
import { Current } from '@/services/Weather/interfaces';
// Hooks
import { useStore } from '@/context';
// Generic components
import Button from '@/components/Button';
// Assets
import bgImage from 'assets/Cloud-background.png';

interface SidebarProps {
  current: Current;
}

// Styles
import { Aside, Container, Image } from './styles';

const Sidebar: FC<SidebarProps> = () => {
  const store = useStore();

  const { weather } = store;
  const { location, current } = weather;

  return (
    <Aside>
      <Image src={bgImage} />
      <Container>
        <div>
          <Button>Search for places</Button>
          <Button type="icon">
            <BiTargetLock
              title="Target"
              size={22}
            />
          </Button>
        </div>
      </Container>
    </Aside>
  );
};

export default Sidebar;
