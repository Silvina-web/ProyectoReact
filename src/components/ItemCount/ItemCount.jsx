import {useState} from 'react'
import './Contador.css'

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)


    const agregarAlCarrito=()=>{
           onAdd(contador)
           console.log(contador)
                    }

const incrementar =()=> contador < stock && setContador(contador + 1)

const decrementar =()=> contador > 1 && setContador(contador - 1)

/* 
    const modificarContador = (operacion) => {
        
        if ( operacion === "+"){
            if(contador < producto.stock)
            setContador(contador+1)
        } else{
            if(contador > 1)
            setContador(contador-1)

        }
        
    }
 */
    return (
        <>
            <button onClick={incrementar}  className='btn-btn-dark'>+</button>
                   {contador}
            <button onClick={decrementar} className='btn-btn-light'>-</button>
            
            <button className="btn btn-outline-warning" onClick={agregarAlCarrito}>Comprame</button>
        </>
    );
}

export default ItemCount;
