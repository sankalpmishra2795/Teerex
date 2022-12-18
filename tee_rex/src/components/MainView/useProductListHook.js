// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/product/productAction'
import { useSearchParams} from "react-router-dom";

const useProductListHook = (setProductList, setFilteredList, productList) => {

const dispatch = useDispatch();
const [searchParams] = useSearchParams();

const productListSuccess = useSelector(state => state.productReducer)

useEffect(() => {
    dispatch(getAllProduct())
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

useEffect(() => {
    const makeFilterObj = {}
    for (const entry of searchParams.entries()) {
        const values = JSON.parse(entry[1])
        if(values.length) {
            makeFilterObj[entry[0]] =  values
        }
    }
    const filteredList = []
    productList.map(product => {
        const priceArr = makeFilterObj?.price?.map(ele => ele.replace(' Rs', '').split('-').map(ele => Number(ele.trim())))
        if(
            (makeFilterObj?.color ? makeFilterObj?.color.includes(product.color) : true) &&
            (makeFilterObj?.gender ? makeFilterObj?.gender.includes(product.gender) : true) &&
            (makeFilterObj?.type ? makeFilterObj?.type.includes(product.type) : true)
        ) {
            if(priceArr) {
                priceArr.map(singlePriceRange => {
                    if(singlePriceRange.length === 1 && product.price >= singlePriceRange[0]) {
                        filteredList.push(product)
                    } else if(product.price >= singlePriceRange[0] && product.price <= singlePriceRange[1]) {
                        filteredList.push(product)
                    }
                    
                    return singlePriceRange
                })
            } else {
                filteredList.push(product)
            }
        }
        return product
    })
    setFilteredList(filteredList)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [productList, searchParams])

useEffect(() => {
  if(productListSuccess?.allProductArr?.length > 0 && !productListSuccess?.loading){
    setProductList(productListSuccess.searchFlag ? productListSuccess.allSearchProductArr :  productListSuccess.allProductArr)
    setFilteredList(productListSuccess.allProductArr)
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [productListSuccess])


}

export default useProductListHook