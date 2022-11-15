import {Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
const CartWidget = () => {

     const {getItemQuantity}=useContext(CartContext)
    return (
        <>
             <div className="nav-item">
              <Link className="nav-item" to="/cart">
              <p> {getItemQuantity()} </p>
              <button><img src="../img/Carrito32.png" alt="Carro de compras" /></button>
              </Link>
              
          
          </div>
           
        </>
    );
}

export default CartWidget;
