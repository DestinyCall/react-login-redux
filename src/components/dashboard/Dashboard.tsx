import React, { Component } from 'react';
import { Context } from 'redux/store.provider';
import { connect } from 'redux/meta.connect';
import { withRouter } from 'react-router-dom';
import { IGlobalState } from 'redux/states/global.state';

class Dashboard extends Component<any, any> {
  render() {
    return (
      <div className='dashboard'>
        <div id='dashdata'>Dashboard</div>
      </div>
    );
  }
}
const mapStateToProps = (state: IGlobalState) => {
  return {
    merchant: state.merchant,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchUpdate: (dispatchObj: any) => dispatch(dispatchObj),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));

Dashboard.contextType = Context;
