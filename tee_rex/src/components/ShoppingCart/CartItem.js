import React from "react";
import * as SC from "./styles";

const CartItem = ({ data, decrementHandler, incrementHandler, deleteHandler }) => {
    
    return (
        <SC.CartItemWarper>
            <SC.CartItemImgWarper>
                <SC.CartItemImg alt="product-img" src={data.imageURL} />
            </SC.CartItemImgWarper>
            <SC.CartItemDetails>
                <SC.CartItemName>{data.name}</SC.CartItemName>
                <SC.CartItemPrice>Rs {data.price}</SC.CartItemPrice>
            </SC.CartItemDetails>
            <SC.CartItemButton>
                <SC.CardButtonMinus onClick={()=>decrementHandler(data)} >-</SC.CardButtonMinus>
                <SC.ProductCount>QTY: {data.productQuantity}</SC.ProductCount>
                <SC.CardButtonPlus onClick={()=>incrementHandler(data)}>+</SC.CardButtonPlus>
            </SC.CartItemButton>
            <SC.CartItemButtonWrap>
                <SC.CartItemDeleteButton onClick={()=>deleteHandler(data)}>DELETE</SC.CartItemDeleteButton>
            </SC.CartItemButtonWrap>
        </SC.CartItemWarper>
    );
};

export default CartItem;
