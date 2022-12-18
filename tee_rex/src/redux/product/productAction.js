import axios from "axios";
import { PRODUCT_API_URL } from "../../utils";
import { getAllProducts } from "../actionType";


export const getAllProduct = () => dispatch => {
    dispatch(getAllProductInit())
  axios({
      method: 'GET',
      url: PRODUCT_API_URL,
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res => {
      dispatch(getAllProductSuccess(res.data));

  }).catch(err => {
      dispatch(getAllProductFail(err));

  })
}

export const getAllProductInit = () => ({
  type: getAllProducts.GET_ALL_PRODUCTS_INIT,
})


export const getAllProductSuccess = (payload) => ({
  type: getAllProducts.GET_ALL_PRODUCTS_SUCCESS,
  payload
})

export const getAllProductFail = (payload) => ({
    type: getAllProducts.GET_ALL_PRODUCTS_FAIL,
    payload
  })

  export const getAllSearchProduct = (payload, flag=false) => ({
    type: getAllProducts.GET_ALL_SEARCH_PRODUCTS,
    payload,
    flag
  })