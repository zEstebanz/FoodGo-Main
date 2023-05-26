import Layout from '../components/Layout'
import React, { useState } from 'react';
import { FirebaseContext } from '../firebase';

const product = () => {

    const { usuario, firebase } = FirebaseContext;

    return (
        <Layout>

            <div className="container">
                <h1 className='text-center pt-5 mb-2'>Productos - FoodGo</h1>

                
                <div className="row">
                    {/* Aquí se repetirá este bloque por cada producto */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="card-img-top" alt="Imagen del producto" />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del producto</h5>
                                <p className="card-text">Descripción del producto</p>
                                <p className="card-text">Precio: $XX.XX</p>
                                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="card-img-top" alt="Imagen del producto" />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del producto</h5>
                                <p className="card-text">Descripción del producto</p>
                                <p className="card-text">Precio: $XX.XX</p>
                                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="card-img-top" alt="Imagen del producto" />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del producto</h5>
                                <p className="card-text">Descripción del producto</p>
                                <p className="card-text">Precio: $XX.XX</p>
                                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="card-img-top" alt="Imagen del producto" />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del producto</h5>
                                <p className="card-text">Descripción del producto</p>
                                <p className="card-text">Precio: $XX.XX</p>
                                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="card-img-top" alt="Imagen del producto" />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del producto</h5>
                                <p className="card-text">Descripción del producto</p>
                                <p className="card-text">Precio: $XX.XX</p>
                                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" className="card-img-top" alt="Imagen del producto" />
                            <div className="card-body">
                                <h5 className="card-title">Nombre del producto</h5>
                                <p className="card-text">Descripción del producto</p>
                                <p className="card-text">Precio: $XX.XX</p>
                                <a href="#" className="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    {/* Fin del bloque de producto */}
                </div>
            </div>
        </Layout>
    )
}

export default product;