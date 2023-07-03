import React, { useContext } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout'
import estilos from '../public/css/styles.module.css'
import Link from 'next/link'
import { FirebaseContext } from '../firebase';

const index = () => {

    const { usuario, firebase } = useContext(FirebaseContext);


    return (
        <div>
            <Layout>
                <div className="container">

                    <main className="py-5">

                        {usuario ? (
                            <div>
                                <h1 className="display-4 mb-4">Bienvenidos a FoodGo, gracias por Elegirnos</h1>
                                <p className="lead mb-4">La tienda de comida y delivery en línea</p>

                                <div className="row">
                                    <div className="col-md-6">

                                        <img className={`${estilos.imgCustom} img-fluid`} src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Banner de FoodGo" />

                                    </div>
                                    <div className="col-md-6">
                                        <div className="mt-4">
                                            <h2>¿Tienes hambre?</h2>
                                            <Link href="/product" className={`${estilos.btnCustom2} btn btn-outline-primary`}>
                                                Si Quiero Comer Xd
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div>
                                <h1 className="display-4 mb-4">Bienvenidos a FoodGo</h1>
                                <p className="lead mb-4">La tienda de comida y delivery en línea</p>

                                <div className="row">
                                    <div className="col-md-6">

                                        <img className={`${estilos.imgCustom} img-fluid`} src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Banner de FoodGo" />

                                    </div>
                                    <div className="col-md-6">

                                        <h2>¿Quiénes somos?</h2>
                                        <p>
                                            Somos una empresa dedicada a ofrecer la mejor comida y delivery a nuestros clientes.
                                            Con una amplia variedad de opciones, desde platos de comida rápida hasta comidas gourmet,
                                            estamos seguros de que encontrará algo que le guste.
                                        </p>
                                        <h2>¿Cómo funciona?</h2>
                                        <p>
                                            Navegue por nuestro catálogo de productos, agregue los que desee al carrito, y haga su pedido.
                                            Nuestro equipo de delivery se encargará de llevarlo directamente a su puerta. ¡Así de fácil!
                                        </p>
                                        <div className="mt-4">
                                            <Link href="/login" className={`${estilos.btnCustom2} btn btn-outline-primary`}>
                                                Iniciar sesión
                                            </Link>
                                            <Link href="/register" className={`${estilos.btnCustom1} btn btn-primary me-2`}>
                                                Registrarse
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </Layout>
        </div>
    )
}

export default index;