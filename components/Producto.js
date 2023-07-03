import React from "react";
import Link from "next/link";

const Producto = ({ producto }) => {

    const { nombre, ingredientes, precio, imagen, descripcion } = producto;

    return (

        <div className="card">
            <img src={imagen} className="card-img-top" alt="Imagen del producto" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">Ingredientes: {ingredientes}</p>
                <p className="card-text">Precio: ${precio}</p>
                <Link href="#" className="btn btn-primary">Agregar al carrito</Link>
            </div>
        </div>

    )
}

export default Producto;