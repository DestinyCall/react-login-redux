import axios, { AxiosResponse } from 'axios';
import { IGlobalState } from 'redux/states/global.state';

export class AppService {
  private static _instance: AppService;
  private _uri = process.env.REACT_APP_API_BASE_URI;

  constructor() {
    if (AppService._instance) {
      return AppService._instance;
    } else {
      AppService._instance = this;
    }
  }

  public static get Instance() {
    return this._instance;
  }

  getReduxState() {
    let rState = localStorage.getItem('rState');
    if (rState) return JSON.parse(rState);
    else return null;
  }

  saveReduxState(state: IGlobalState) {
    localStorage.setItem('rState', JSON.stringify(state));
  }

  merchantLogin(
    countryDialCode: string,
    phone: string,
    password: string
  ): Promise<AxiosResponse> {
    let reqBody = {};
    reqBody = {
      countryDialCode,
      phone,
      password,
    };
    return axios.post(`${this._uri}/merchants/login`, reqBody);
    
  }
}
