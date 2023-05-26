import app from 'firebase/compat/app';
import firebaseConfig from './config';
import 'firebase/compat/auth';

// v9 compat packages are API compatible with v8 code
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    // Registrar un usuario
    async registrar(nombre, email, password) {

        // Creamos un nuevo usuario
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName: nombre
        })

    }

    // Inicia sesión del usuario
    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    // Cierra la sesión del usuario
    async cerrarSesion() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;