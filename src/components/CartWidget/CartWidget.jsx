import {Link} from "react-router-dom";
const CartWidget = () => {
    return (
        <>
             <div className="nav-item">
              <Link className="nav-item" to="/cart">

              <button><img src="../img/Carrito32.png" alt="Carro de compras" /></button>
              </Link>
              
          
          </div>
           
        </>
    );
}

export default CartWidget;
