
import React, { useState } from 'react';
import Router from 'next/router';
import estilos from '../public/css/styles.module.css'
import firebase from '../firebase/index';
import Link from 'next/link'

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validacionIniciarSesion';

const STATE_INICIAL = {
    email: '',
    password: ''
}

const FormLogin = () => {

    {

        const [error, guardarError] = useState(false);

        const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

        const { email, password } = valores;

        async function iniciarSesion() {
            try {
                await firebase.login(email, password);
                Router.push('/')
            } catch (error) {
                console.error('Hubo un error al autenticar el usuario', error.message);
                guardarError(error.message);
            }
        }


        return (
            <section className={estilos.sectionForm}>
                <form onSubmit={handleSubmit} noValidate>
                    <h2>Login</h2>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="Tu Email" name="email" value={email} onChange={handleChange} />
                    </div>
                    {errores.email && <p>{errores.email}</p>}
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Tu Password" name="password" value={password} onChange={handleChange} />
                    </div>
                    {errores.password && <MensajeError>{errores.password}</MensajeError>}

                    <input type="submit" class="btn btn-primary" value="Iniciar Sesión" />


                    <div class="btn-group d-flex mt-4">
                        <button type="button" class="btn btn-secondary"><i class="fab fa-github"></i> GitHub</button>
                        <button type="button" class="btn btn-primary mx-2"><i class="fab fa-google"></i> Google</button>
                        <button type="button" class="btn btn-primary"><i class="fab fa-facebook"></i> Facebook</button>
                    </div>

                    <p>No estas registrado? <Link href="/register">Registrate Aquí</Link></p>
                    <p>Olvidaste la constraseña? <Link href="/#">Recupera Aquí</Link></p>

                </form>
            </section>
        )
    }
}

export default FormLogin;