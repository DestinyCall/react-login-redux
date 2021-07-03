import { IMerchant } from 'redux/states/merchant.state';

export const Merchant_Login = '[MERCHANT] Merchant Login';
export const Get_Merchant_Details = '[MERCHANT] Get Merchant Details';

export class MerchantLogin {
  readonly type: string = Merchant_Login;
  readonly payload: IMerchant;
  constructor(payload: IMerchant) {
    this.payload = payload;
  }
}
export type Actions = MerchantLogin;
