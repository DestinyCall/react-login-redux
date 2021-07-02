import React, { createContext, useReducer, Dispatch } from 'react';
import globalReducer from './reducers/global.reducer';
import { IGlobalState } from './states/global.state';
import { initialGlobalState as IGState } from 'redux/states/initial-global-state.provider';

const initialGlobalState: IGlobalState = IGState;

const Store = ({ children }: any) =>
{
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const Context = createContext({
  state: initialGlobalState,
  dispatch: (() => {}) as Dispatch<any>,
});

export default Store;
