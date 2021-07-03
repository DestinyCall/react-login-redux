import React, { Component } from 'react';
import { AppService } from 'services/app.service';
import * as globalActions from 'redux/actions/global.actions';
import { Context } from 'redux/store.provider';
import { connect } from 'redux/meta.connect';
import { withRouter } from 'react-router-dom';
import { IGlobalState } from 'redux/states/global.state';

class Auth extends Component<any, any> {
  state: any = {
    phone: '9161792121',
    password: '9161792121',
    countryDialCode: '+91',
  };

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.merchantLogin = this.merchantLogin.bind(this);
  }

  handleChange(e: any) {
    const {
      target: { name, value },
    } = e;

    this.setState({
      [name]: value,
    });
  }

  merchantLogin(e: any) {
    e.preventDefault();
    let merchantLogin: any = {
      countryDialCode: this.state.countryDialCode,
      phone: this.state.phone,
      password: this.state.password,
    };
    AppService.Instance.merchantLogin(
      merchantLogin.countryDialCode,
      merchantLogin.phone,
      merchantLogin.password
    )
      .then((response) => {
        if (response.status === 200) {
          response.data.token = {
            access: 'auth',
            token: response.headers['x-auth'],
          };
          const { dispatch } = this.context;
          dispatch(new globalActions.MerchantLogin(response.data));

          this.setState(
            { updateStatus: 200 },
            () => this.props.history.push('/dashbaord')
            //console.log('Login Success')
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className='row'>
        <form className='col s12' onSubmit={this.merchantLogin}>
          <div className='row'>
            <div className='input-field col s4'>
              <i className='material-icons prefix'>home</i>
              <input
                id='countryDialCode'
                name='countryDialCode'
                type='text'
                className='validate'
                defaultValue={this.state.countryDialCode}
                onChange={this.handleChange}
              ></input>
              <label htmlFor='icon_countryDialCode'></label>
            </div>
            <div className='input-field col s4'>
              <i className='material-icons prefix'>phone</i>
              <input
                id='phone'
                name='phone'
                type='tel'
                className='validate'
                defaultValue={this.state.phone}
                onChange={this.handleChange}
              ></input>
              <label htmlFor='icon_phone'></label>
            </div>
            <div className='input-field col s4'>
              <i className='material-icons prefix'>password</i>
              <input
                id='password'
                name='password'
                type='password'
                className='validate'
                defaultValue={this.state.password}
                onChange={this.handleChange}
              ></input>
              <label htmlFor='icon_password'></label>
            </div>
            <div className='row'>
              <button
                className='btn waves-effect waves-light right'
                type='submit'
                name='action'
              >
                Login
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
        </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));
Auth.contextType = Context;
