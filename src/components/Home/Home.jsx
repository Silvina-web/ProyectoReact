
import React from 'react';
import "./home.css"

const Home = () => {
  return (
    <div className="home-img">
       
       <img src="../img/LisaCeramica.jpg" alt="" />

    </div>
  );
}

export default Home;




































/* import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import {consultarJson} from '../../assets/funciones.js';
import "./home.css"


 



const Home = () => {


     const [productos, setProductos] = useState([]);

        useEffect (()=>{
              consultarJson('./json/productos.json').then(productos => {
                const CardProductos = productos.map(prod =>
                    <div key={prod.id}>
                       <div className="card border-warning mb-3"  style={{maxWidth: '20rem'}} >
                       <img src={`./img/${prod.img}`} className ="card-img-top" alt="" />
                       <div className="card-header">Header</div>
                       <div className="card-body">
                        <h4 className="card-title">{prod.nombre}</h4>
                        <p className="card-text">Medidas : {prod.dimensiones}</p>
                        <p className="card-text">${prod.precio}</p>
                        <p className="card-text">Stock :{prod.stock}</p>
                        <button className="btn btn-outline-warning"><Link className='nav-link' to={`/producto/${prod.id}`}>Ver</Link></button>
                      </div>
                    </div>
              
                  
                  </div>
                ) 
                setProductos(CardProductos)
              })

        },[]);

           



    return (
        <div  className='container-card'>  
            {productos}
        </div>
    );
} 

export default Home; 
 */