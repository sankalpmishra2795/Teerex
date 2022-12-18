import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import * as SC from "./styles";
import { useDispatch } from 'react-redux';
import { decrementProductSuccess, deleteFromCart, incrementSuccess } from '../../redux/addProduct/addProductAction';
import EmptyCart from './EmptyCart';
import { notify } from '../../utils';


const CartScreen = () => {
  const cartStateArr = useSelector(state => state.cartReducer.cartArr);
  const [totalAmout, setTotalAmout] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0
    // eslint-disable-next-line array-callback-return
    cartStateArr.map(ele => {
        total += ele.price * ele.productQuantity
    })
    setTotalAmout(total)
  }, [cartStateArr])

  const deleteHandler = (item)=> {
    dispatch(deleteFromCart(item.id))
    notify('Product Removed!', 'success')
  }
  const incrementHandler = (item)=> {
    dispatch(incrementSuccess(item.id))
    notify('Product Added !', 'success')
  }
  const decrementHandler = (item)=> {
    dispatch(decrementProductSuccess(item.id))
    notify('Product Removed!', 'success')
  }
  return (
    <SC.CartContainer>
        <SC.CartHeading>
            <SC.HeadingText>Shopping Cart</SC.HeadingText>
        </SC.CartHeading>
        {cartStateArr&& cartStateArr?.length === 0 ? 
         <EmptyCart />
        :
        <SC.CartItemContainer>
            {cartStateArr.map(ele => <CartItem key={ele.id} data={ele} deleteHandler={deleteHandler} incrementHandler={incrementHandler} decrementHandler={decrementHandler} />)}
            <SC.HorizontalLine/>
            {totalAmout !== 0 &&  
                <SC.CartTotalWrap>
                    <SC.CartTotalText>TOTAL AMOUNT</SC.CartTotalText>
                    <SC.CartTotalAmtText>Rs {totalAmout}</SC.CartTotalAmtText>
                </SC.CartTotalWrap>
            }
         </SC.CartItemContainer>
        }
        
    </SC.CartContainer>
  )
}

export default CartScreen;