import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

const index = product_status => {
  return async function(dispatch) {
    const response = await kidsnParty.get("/products", {
      params: { language_id: 2, product_status }
    });

    dispatch({ type: types.getProducts, payload: response.data });
  };
};

const show = id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/product/${id}`);

    dispatch({ type: types.getProduct, payload: response.data });
  };
};

const update = product => {
  return async function(dispatch) {
    const response = await kidsnParty.put(`/products/${product.product_id}`, {
      product
    });

    dispatch({ type: types.getProducts, payload: response.data });
  };
};
const switchProductStatus = product => {
  return async function(dispatch) {
    const response = await kidsnParty.patch(`/products/${product.product_id}`, {
      product
    });

    dispatch({ type: types.getProducts, payload: response.data });
  };
};

export default {
  index,
  show,
  update,
  switchProductStatus
};
