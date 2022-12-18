import React from 'react'
import * as SC from "./Styles";
import ErrorImg from '../../assets/error.webp'
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
  return (
    <SC.NotFoundContainer>
      <SC.NotFoundImgWrap>
        <SC.NotFoundImg alt='error-img' src={ErrorImg}></SC.NotFoundImg>
      </SC.NotFoundImgWrap>
      <SC.ShopNowButtonWrap>
            <SC.ShopNowButton onClick={goToHome}>HOME</SC.ShopNowButton>
        </SC.ShopNowButtonWrap>
    </SC.NotFoundContainer>
  )
}

export default NotFound