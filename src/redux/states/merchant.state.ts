export interface IMerchant {
  _id: string;
  countryCode: string;
  businessRegId: string;
  businessName: string;
  address: string;
  billingAddress: string;
  activeStatus: boolean;
  phoneVerified: boolean;
  emailVerified: boolean;
  registeredOn: number;
  countryDialCode: string;
  phone: string;
  email: string;
  name: string;
  defaultStore: string;
}
export interface IToken {
  access: string;
  token: string;
}
