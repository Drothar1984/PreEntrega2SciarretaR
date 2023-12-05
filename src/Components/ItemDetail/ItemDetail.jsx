import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
        <div className='itemDetail'>
            <img src={item.imagen} max-width='150px' height= '250px' alt={item.nombre}/>
            <h3>{item.nombre}</h3>  
            <p>Detalle: {item.descripcion}</p>
            <p>$ {item.precio}</p>
            <p>cantidad: {item.stock}</p>
            <button>Comprar</button>
        </div>
    </div>
  )
}

export default ItemDetail