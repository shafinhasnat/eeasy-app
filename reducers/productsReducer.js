const initState = { loading: false, products: [] };
const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { loading: true };
    case "FETCH_PRODUCTS_SUCCESS":
      return { loading: false, products: action.payload };
    case "FETCH_PRODUCTS_ERROR":
      return { loading: false };
  }
};
