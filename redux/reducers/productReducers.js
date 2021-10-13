<<<<<<< HEAD
import {
  ADD_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
} from "./types";
=======
import { GET_PRODUCTS, PRODUCTS_ERROR } from "./types";
>>>>>>> 52d1bafaae3ddf69d0a09100bdd3d8c5629d171e

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

<<<<<<< HEAD
    case ADD_PRODUCTS:
      return {
        ...state,
        products: state.products.concat(action.payload),
        loading: false,
      };

    case EDIT_PRODUCTS:
      return {
        ...state,
        products: state.products.map((product) =>
          Number(product.id) === Number(action.payload.id)
            ? (product = action.payload)
            : product
        ),
        loading: false,
      };

    case DELETE_PRODUCTS:
      const filteredState = state.products.filter(
        (product) => Number(product.id) !== Number(action.payload.id)
      );
      return { ...state, products: filteredState };

=======
>>>>>>> 52d1bafaae3ddf69d0a09100bdd3d8c5629d171e
    case PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
