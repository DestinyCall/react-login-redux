import { IGlobalState } from 'redux/states/global.state';
import { AppService } from 'services/app.service';

new AppService();

export let initialGlobalState: IGlobalState =
  AppService.Instance.getReduxState() || { merchant: null };
