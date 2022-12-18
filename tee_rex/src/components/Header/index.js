import React, { useState } from "react";
import * as SC from "./styles";
import cartImage from '../../assets/cart-icon.png'
import useHeaderHook from "./useHeaderHook";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [productCount, setProductCount] = useState(0)
    useHeaderHook(setProductCount)
    const navigate = useNavigate();
    const goToCart = () => {
        navigate('/cart')
    }
    const goToHome = () => {
        navigate('/')
    }
  return (
    <SC.NavBarContainer>
        <SC.NavBarWrap>
            <SC.NavHeading onClick={ goToHome} >Tee<SC.NavHeadingSpan>R</SC.NavHeadingSpan>ex Store</SC.NavHeading>
            <SC.NavBarWarper onClick={goToCart}>
                <SC.NavHeading>Your Cart</SC.NavHeading>
                <SC.IconWarper>
                    <SC.IconImg  alt="cart-icon" src={cartImage}/>
                    <SC.CountWrap>
                        <SC.CountText>{productCount}</SC.CountText>
                    </SC.CountWrap>
                </SC.IconWarper>
            </SC.NavBarWarper>
        </SC.NavBarWrap>
    </SC.NavBarContainer>
  );
};

export default NavBar;