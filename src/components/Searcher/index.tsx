import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { MdClose } from 'react-icons/all';
// Store and Dispatch
import { useStore, useDispatch } from '@/context';
// Thunk action creators
import { thunkGetWeather } from '@/context/weather/weather.thunk';
// Interfaces
import { Search } from '@/services/Weather/interfaces';
// Services
import WeatherAPI from '@/services/Weather';
//Components
import Button from '@/components/Button';
import Loader from '../Loader';

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
  SearcherListItem,
} from './styles';

interface SearcherProps {
  isOpen: boolean;
  closeMenu: VoidFunction;
}

const Searcher: FC<SearcherProps> = ({ isOpen, closeMenu }) => {
  const dispatch = useDispatch();
  const { weather } = useStore();
  const [input, setInput] = useState<string>('');
  const [{ loading, data }, setValues] = useState<{
    loading: boolean;
    data: Search[];
  }>({
    data: [],
    loading: false,
  });

  const handleSetWeatherClick = (city: string) => {
    if (weather.location.name && city === weather.location.name) return;
    closeMenu();

    thunkGetWeather(dispatch, city);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '') return;
    setValues((prev) => ({ ...prev, loading: true }));
    try {
      const response = await WeatherAPI.getCityFromSearch(input);
      setValues((prev) => ({ ...prev, loading: false, data: response }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setInput(target.value);
  };

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
        <SearcherForm onSubmit={handleSubmit}>
          <SearcherFormGroup>
            <SearcherInputIcon size={17} />
            <SearcherInput
              onChange={handleChange}
              value={input}
              type="text"
              placeholder="Search Location"
            />
          </SearcherFormGroup>
          <SearcherButton>Search</SearcherButton>
        </SearcherForm>
      </SearcherWrapperForm>
      <SearcherList>
        {loading && <Loader size="4rem" />}
        {!loading &&
          !!data.length &&
          data.map(({ name, id }) => (
            <SearcherListItem
              key={id}
              onClick={() => handleSetWeatherClick(name)}
            >
              {name}
            </SearcherListItem>
          ))}
      </SearcherList>
    </Container>
  );
};

export default Searcher;
