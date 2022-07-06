import { FC } from 'react';
import { MdClose } from 'react-icons/all';
//Components
import Button from '@/components/Button';

// Styles
import {
  Container,
  SearcherCloseMenu,
  SearcherWrapperForm,
  SearcherForm,
  SearcherInput,
  SearcherFormGroup,
  SearcherButton,
  SearcherInputIcon,
  SearcherList,
  SearcherListItem
} from './styles';

interface SearcherProps {
  isOpen: boolean;
  closeMenu: VoidFunction;
}

const Searcher: FC<SearcherProps> = ({ isOpen, closeMenu }) => {
  return (
    <Container open={isOpen}>
      <SearcherCloseMenu>
        <Button
          type="icon"
          handleClick={closeMenu}
        >
          <MdClose
            size={22}
            title="Close menu"
          />
        </Button>
      </SearcherCloseMenu>
      <SearcherWrapperForm>
        <SearcherForm>
          <SearcherFormGroup>
            <SearcherInputIcon size={17} />
            <SearcherInput
              type="text"
              placeholder="Search Location"
            />
          </SearcherFormGroup>
          <SearcherButton>Search</SearcherButton>
        </SearcherForm>
      </SearcherWrapperForm>
      <SearcherList>
        <SearcherListItem>London</SearcherListItem>
      </SearcherList>
    </Container>
  );
};

export default Searcher;
