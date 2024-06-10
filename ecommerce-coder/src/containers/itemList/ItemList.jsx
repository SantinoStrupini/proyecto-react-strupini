import React from 'react';
import Item from "../item/Item"


const ItemList = ( {products} ) => {
  return (
    <div className="container">
        <h2 className="main-title">Productos</h2>
        <div className="products">
            {products.map((prod) => <Item product={prod} key={prod.id}/>)}
        </div>
    </div>
  )
}

export default ItemList