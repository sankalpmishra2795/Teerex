import React from 'react'
import ProductCard from './productCard';
import * as SC from "./styles";

const ProductList = (props) => {
    const {
        productList,
        productCount,
        addToCartHandler,
        incrementHandler,
        decrementHandler
    } =props;
    
  return (
    <SC.ProductListContainer>
       {productList && productList.length > 0 &&
            productList.map((product,i)=>{
                return <ProductCard 
                            key={i} 
                            product={product} 
                            productCount={productCount} 
                            decrementHandler={decrementHandler}
                            addToCartHandler={addToCartHandler}
                            incrementHandler={incrementHandler}
                        />
            })
       }
    </SC.ProductListContainer>
  )
}

export default ProductList