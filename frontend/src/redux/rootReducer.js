import { combineReducers } from 'redux';

import { userRegisterReducer } from './user/user.reducer';

export default combineReducers({
  userRegister: userRegisterReducer,
});
