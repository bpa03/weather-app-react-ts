import styled from 'styled-components';
import Button from '../Button';

export const HightlightCardBase = styled.li`
  padding: 1.222rem 0 1.7556rem 0;
  background-color: var(--sidebar-bg-color);
  border-radius: 2px;
`;

export const HightlightCardTitle = styled.h5`
  font-size: .8889rem;
  font-weight: 500;
  text-align: center;
  color: var(--button-text-color);
`;

export const HightlightCardBody = styled.div`
  text-align: center;
  color: var(--button-text-color);
`;

export const HightlightCardValue = styled.span`
  font-weight: 700;
  font-size: 3.5556rem;
  margin-inline-end: .5rem;
`;

export const HightlightCardUnit = styled.span`
  font-weight: 500;
  font-size: 2rem;
`;

export const HightlightCardHumidityIndicator = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: var(--button-text-color);
  height: 8px;
  margin-top: 1rem;
  border-radius: 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    border-radius: 8px;
    top: 0;
    left: 0;
    height: 8px;
    width: 84%;
    background: var(--yellow);    
  }
  
  &::after {
    content: '%';
    top: .666rem;
    left: 0;
    position: absolute;
    font-weight: 700;
    font-size: .666rem;
  }
`;

export const HightlightCardIcon = styled(Button)`
  margin: .5rem auto 0 auto;
`;
