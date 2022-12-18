import { addProduct } from "../actionType";


const initialState = {
    cartArr : [],
    productCount: 0,
    errMsg:'',
  };

  const cartReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch(type){
        case addProduct.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                cartArr: [...state.cartArr, {...payload, productQuantity: 1}]
            }

        case addProduct.INCREMENT_PRODUCT_SUCCESS:
            const newCartArr = state.cartArr.map(item => {
                if(item.id === payload) {
                    return {
                        ...item,
                        productQuantity: item.productQuantity + 1
                    }
                }
                return item
            })
            return {
                ...state,
                cartArr: newCartArr,
            }

        case addProduct.DECREMENT_PRODUCT_SUCCESS:
            const newCartArrr = []
            state.cartArr.map(item => {
                if(item.id === payload) {
                    if(item.productQuantity > 1) {
                        debugger
                        const obj = {
                            ...item,
                            productQuantity: item.productQuantity - 1
                        }
                        newCartArrr.push(obj)
                    }
                } else {
                    newCartArrr.push(item)
                }
                return item
            })
            return {
                ...state,
                cartArr: newCartArrr,
            }
        case addProduct.DELETE_FROM_CART:
            const newArr = state.cartArr.filter(ele => ele.id !== payload)
            return {
                ...state,
                cartArr: newArr,
            }

        default:
            return state;
    }
  }

  export default cartReducer;