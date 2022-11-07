import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {consultarJson} from '../../assets/funciones';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState ([]);
  const {id}=useParams()
     
  useEffect (()=>{
    consultarJson('../json/productos.json').then(productos =>{

        const prod = productos.find(productoArray=>productoArray.id === parseInt(id))
        setProducto(prod);
        console.log(prod)
    })
    


  }, []);

    return (
        <div>
            <div className='card mb-3 container detalleProducto' > quien soy yo</div>
            <ItemDetail producto={producto}/>
            

        </div>
    );
}

export default ItemDetailContainer;
