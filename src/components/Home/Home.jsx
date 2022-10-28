import {useState} from 'react';


 //probando setTimeout
 //const saludo= () =>{
//prompt('Hola Lisa')
    //  setTimeout(()=>{
     //     prompt('Como te va?')
    //                 },1000)
    //                      setTimeout (()=>{
    //                            prompt('Queres tener tu tienda?')
    //                              }, 2000)
//}
//saludo()




const Home = () => {
    const [productos, setProductos]= useState([]);
    const consultarJson =  ()=>{
        fetch('./json/productos.json')
        .then(promise=> promise.json())
        .then(productos => {
            const CardProductos = productos.map(prod =>
                <div>
                   <div className="card border-warning mb-3" style={{maxWidth: '15rem'}}>
                   <img src={`./img/${prod.img}`} className ="card-img-top" alt="" />
                   <div className="card-header">Header</div>
                   <div className="card-body">
                    <h4 className="card-title">{prod.nombre}</h4>
                    <p className="card-text">{prod.dimensiones}</p>
                    <p className="card-text">${prod.precio}</p>
                    <p className="card-text">{prod.stock}</p>
                  </div>
                </div>
          
              
              </div>
                  ) 
                console.log(CardProductos)
                setProductos(CardProductos)
             })
    }

            consultarJson()



    return (
        <div>
            {productos}
        </div>
    );
} 

export default Home; 
