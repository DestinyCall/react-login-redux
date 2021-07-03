import * as globalActions from '../actions/global.actions';
import { IGlobalState } from '../states/global.state';
import { AppService } from 'services/app.service';

const globalReducer = (
  state: IGlobalState,
  action: globalActions.Actions
): IGlobalState => {
  let prevState = { ...state },
    currentState: IGlobalState = {
      merchant: null,
    };

  switch (action.type) {
    case globalActions.Merchant_Login:
      currentState = {
        merchant: action.payload,
      };
      saveCurrentState(currentState);
      return logReduxState(prevState, currentState, action);
    default:
      return state;
  }
};

const saveCurrentState = (currentState: IGlobalState) => {
  AppService.Instance.saveReduxState(currentState);
};

const logReduxState = (
  prevState: IGlobalState,
  currentState: IGlobalState,
  action: globalActions.Actions
) => {
  //console.info(currentState);
  return currentState;
};

export default globalReducer;
