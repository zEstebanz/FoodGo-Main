import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import estilos from '../public/css/styles.module.css';
import firebase from '../firebase';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validacionCrearCuenta';

const STATE_INICIAL = {
    nombre: '',
    ingredientes: '',
    precio: '',
    imagen: '',
    descripcion: ''
}

const CrearProducto = () => {

    const [error, guardarError] = useState(false);

    const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

    const { nombre, ingredientes, precio, imagen, descripcion } = valores;

    async function crearCuenta() {
        
    }
    return (

        <section className={estilos.sectionForm}>
            <form onSubmit={handleSubmit} noValidate>
                <h2>Crear Producto</h2>

                <fieldset>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" id="nombre" class="form-control" placeholder="Nombre del Producto" name="nombre" value={nombre} onChange={handleChange} onBlur={handleBlur}/>
                    </div>

                    <div class="mb-3">
                        <label for="ingredientes" class="form-label">Ingredientes</label>
                        <input type="text" id="ingredientes" class="form-control" placeholder="Ingredientes" name="ingredientes" value={ingredientes} onChange={handleChange} onBlur={handleBlur}/>
                    </div>

                    <div class="mb-3">
                        <label for="precio" class="form-label">Precio</label>
                        <input type="number" id="precio" class="form-control" placeholder="Precio del Producto" name="precio" value={precio} onChange={handleChange} onBlur={handleBlur}/>
                    </div>

                    <div class="mb-3">
                        <label htmlFor='imagen' class="form-label">Imagen del Producto</label>
                        <input type="file" id="imagen" class="form-control" name="imagen" value={imagen} onChange={handleChange} onBlur={handleBlur}/>
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor='descripcion' class="form-label">Descripcion del Producto</label>
                    <textarea id="descripcion" class="form-control" placeholder='Descripcion' name="descripcion" value={descripcion} onChange={handleChange} onBlur={handleBlur}/>
                </fieldset>


                <input type="submit" class="btn btn-primary mt-3" value="Crear Producto" />

            </form>
        </section>

    )
}


export default CrearProducto;