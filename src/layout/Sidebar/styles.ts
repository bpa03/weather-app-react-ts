import styled from 'styled-components';

interface RowStyledProps {
  justifyContent?: 'space-between' | 'center' | 'space-around';
  direction?: 'column' | 'row';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  gap?: string;
}

export const Aside = styled.aside`
  background-color: var(--sidebar-bg-color);
  /* padding: 2.556rem 2.333rem; */
  padding: 1rem .61rem 2.556rem 1rem;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1280px) {
    min-height: 100vh;
    width: 100vw;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
  width: auto;
`;

export const Row = styled.div<RowStyledProps>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : '')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : '')};
  flex-direction: ${({ direction }) => (direction ? direction : '')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ''};
`;

export const SidebarImage = styled.img`
  width: 11.22rem;
  height: 10.5rem;
  object-fit: contain;
  margin: 0 2rem 0 0;
`;

export const Indicator = styled.span`
  font-size: 8rem;
  font-weight: 500;
  color: var(--button-text-color);
`;

export const Unit = styled.span`
  font-weight: 100;
  color: var(--unit-text-color);
  font-size: 2.6667rem;
`;

export const Condition = styled.span`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  color: var(--unit-text-color);
`;

export const Date = styled.span`
  color: var(--location-text-color);
  font-weight: 500;
  font-size: 1rem;
`;

export const Location = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: var(--location-text-color);
  display: flex;
  align-items: center;
  gap: .333rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
