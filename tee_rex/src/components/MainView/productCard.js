import React from 'react'
import * as SC from "./styles";

const ProductCard = (props) => {
    const {
        product,
        incrementHandler,
        addToCartHandler,
        decrementHandler
    } =props;
  return (
        <SC.CardContainer>
            <SC.CardImageWarper>
                <SC.CardImg alt='no-img' src={product?.imageURL} />
            </SC.CardImageWarper>
            <SC.CardBottomSection>
                <SC.PriceText>Rs {product.price}</SC.PriceText>
                {product?.addedToCart ?
                    <SC.CardButton2>
                        <SC.CardButtonMinus onClick={(e)=> decrementHandler(e, product, product.productQuantity)}>-</SC.CardButtonMinus>
                        <SC.ProductCount>{product.productQuantity}</SC.ProductCount>
                        <SC.CardButtonPlus onClick={(e)=> incrementHandler(e, product, product.productQuantity)}>+</SC.CardButtonPlus>
                    </SC.CardButton2>
                    :
                    <SC.CardButton onClick={(e)=> addToCartHandler(e,product)} >Add to cart</SC.CardButton>
                }
                
            </SC.CardBottomSection>
        </SC.CardContainer>
  )
}

export default ProductCard;