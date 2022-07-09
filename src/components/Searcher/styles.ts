import styled from 'styled-components';
import { HiSearch } from 'react-icons/all';

interface StyledContainerProps {
  open: boolean;
}

export const Container = styled.div<StyledContainerProps>`
  min-height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  padding: 2.556rem 2.333rem;
  width: 100%;
  background-color: var(--sidebar-bg-color);
  z-index: 1;
  position: absolute;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s ease;
  left: 0;
  top: 0;
`;

export const SearcherCloseMenu = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const SearcherWrapperForm = styled.div`
  margin-top: 1rem;
`;

export const SearcherForm = styled.form`
  --columns: 2;
  --space-between-columns: 12px;
  --first-column-size: 73.22%;
  --second-column-size: 23.49%;
  display: grid;
  grid-template-columns: repeat(
    var(--columns),
    var(--first-column-size) var(--second-column-size)
  );
  gap: var(--space-between-columns);
`;

export const SearcherFormGroup = styled.div`
  position: relative;
`;

export const SearcherInput = styled.input`
  width: 100%;
  color: var(--button-text-color);
  padding: 0.81rem 0.81rem 0.81rem 2.5rem;
  border: 1px solid var(--button-text-color);
  font-weight: 500;

  &::placeholder {
    color: var(--input-color);
    font-weight: 500;
  }
`;

export const SearcherInputIcon = styled(HiSearch)`
  color: var(--input-color);
  position: absolute;
  left: 1.4rem;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SearcherButton = styled.button`
  font-weight: 600;
  font-size: 0.8889rem;
  background-color: rgba(60, 71, 233, 1);
  color: var(--button-text-color);
`;

export const SearcherList = styled.ul`
  margin-top: 2rem;
`;

export const SearcherListItem = styled.li`
  padding: 1.17778rem 0.666rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--button-text-color);
  border: 1px solid transparent;
  transition: border 0.3s;

  &:hover {
    border: 1px solid var(--input-color);
  }

  &::selection {
    background-color: transparent;
  }
`;
