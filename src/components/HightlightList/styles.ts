import styled from 'styled-components';

export const List = styled.ul`
  --columns: 2;
  --space-between-column: 45px;
  --column-size: calc(
    (100% - (var(--space-between-column) * (var(--columns) - 1))) /
      var(--columns)
  );
  display: grid;
  grid-template-columns: repeat(var(--columns), var(--column-size));
  gap: var(--space-between-column);
  margin-top: 1.7778rem;
`;

export const ListTitle = styled.h2`
  font-weight: 700;
  font-size: 1.333rem;
  color: var(--button-text-color);
`;
