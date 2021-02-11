import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  MY_ORDERS_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ADMIN_GET_ORDERS_REQUEST,
  ADMIN_GET_ORDERS_SUCCESS,
  ADMIN_GET_ORDERS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_DISPATCH_REQUEST,
  ORDER_DISPATCH_SUCCESS,
  ORDER_DISPATCH_FAIL,
  ORDER_DISPATCH_RESET,
  SAVE_SHIPPING_ADDRESS,
  SAVE_BILLING_ADDRESS,
} from './order.types';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return { loading: true };
    case PLACE_ORDER_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case PLACE_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case MY_ORDERS_REQUEST:
      return { loading: true };
    case MY_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case MY_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    case MY_ORDERS_RESET:
      return { orders: [] };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { order: {}, loading: true },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderListReducer = (
  state = { loading: true, orders: [] },
  action
) => {
  switch (action.type) {
    case ADMIN_GET_ORDERS_REQUEST:
      return { loading: true };
    case ADMIN_GET_ORDERS_SUCCESS:
      return { loading: false, orders: action.payload };
    case ADMIN_GET_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDispatchReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_DISPATCH_REQUEST:
      return { loading: true };
    case ORDER_DISPATCH_SUCCESS:
      return { loading: false, success: true };
    case ORDER_DISPATCH_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_DISPATCH_RESET:
      return {};
    default:
      return state;
  }
};

export const billingAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_BILLING_ADDRESS:
      return action.payload;
    default:
      return state;
  }
};

export const shippingAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SHIPPING_ADDRESS:
      return action.payload;
    default:
      return state;
  }
};
