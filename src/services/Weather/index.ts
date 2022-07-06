import ServiceBase from '../Base';
import { Search, Wheather } from './interfaces';

class WeatherAPI extends ServiceBase {
  declare forecast: string;
  declare search: string;

  constructor() {
    super();
    this.forecast = '/forecast.json';
    this.search = '/search.json';
  }

  async getForecastFromCity(city: string): Promise<Wheather> {
    const url = this.API_URL + this.forecast;
    const key = '?key=' + this.API_KEY;
    const cityParameter = '&q=' + city;
    const daysParameter = '&days=7';
    const formatedUrl = url + key + cityParameter + daysParameter;
    const request: Request = new Request(formatedUrl, {
      method: 'GET',
      mode: 'cors',
    });
    const response = await fetch(request);
    const data: Wheather = await response.json();

    return response.ok && data ? data : Promise.reject(data);
  }

  async getForecastFromCoords(latitude: number, longitude: number) {
    const url = this.API_URL + this.forecast;
    const key = '?key=' + this.API_KEY;
    const coordsParameter = '&q=' + latitude + ',' + longitude;
    const daysParameter = '&days=7';
    const formatedUrl = url + key + coordsParameter + daysParameter;
    const request: Request = new Request(formatedUrl, {
      method: 'GET',
      mode: 'cors',
    });
    const response = await fetch(request);
    const data: Wheather = await response.json();

    return response.ok && data ? data : Promise.reject(data);
  }

  async getCityFromSearch(input: string) {
    const url = this.API_URL + this.forecast;
    const key = '?key=' + this.API_KEY;
    const search = '&q=' + input;
    const formatedUrl = url + key + search;
    const request: Request = new Request(formatedUrl, {
      method: 'GET',
      mode: 'cors',
    });
    const response = await fetch(request);
    const data: Search[] = await response.json();
    return response.ok && data ? data : Promise.reject(data);
  }
}

export default new WeatherAPI();
