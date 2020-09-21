import { axios } from "axios";
export const fetchProducts = () => {
  dispatch(fetchProductsRequest());
  const promise = axios.get("http://192.168.0.100:5000/");
  promise
    .then((items) => {
      console.log(items.data.products);
      dispatch(fetchProductsSuccess(items.data.products));
    })
    .catch((error) => {
      dispatch(fetchProductsError(error));
    });
};
export const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};
export const fetchProductsSuccess = (payload) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload,
  };
};
export const fetchProductsError = (payload) => {
  return { type: "FETCH_PRODUCTS_ERROR", payload };
};
