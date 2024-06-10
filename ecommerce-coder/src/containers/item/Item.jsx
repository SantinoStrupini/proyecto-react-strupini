import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product} ) => {
  return (
    <div className='products'>
        <img src={product.img} alt="" />
        <div>
            <h4>{product.nombre}</h4>
            <p>Precio: ${product.precio}</p>
            <Link className='ver-mas' to={`/item/${product.id}`}>Ver mas</Link>
        </div>
        
    </div>
  )
}

export default Item