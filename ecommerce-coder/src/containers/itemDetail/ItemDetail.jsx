import React from 'react';
const ItemDetail = ( {item} ) => {
  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.img} alt={item.titulo} />
            <h3 className="nombre">{item.nombre}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="precio">${item.precio}</p>
        </div>

    </div>
  )
}

export default ItemDetail