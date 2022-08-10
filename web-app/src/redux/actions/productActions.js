import fakestoreapi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";
import { callGetApi } from "../../lib/api";

export const fetchProducts = () => async (dispatch) => {
  const response = await callGetApi("http://localhost:7000/api/product");
  // const response = await fakestoreapi.get('/products');
  console.debug("response", response);
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  // const response = await fakestoreapi.get(`/products/${id}`);
  const response = await callGetApi(`http://localhost:7000/api/product/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
