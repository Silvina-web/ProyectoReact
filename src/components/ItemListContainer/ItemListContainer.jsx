import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { consultarJson } from '../../assets/funciones';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category}=useParams()

   useEffect(() => {

    if(category){
        consultarJson('../json/productos.json').then (products =>{
            const productsList =products.filter(prod=> prod.idCategoria === parseInt(category))
            const CardProductos = ItemList({productsList})
            setProductos(CardProductos)
            console.log(CardProductos)
         })
    } else {

    
          consultarJson('./json/productos.json').then (productsList =>{
            const CardProductos = ItemList({productsList})
            setProductos(CardProductos) 
          
         })
    

   }
}, [category]);

    return (
        <div className='ver-todo' >
            {productos}
        </div>
    );
}

export default ItemListContainer;

