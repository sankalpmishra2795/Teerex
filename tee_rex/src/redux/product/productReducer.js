import { getAllProducts } from "../actionType";


const initialState = {
    loading: false,
    allProductArr : [],
    allSearchProductArr : [],
    errMsg:'',
    searchFlag: false
  };

  const productReducer = (state = initialState, action) => {
    switch(action.type){
        case getAllProducts.GET_ALL_PRODUCTS_INIT:
            return {
                ...state,
                loading: true,
            }
        case getAllProducts.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                allProductArr: action.payload,
                loading: false,
            }
        case getAllProducts.GET_ALL_SEARCH_PRODUCTS:
            return {
                ...state,
                allSearchProductArr: action.payload,
                loading: false,
                searchFlag: action.flag,
            }
        case getAllProducts.GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
                errMsg: action.payload,
                loading: false,
            }
        default:
            return state;
    }
  }

  export default productReducer;