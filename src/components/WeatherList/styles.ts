import styled from 'styled-components';

export const List = styled.ul`
  --column-size: calc(
    (100% - (var(--space-between-column) * (var(--columns) - 1))) /
      var(--columns)
  );
  gap: var(--space-between-column);
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--column-size));
  --columns: 2;
  --space-between-column: 2rem;

  @media only screen and (min-width: 1280px) {
    --columns: 3;
    --space-between-column: 2rem;
  }
`;
