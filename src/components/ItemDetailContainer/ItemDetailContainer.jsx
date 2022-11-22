import {useState, useEffect, useContext} from 'react';
import {useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {consultarJson} from '../../assets/funciones';
import { PikachuModeContext } from '../../context/darkMode';
import './itemDetailContainer.css'
import { getProducto } from '../../assets/firebase';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState ([]);
  const {id}=useParams()
  const {pikachuMode}= useContext(PikachuModeContext)
     
  useEffect (()=>{

    
    consultarJson('../json/productos.json').then(productos =>{

        const prod = productos.find(productoArray=>productoArray.id === parseInt(id))
        setProducto(prod);
        console.log(prod)
    }) 


    // no se muestran los datos en detalle producto
    /* getProducto(id).then(prod=>{
      setProducto(prod)
    }) */
    


  }, []);

    return (
        
            <div className={pikachuMode ? "pikachuMode  itemDetail" : " itemDetail"} >
            <ItemDetail producto={producto}/>
            </div>

      
    );
}

export default ItemDetailContainer;
