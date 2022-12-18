import React from 'react'
import * as SC from "./styles";
import EmptyCartImg from '../../assets/empty-cart.jpeg'
import { useNavigate } from 'react-router-dom';
const EmptyCart = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
  return (
    <SC.EmptyCartContainer>
        <SC.EmptyCartImgContainer>
            <SC.EmptyCartImg alt='empty-cart-img' src={EmptyCartImg} />
        </SC.EmptyCartImgContainer>
        <SC.ShopNowButtonWrap>
            <SC.ShopNowButton onClick={goToHome}> SHOP NOW</SC.ShopNowButton>
        </SC.ShopNowButtonWrap>
    </SC.EmptyCartContainer>
  )
}

export default EmptyCart;