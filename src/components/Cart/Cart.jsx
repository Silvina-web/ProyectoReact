import React from 'react';
import './cart.css';
import Checkout from '../Checkout/Checkout';
import { useContext } from 'react';
import { CartContext} from "../../context/CartContext";
import { Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { PikachuModeContext } from '../../context/darkMode';


const Cart = () => {


     const {cart, emptyCart, totalPrice, removeItem}= useContext(CartContext);
     const {pikachuMode}= useContext(PikachuModeContext)
    

    return (
        <>   
        
        <div className={pikachuMode ?"pikachuMode Finalizar-Compra" : "Finalizar-compra"} >
            {cart.length === 0 ? 
              //Si no existen
                <div  className='Carro-Vacio' >
                    <div className="card border-danger mb-3" style={{maxWidth: '20rem'}}>
                       <div className="card-header"> <h4>Carrito vacio.....</h4> </div>
                                <div className="card-body">
                                <Link to = {'/'}> 

                                 <img src="../../img/PikachuTriste.PNG" alt="" />
                                 
                               <button className='btn btn-dark'>Volve....y comprame algo....</button> 
                               </Link>
                                
                                
                               </div>
                       </div>
                 </div>
              //Si existen en el carro
                   : 
              
              <div className="Card-Finalizar">

                   <div  className='Horizontal-card'>

                { 
                     cart.map((prod, indice) => 
                       <div className="card border-warning-finalizar mb-3"  key={indice} style={{maxHeight: '12rem'}}>
                                     <img src={prod.img} className ="card-img-to/* p" alt="" />
                                        
                                            <div className="card-body">
                                            <h5 className="card-title">{prod.nombre}</h5>
                                            <p className="card-text">Cantidad:  {prod.cant}</p>
                                            <p className="card-text">Cuanto sale de cada uno: $ {prod.precio}</p>
                                            <p className="card-text">Cuanto sale todo: $ {prod.precio * prod.cant}</p>
                                              {/*   <ItemCount stock={prod.stock}  onAdd={onAdd} />   */}

                                         
                                   </div>
                                   <button className='btn btn-danger' onClick={()=> removeItem(prod.id) }>Mejor no</button>  
                                   
                                    </div>
                                  )
                     }
 
   </div>

                     <div  className='Card-CuentaTotal' >
                                <div className="card  border-warning mb-3" style={{maxWidth: '20rem'}}>
                                   <div className="card-header"> <h4>GRACIAS!!!!!</h4></div>
                                           <div className="card-body">
                                               <h4 className="card-title">Tu compra total es...</h4>
                                               <p>Total : {totalPrice()}</p>

                                                <Link to="/Checkout">
                                                    <button className='btn btn-light'>Me llevo todo </button>
                                               </Link>
                                               <br /> <br />
                                           <button className='btn btn-danger' onClick={emptyCart}>Me arrepenti</button>
                                            

                                             
                                             
                                           </div>
                                 </div>

                     
                     </div>

              
                     </div>
              
              
              } 

              </div>

           {/*  <Checkout/>  */}
        </>
    );
}


export default Cart;
