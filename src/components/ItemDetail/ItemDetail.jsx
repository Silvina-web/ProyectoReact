import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({producto}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

       const onAdd=(contador)=>{
        console.log(contador)
        console.log(producto)
        
        addItem (producto, contador)
       
       }

    return (
        <div>
             <div className="card border-warning mb-3"  style={{maxWidth: '18rem'}} >
                       <img src={producto.img} className ="card-img-top" alt="" />
                      {/*  <div className="card-header">{producto.nombre}</div> */}
                       <div className="card-body">
                        <h4 className="card-title">{producto.nombre}</h4>
                        <p className="card-text">Medidas : {producto.dimensiones}</p>
                        <p className="card-text">${producto.precio}</p>
                        <p className="card-text">Stock :{producto.stock}</p>
                        <ItemCount stock={producto.stock}  onAdd={onAdd} />
                        
                         <button className="btn btn-outline-warning"> 
                                <Link to="/Cart" className="nav-link">Finalizar</Link>
                         </button> 
                      </div>
                    </div>
        </div>
    );
}

export default ItemDetail;
