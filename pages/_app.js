import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';

const MyApp = props => {

    const usuario = useAutenticacion();

    // componente actual y props de la pagina actual
    const { Component, pageProps } = props;

    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;