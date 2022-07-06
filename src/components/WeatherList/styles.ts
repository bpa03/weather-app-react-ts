import styled from 'styled-components';

export const List = styled.ul`
  --columns: 3;
  --space-between-column: 2rem;
  --column-size: calc(
    (100% - (var(--space-between-column) * (var(--columns) - 1))) / var(--columns)
  );
  gap: var(--space-between-column);
  display: grid;
  grid-template-columns: repeat(5, var(--column-size));
`;
