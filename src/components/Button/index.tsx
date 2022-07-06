import { FC, ReactNode, MouseEventHandler } from 'react';

type MouseEvent = MouseEventHandler<HTMLButtonElement>;

interface ButtonProps {
  type?: 'normal' | 'icon' | null;
  children: ReactNode | string;
  className?: string;
  handleClick?: MouseEvent
}

// Styles
import { Base } from './styles';

const Button: FC<ButtonProps> = ({ type, children, className, handleClick }) => {
  const buttonType = type ?? 'normal';

  return (
    <Base
      buttonType={buttonType}
      className={className ? className : ''}
      onClick={handleClick}
    >
      {children}
    </Base>
  );
};

Button.defaultProps = {
  type: 'normal',
};

export default Button;
