import {useState} from 'react'
import './Contador.css'

const Contador = () => {
    const [contador, setContador] = useState(1)

    const modificarContador = (operacion) => {
        
        if ( operacion === "+"){
            if(contador < 10)
            setContador(contador+1)
        } else{
            if(contador > 0)
            setContador(contador-1)

        }
        
    }

    return (
        <>
            <button onClick={()=> modificarContador("+")}  className='btn-btn-dark'>+</button>
            {contador}
            <button onClick={()=> modificarContador ("-")} className='btn-btn-light'>-</button>
        </>
    );
}

export default Contador;
