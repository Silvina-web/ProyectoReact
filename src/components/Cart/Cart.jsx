import React from 'react';
import Checkout from '../Checkout/Checkout';
import { useContext } from 'react';
import { CartContext} from "../../context/CartContext";
import { Link} from "react-router-dom";

const Cart = () => {

   const {cart, emptyCart, totalPrice, removeItem}= useContext(CartContext)
    return (
        <>
         {/*  <Checkout/> */}
        </>
    );
}

export default Cart;
