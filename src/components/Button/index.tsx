import { FC, ReactNode } from 'react';

interface ButtonProps {
  type?: 'normal' | 'icon' | null;
  children: ReactNode | string;
}

// Styles
import { Base } from './styles';

const Button: FC<ButtonProps> = ({ type, children }) => {
  const buttonType = type ?? 'normal';

  return <Base buttonType={buttonType}>{children}</Base>;
};

Button.defaultProps = {
  type: 'normal',
};

export default Button;
