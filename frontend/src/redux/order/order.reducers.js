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
