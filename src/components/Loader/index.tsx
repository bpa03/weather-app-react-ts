import { FC } from 'react';

// Styles
import { BaseLoader, Wrapper } from './styles';

interface LoaderProps {
  size: string;
}

const Loader: FC<LoaderProps> = ({ size }) => {
  return (
    <Wrapper>
      <BaseLoader size={size} />
    </Wrapper>
  );
};

export default Loader;
