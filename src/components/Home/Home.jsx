import {useState, useEffect} from 'react';
import {consultarJson} from '../../assets/funciones.js';
import "./home.css"


 



const Home = () => {
  

     const [productos, setProductos] = useState([]);

        useEffect (()=>{
              consultarJson().then(prod => setProductos(prod))

        },[]);

           



    return (
        <div  className='container-card'>  
            {productos}
        </div>
    );
} 

export default Home; 
