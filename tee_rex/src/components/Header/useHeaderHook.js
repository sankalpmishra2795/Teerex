// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useHeaderHook = (setProductCount) => {
    const cartReducer = useSelector(state => state.cartReducer)
    useEffect(() => {
        if(cartReducer.cartArr.length){
            setProductCount(cartReducer.cartArr.length)
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [cartReducer.cartArr])
}

export default useHeaderHook;