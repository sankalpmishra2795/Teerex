import React from 'react';
import { ToastContainer, toast } from "react-toastify";




const ToastifyMsg = (msgs) => {
const Msg = () => <div>{msgs}</div>
const displayMsg = () => {
    toast(<Msg />) 
}
displayMsg();
  return (
    <ToastContainer />
  )
}

export default ToastifyMsg;