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
}
