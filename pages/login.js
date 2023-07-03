import Layout from '../components/Layout'
import FormLogin from '../components/FormLogin'
import estilos from '../public/css/styles.module.css'


const login = () => {
    return (
        <div>
            <Layout>
                <div className={estilos.backgroundForm}>
                    <FormLogin />
                </div>
            </Layout>
        </div>
    )
}

export default login;