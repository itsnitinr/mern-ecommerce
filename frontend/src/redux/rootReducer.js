import { combineReducers } from 'redux';

import alertReducer from './alert/alert.reducers';
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userVerifyReducer,
  userUpdateReducer,
} from './user/user.reducers';

import {
  orderCreateReducer,
  orderListMyReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
  orderDispatchReducer,
  billingAddressReducer,
  shippingAddressReducer,
} from './order/order.reducers';

export default combineReducers({
  alert: alertReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateProfileReducer,
  userVerify: userVerifyReducer,
  userList: userListReducer,
  userEdit: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderListMy: orderListMyReducer,
  orderDetails: orderDetailsReducer,
  orderList: orderListReducer,
  orderPay: orderPayReducer,
  orderDispatch: orderDispatchReducer,
  billingAddress: billingAddressReducer,
  shippingAddress: shippingAddressReducer,
});
