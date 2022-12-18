// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const useSearchHook = (setProductList) => {
    const productListSuccess = useSelector(state => state.productReducer)

    useEffect(() => {
        if(productListSuccess?.allProductArr?.length > 0){
            setProductList(productListSuccess.allProductArr)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productListSuccess])
}

export default useSearchHook