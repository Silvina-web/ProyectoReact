import React , {useContext} from 'react';
import { createOrdenCompra, getProducto, updateProducto} from "../../assets/firebase.js"
import './checkout.css'
import { useNavigate } from 'react-router-dom';
import { CartContext} from "../../context/CartContext"
import { toast} from 'react-toastify'
 
const Checkout = () => {

    let navigate= useNavigate()

    const datosFormulario = React.useRef()
 
    const {cart, emptyCard, totalPrice}= useContext(CartContext);

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)

        const datForm =new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        const aux=[...cart]
        console.log(aux)
        aux.forEach(producto =>{
            getProducto(producto.id)
            .then(prod=>{
                prod.stock -=producto.cant 
                updateProducto(producto.id, prod)
            })
        })
        
       /*  e.target.reset() */

       createOrdenCompra(valores, totalPrice(), new Date().toDateString()).then(orden=>{
        console.log("Hola")
        toast.colored(`Gracias ${orden.id} por comprar`) 
       /*  toast.colored('Gracias ') */
        emptyCard()
        e.target.reset()
        navigate ("/")

       }).catch(error=>{
        toast.error ('Su compra fallo')
        console.log(error)
       })
    }



    return (
        <div   className='container'>
            <form onSubmit={consultarFormulario}  ref={datosFormulario}>
 
     <div className="form-group">
      <label htmlFor="nombre" className="form-label mt-4">Nombre y Apellido</label>
      <input type="text" className="form-control"   placeholder="Nombre y apellido" />
     </div>

     <div className="form-group">
      <label htmlFor="email" className="form-label mt-4">Escribime tu mail</label>
      <input type="text" className="form-control"   placeholder="Escribime tu mail" />
     </div>

     <div className="form-group">
      <label htmlFor="dni" className="form-label mt-4">Dejame tu numero de documento</label>
      <input type="number" className="form-control"   placeholder="Documento" />
     </div>

     <div className="form-group">
      <label htmlFor="Celu" className="form-label mt-4">Celu</label>
      <input type="number" className="form-control"   placeholder="Celular" />
     </div>

     <div className="form-group">
      <label htmlFor="direccion" className="form-label mt-4">Donde vivis?</label>
      <input type="text" className="form-control"   placeholder="Direccion" />
     </div>
          <br />

     <button type='submit' className='btn btn-primary'>FINALIZAR COMPRA</button>

    

    
     

   
</form>

        </div> 
    ) ;
}

export default Checkout;
