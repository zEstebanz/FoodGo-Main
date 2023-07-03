import Layout from '../components/Layout'
import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../firebase';
import Producto from '../components/Producto';
import useProductos from '../hooks/useProductos.js';

const product = () => {

    const { productos } = useProductos('creado');

    return (
        <Layout>

            <div className="container">
                <h1 className="text-center pt-5 mb-5">Productos - FoodGo</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {productos.map((producto) => (
                        <div className="col mb-4" key={producto.id}>
                            <Producto producto={producto} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default product;