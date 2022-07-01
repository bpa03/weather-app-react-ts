export interface Base {
  readonly API_URL: string;
  readonly API_KEY: string;
}

class ServiceBase implements Base {
  declare API_URL: string;
  declare API_KEY: string;

  constructor() {
    this.API_URL = import.meta.env.APP_API;
    this.API_KEY = import.meta.env.APP_API_KEY;   
  }
}

export default ServiceBase;
