import productos from "../productos/productos.json"

export const pedirProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    })
}

export const pedirItemPorId = (id) =>{
    return new Promise ((resolve, reject) => {
        const item = productos.find((el) => el.id === id)

        if(item) {
            resolve(item)
        } else {
            error: "no se encontro el producto"
        }
    })
}