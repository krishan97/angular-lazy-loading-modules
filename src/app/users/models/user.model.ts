import { UserAddress } from './user-address.model';
export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
}
