import styled, { keyframes, Keyframes } from 'styled-components';

interface LoaderStyledProps {
  size: string;
}

const rotation: Keyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseLoader = styled.span<LoaderStyledProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 5px solid var(--yellow);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
