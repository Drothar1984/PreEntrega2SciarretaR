//simulamos el componete de la presentacion

import React from 'react'
//importamos para que nos redirija 
import { Link } from 'react-router-dom'

const Item = ({item}) => {

  return (

    <Link to={'/item/' + item.id}>

        <div className="ProductCardReutilizable" style={{ maxWidth: '300px', maxHeight: 'auto', minWidth: '200px', minHeight: '200px'}}>

            <img src={item.imagen} style={{ maxWidth: '200px', maxHeight: '200px' }} alt={item.nombre}/>
            
            <div>

                <h4>{item.nombre}</h4>                            
                
                <p>Precio $ {item.precio}</p>                
                <p>Tipo: {item.categoria}</p>
                <button>Ver</button>

            </div>                

        </div>

    </Link>

  )
}

export default Item