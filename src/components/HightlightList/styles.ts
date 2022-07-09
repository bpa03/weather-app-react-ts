import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 1280px) {
    margin-top: 2.8333rem;
  }
`;

export const List = styled.ul`
  margin-top: 1.7778rem;
  --column-size: calc(
    (100% - (var(--space-between-column) * (var(--columns) - 1))) /
      var(--columns)
  );
  gap: var(--space-between-column);
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--column-size));
  --columns: 1;
  --space-between-column: 32px;

  @media only screen and (min-width: 1280px) {
    --columns: 2;
    --space-between-column: 45px;
  }
`;

export const ListTitle = styled.h2`
  font-weight: 700;
  font-size: 1.333rem;
  color: var(--button-text-color);
`;
