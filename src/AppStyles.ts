import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;

  @media only screen and (min-width: 1280px) {
    grid-template-columns: 31.875% 68.125%;
    min-height: max(100vh, 759px);
  }
`;
