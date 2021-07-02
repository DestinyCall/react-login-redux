import { Context } from './store.provider';
import React, { useContext } from 'react';

export const connect = (mapStateToProps: any, mapDispatchToProps: any) => {
  return (Component: any) => {
    const Ctx = (props: any) => {
      const { state, dispatch } = useContext(Context);
      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(dispatch);
      const rprops = {
        ...props,
        ...stateToProps,
        ...dispatchToProps,
      };
      return <Component {...rprops} />;
    };
    return Ctx;
  };
};
