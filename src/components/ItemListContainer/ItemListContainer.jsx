import React from 'react';
import { useState, useEffect, useContext } from 'react';
import ItemList from '../ItemList/ItemList';
import { consultarJson } from '../../assets/funciones';
import { useParams } from 'react-router-dom';
import { PikachuModeContext } from '../../context/darkMode.js';
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category}=useParams()

    const {pikachuMode, togglePikachuMode}= useContext(PikachuModeContext)

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
        <div className= {pikachuMode ? 'ver-todo pikachuMode' : 'ver-todo'} >
           {/*  <button className={pikachuMode ? 'btn btn-light' : 'btn btn-dark'}   onClick={()=> togglePikachuMode()}>Modo Pikachu</button> */}
            {productos}
        </div>
    );
}

export default ItemListContainer;

