import estilos from '../public/css/styles.module.css';
import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import firebase from '../firebase';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validacionCrearCuenta';

const STATE_INICIAL = {
    nombre: '',
    email: '',
    password: ''
}

const FormLogin = () => {

    const [error, guardarError] = useState(false);

    const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

    const { nombre, email, password } = valores;

    async function crearCuenta() {
        try {
            await firebase.registrar(nombre, email, password);
            Router.push('/');
        } catch (error) {
            console.error('Hubo un error al crear el usuario ', error.message);
            guardarError(error.message);
        }
    }

    return (
        <section className={estilos.sectionForm}>
            <form onSubmit={handleSubmit} noValidate>

                <h2>Register</h2>

                <div class="btn-group d-flex mt-4">
                    <button type="button" class="btn btn-secondary"><i class="fab fa-github"></i> GitHub</button>
                    <button type="button" class="btn btn-primary mx-2"><i class="fab fa-google"></i> Google</button>
                    <button type="button" class="btn btn-primary"><i class="fab fa-facebook"></i> Facebook</button>
                </div>
                <br></br>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" id="nombre" class="form-control" placeholder="Tu Nombre" name="nombre" value={nombre} onChange={handleChange} />
                </div>

                {errores.nombre && <MensajeError>{errores.nombre}</MensajeError>}

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-control" placeholder="Tu Email" name="email" value={email} onChange={handleChange} />
                </div>
                {errores.email && <MensajeError>{errores.email}</MensajeError>}

                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" class="form-control" placeholder="Tu Password" name="password" value={password} onChange={handleChange} />
                </div>
                {errores.password && <MensajeError>{errores.password}</MensajeError>}

                <input type="submit" class="btn btn-primary" value="Crear Cuenta" />

                {/* <Link href="/api/auth/signin">Registrate con GitHub</Link> */}

                <p>Tienes una cuenta? <Link href="/login">Ingresa Aquí</Link></p>

            </form>
        </section>
    )
}

export default FormLogin;