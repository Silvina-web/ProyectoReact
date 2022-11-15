import React from 'react';
import Checkout from '../Checkout/Checkout';
import { useContext } from 'react';
import { CartContext} from "../../context/CartContext";
import { Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';



const Cart = () => {


     const {cart, emptyCart, totalPrice, removeItem}= useContext(CartContext);
     

    return (
        <>
           
              {cart.length === 0 ? 
              //Si no existen
                <div>
                    <h1>Carro vacio </h1>
                    <Link to = {'/'}> 
                               <button className='btn btn-dark'>Volver</button> 
                    </Link>
                  </div>
              //Si existen en el carro

              : 
              
              <div>

                { 
                     cart.map((prod, indice) => 

                              <div className="card text-pink bg-success mb-3"  key={indice} style={{maxWidth: '20rem'}}>
                                   <img src={`../img/${prod.img}`} className ="card-img-to/* p" alt="" />
                                         <div className="card-header">{prod.nombre}</div> 
                                            <div className="card-body">
                                            <h4 className="card-title">{prod.nombre}</h4>
                                            <p className="card-text">Cantidad:{prod.cant}</p>
                                            <p className="card-text">Cuanto sale de cada uno: $ {prod.precio}</p>
                                            <p className="card-text">Cuanto sale todo: $ {prod.precio * prod.cant}</p>
                                           {/*  <ItemCount stock={prod.stock}  onAdd={onAdd} /> */}
                                   </div>
                                   <button className='btn btn-danger' onClick={()=> removeItem(prod.id) }>Borrar</button>
                              </div>

                     )
                     }

                     <div>
                        <p>Total : {totalPrice()}</p>
                        <button className='btn btn-danger' onClick={emptyCart}>Borrar todo</button>
                        <Link to="/Checkout">
                            <button className='btn btn-light'>Finalizar </button>
                        </Link>
                     </div>

              </div>
              
              
              
              } 

           {/*  <Checkout/>  */}
        </>
    );
}


export default Cart;
