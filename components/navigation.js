import Link from 'next/link'
import styles from '../public/css/styles.module.css'
import { useContext } from 'react'
import { FirebaseContext } from '../firebase'

const Navigation = () => {
    const { usuario, firebase } = useContext(FirebaseContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">FoodGo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link" href="/">Inicio</Link>
                    </li>
                    {/* Si existe el usuario entonces */}
                    {usuario ? (
                        <ul className="navbar-nav ms-auto">

                            <li class="nav-item">
                                <Link class="nav-link" href="/product">Productos</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" href="/crear-producto">Crear Producto</Link>
                            </li>

                            <li className={`nav-item`}>
                                <button className="nav-link" onClick={() => firebase.cerrarSesion()}>Cerrar Sesión</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Iniciar sesión</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Registrarse</Link>
                            </li>
                        </ul>
                    )}


                </ul>
            </div>
        </nav>
    )
}

export default Navigation;