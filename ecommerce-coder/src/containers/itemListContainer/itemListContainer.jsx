import React from 'react';
import { useEffect, useState } from "react";
import { pedirProductos } from "../../helpers/pedirProductos";
import ItemList from "../itemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        pedirProductos()
          .then((res =>{
            setProducts(res)
          }))
    }, [])


  return (
    <div>
      <ItemList products={products}/>
      
    </div>
  )
}

export default ItemListContainer