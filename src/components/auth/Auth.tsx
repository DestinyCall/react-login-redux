import React, { Component } from 'react';
import { AppService } from 'services/app.service';
import * as globalActions from 'redux/actions/global.actions';
import { Context } from 'redux/store.provider';
import { IMerchant } from 'redux/states/merchant.state';

export default class Auth extends Component<any, any> {
  state: any = {
    phone: '',
    password: '',
    countryDialCode: '+91',
  };

  constructor(props: any) {
    super(props);
    this.fillDetails = this.fillDetails.bind(this);
    this.merchantLogin = this.merchantLogin.bind(this);
  }

  componentDidMount() {
    const { state } = this.context;
    if (state.merchant) {
      console.log(state.merchant);
    }
  }

  fillDetails(state: any) {
    const merchant: IMerchant = state.merchant;
    if (merchant) {
      console.log(merchant);
    }
  }
  merchantLogin(e: any) {
    e.preventDefault();
    console.log(this.state);

    const { state, dispatch } = this.context;

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
            token: state.user.token.token,
          };

          dispatch(new globalActions.MerchantLogin(response.data));

          this.setState({ updateStatus: 200 }, () =>
            console.log('Login Success')
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
                id='icon_prefix'
                type='text'
                className='validate'
                value='+91'
              ></input>
              <label htmlFor='icon_prefix'></label>
            </div>
            <div className='input-field col s4'>
              <i className='material-icons prefix'>phone</i>
              <input
                id='icon_telephone'
                type='tel'
                className='validate'
                value='9161792121'
              ></input>
              <label htmlFor='icon_telephone'></label>
            </div>
            <div className='input-field col s4'>
              <i className='material-icons prefix'>password</i>
              <input
                id='icon_secret'
                type='password'
                className='validate'
                value='9161792121'
              ></input>
              <label htmlFor='icon_telephone'></label>
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
Auth.contextType = Context;
