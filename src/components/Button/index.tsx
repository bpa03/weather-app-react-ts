import { FC, ReactNode } from 'react';

interface ButtonProps {
  type?: 'normal' | 'icon' | null;
  children: ReactNode | string;
  className?: string;
}

// Styles
import { Base } from './styles';

const Button: FC<ButtonProps> = ({ type, children, className }) => {
  const buttonType = type ?? 'normal';

  return (
    <Base
      buttonType={buttonType}
      className={className ? className : ''}
    >
      {children}
    </Base>
  );
};

Button.defaultProps = {
  type: 'normal',
};

export default Button;
