import {Link} from "react-router-dom";
const CartWidget = () => {
    return (
        <>
             <li className="nav-item">
              <Link className="nav-item" to="/carrito">

              <button><img src="img/Carrito32.png" alt="Carro de compras" /></button>
              </Link>
              
          
          </li>
           
        </>
    );
}

export default CartWidget;
