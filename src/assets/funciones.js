export const consultarJson = async ()=>{
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json ()
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
            <button className="btn btn-outline-warning">Ver</button>
          </div>
        </div>
  
      
      </div>
    )
    return CardProductos

}