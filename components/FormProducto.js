import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import estilos from '../public/css/styles.module.css';
import { FirebaseContext } from '../firebase';
import FileUploader from 'react-firebase-file-uploader';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validacionCrearProducto from '../validacion/validacionCrearProducto';
import Link from 'next/link';


const STATE_INICIAL = {
    nombre: '',
    ingredientes: '',
    precio: '',
    imagen: '',
    descripcion: ''
}

const FormProducto = () => {

    // context con las operaciones crud de firebase
    const { usuario, firebase } = useContext(FirebaseContext);

    const { valores, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validacionCrearProducto, crearProducto);

    // hook de routin para redireccionar
    const router = useRouter();

    const { nombre, ingredientes, precio, descripcion, imagen } = valores;

    async function crearProducto() {

        // si el usuario no esta autenticado llevar al login
        if (!usuario) {
            return router.push('/login');
        }

        // crear el objeto de nuevo producto 
        const producto = {
            nombre,
            ingredientes,
            precio,
            descripcion,
            imagen,
            creado: Date.now()
        }

        // insertarlo en la base de datos
        firebase.db.collection('productos').add(producto);

        alert('Producto creado');
    }

    return (

        <section className={estilos.sectionForm}>
            {usuario ? (

                <form onSubmit={handleSubmit} noValidate>
                    <h2>Crear Producto</h2>

                    <div class="mb-3">
                        <label for="nombre" class="form-label">Producto</label>
                        <input
                            type="text"
                            id="nombre"
                            class="form-control"
                            placeholder="Nombre del Producto"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange} />
                    </div>

                    <div class="mb-3">
                        <label for="ingredientes" class="form-label">Ingredientes</label>
                        <input
                            type="text"
                            id="ingredientes"
                            class="form-control"
                            placeholder="Ingredientes del Producto"
                            name="ingredientes"
                            value={ingredientes}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="mb-3">
                        <label for="precio" class="form-label">Precio</label>
                        <input
                            type="number"
                            id="precio"
                            class="form-control"
                            placeholder="Precio del Producto"
                            name="precio"
                            value={precio}
                            onChange={handleChange}
                        />

                    </div>

                    <div class="mb-3">
                        <label for="imagen" class="form-label">Url de Imagen</label>
                        <input
                            type="text"
                            id="imagen"
                            class="form-control"
                            placeholder="Imagen del Producto"
                            name="imagen"
                            value={imagen}
                            onChange={handleChange}
                        />
                    </div>

                    {/* <div class="mb-3">
                        <label for="imagen" class="form-label">Imagen del Producto</label>
                        <input
                            type='file'
                            accept="image/*"
                            id="imagen"
                            class="form-control"
                            name="imagen"
                            value={imagen}
                            onChange={handleChange}
                        />
                    </div> */}

                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descipcion</label>
                        <textarea
                            id="descripcion"
                            class="form-control"
                            placeholder="Descripcion del Producto"
                            name="descripcion"
                            value={descripcion}
                            onChange={handleChange}
                        />
                    </div>


                    <input type="submit" class="btn btn-primary mt-3" value="Crear Producto" />

                </form>

            ) : (
                <>
                    <h2 className='text-center'>No puedes Crear Producto Si no eres usuario/admin</h2>

                    <Link href="/login" className='btn btn-outline-primary'>Iniciar Sesión</Link>
                </>
            )}
        </section>

    )
}


export default FormProducto;