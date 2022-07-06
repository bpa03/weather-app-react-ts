import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type ButtonTypes = 'normal' | 'icon';
interface StyledProps {
  buttonType: ButtonTypes;
}

type Mapper = {
  [key in ButtonTypes]: FlattenSimpleInterpolation;
};

const ButtonStyles: Mapper = {
  icon: css`
    padding: 0.5rem;
    border-radius: 50%;
    `,
  normal: css`
    padding: 0.556rem 1rem;
    border-radius: 2px;
    font-size: 0.8889rem;
    cursor: pointer;
  `,
};

export const Base = styled.button<StyledProps>`
  ${({ buttonType }) => ButtonStyles[buttonType]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--button-text-color);
  background-color: var(--button-bg-color);
  font-weight: 500;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
