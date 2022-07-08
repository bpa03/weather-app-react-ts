import styled from 'styled-components';

export const Item = styled.li`
  background-color: var(--sidebar-bg-color);
  font-size: 0.889rem;
  font-weight: 500;
  padding: 1rem 1.2rem;
  border-radius: 3px;
`;

export const Date = styled.p`
  color: var(--button-text-color);
  text-align: center;
`;

export const WeatherCardImageWrapper = styled.div`
  text-align: center;
  margin-top: .5556rem;
  margin-bottom: 1.7222rem;
`;

export const WeatherCardImage = styled.img`
  width: 3rem;
  margin: 0 auto;
`;

export const WeatherCardTemperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Min = styled.span`
  color: var(--unit-text-color);
`;
export const Max = styled.span`
  color: var(--button-text-color);
`;
