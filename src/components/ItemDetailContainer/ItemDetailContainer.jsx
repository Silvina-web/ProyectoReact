import {useState, useEffect, useContext} from 'react';
import {useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {consultarJson} from '../../assets/funciones';
import { PikachuModeContext } from '../../context/darkMode';
import './itemDetailContainer.css'

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
    


  }, []);

    return (
       
            <div className={pikachuMode ? "pikachuMode card mb-3 container itemDetail" : "card mb-3 container itemDetail"} >
            <ItemDetail producto={producto}/>
            </div>

      
    );
}

export default ItemDetailContainer;
