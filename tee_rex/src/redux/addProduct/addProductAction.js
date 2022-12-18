import { addProduct } from "../actionType";



export const addProductSuccess = (payload) => ({
  type: addProduct.ADD_PRODUCT_SUCCESS,
  payload
})


export const decrementProductSuccess = (payload) => ({
  type: addProduct.DECREMENT_PRODUCT_SUCCESS,
  payload
})

export const incrementSuccess = (payload) => ({
  type: addProduct.INCREMENT_PRODUCT_SUCCESS,
  payload
})

export const deleteFromCart = (payload) => ({
    type: addProduct.DELETE_FROM_CART,
    payload
  })
  