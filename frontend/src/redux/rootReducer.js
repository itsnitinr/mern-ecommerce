import { combineReducers } from 'redux';

import alertReducer from './alert/alert.reducers';
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
} from './user/user.reducers';

import {
  orderCreateReducer,
  orderListMyReducer,
  orderDetailsReducer,
} from './order/order.reducers';

export default combineReducers({
  alert: alertReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateProfileReducer,
  userList: userListReducer,
  orderCreate: orderCreateReducer,
  orderListMy: orderListMyReducer,
  orderDetails: orderDetailsReducer,
});
