import React from 'react';
import './app.css'
import Navbar from './Navbar/Navbar';
import Contador from './Contador/Contador';
import Home from './Home/Home';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
<>
<Navbar/>
<Home/>
<Contador/>
<ItemListContainer greeting={" Hola"}/>

   
</>

);


}

export default App;



  /*   const producto1 ={ nombre: "Plato", dimensiones: "10x10"}
      const producto2 ={nombre:"Taza", dimensiones: "12x12"}
      const producto3 ={nombre:"Pote", dimensiones:"15x15"}

      const productos =[ producto1, producto2,producto3]


      const consultarProductos= (Stock)=>{
        return new Promise((res, rej)=>{
            if(Stock){
                res(productos)
            }
            rej("Sin stock")

        })
      }
      consultarProductos(false)
      .then(resultado => console.log(resultado))
      .catch(error => console.log(error))
 */