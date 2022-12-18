import React, { useState } from 'react'
import { addProductSuccess, decrementProductSuccess, incrementSuccess } from '../../redux/addProduct/addProductAction';
import SearchBox from '../Search';
import ProductList from './productList';
import * as SC from "./styles";
import useProductListHook from './useProductListHook';
import { useDispatch } from 'react-redux';
import { notify } from '../../utils';

const MainView = ({filterIconShow, toggleHandler}) => {
  const [productList, setProductList] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [filteredList, setFilteredList] = useState([])
  const dispatch = useDispatch();
  
  useProductListHook(setProductList, setFilteredList, productList);

  const addToCartHandler = (e, selectedProduct)=> {
    const newList = productList.map(product => {
      if(product.id === selectedProduct.id) {
        if(product.quantity >= 1) {
          return {
            ...product,
            addedToCart: true,
            productQuantity: 1
          }
        } else {
          notify('Out of Stock', 'warn')
        }
      }
      return product;
    })
    setProductList(newList)
    setProductCount(productCount+1);
    dispatch(addProductSuccess(selectedProduct))
    notify('Product Added !', 'success')
  }

  const incrementHandler = (e, selectedProduct, prdCount) => {
    if(selectedProduct.quantity > prdCount) {
      const newList = productList.map(product => {
        if(product.id === selectedProduct.id) {
          if(product.quantity >= 1) {
            return {
              ...product,
              productQuantity: prdCount + 1
            }
          }
        }
        return product;
      })
      setProductList(newList)
      dispatch(incrementSuccess(selectedProduct.id))
      notify('Product Added !', 'success')

    } else {
      notify('Out of Stock', 'warn')
    }

  }

  const decrementHandler = (e, selectedProduct, prdCount) => {
    const newList = productList.map(product => {
      if(product.id === selectedProduct.id) {
        if(product.quantity >= 1) {
          return {
            ...product,
            productQuantity: prdCount - 1,
            addedToCart: prdCount === 1 ? false : true,
          }
        }
      }
      return product;
    })
    setProductList(newList)
    dispatch(decrementProductSuccess(selectedProduct.id))
    notify('Product Removed!', 'success')
  }
  return (
    <SC.MainViewContainer>
      <SearchBox 
        toggleHandler={toggleHandler} 
        filterIconShow={filterIconShow}
      />
      <ProductList 
        productList={filteredList}
        addToCartHandler={addToCartHandler}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        productCount={productCount}
      />
    </SC.MainViewContainer>
  )
}

export default MainView;