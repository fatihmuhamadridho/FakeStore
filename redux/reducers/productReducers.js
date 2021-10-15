import { GET_PRODUCTS, PRODUCTS_ERROR } from "./types";

const initialState = {
  products: [],
  product: {},
  loading: true,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
