import {cargarBDD, getProductos} from "./firebase" 


export const consultarJson = async (ruta)=>{
    const promise = await fetch (ruta)
    const productos = await promise.json ()
    return productos

    
  
} 

  //cargarBDD() 

 console.log(getProductos())
 
