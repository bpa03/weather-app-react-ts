import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--dashboard-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.556rem 2rem;
  min-height: 100vh;

  @media only screen and (min-width: 1280px) {
    padding: 2.556rem 6rem;
    min-height: auto;
  }
`;
