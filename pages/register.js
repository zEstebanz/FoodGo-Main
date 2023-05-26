import Layout from '../components/Layout'
import estilos from '../public/css/styles.module.css'
import FormRegister from '../components/FormRegister'

const register = () => {
    return (
        <Layout>
            <div className={estilos.backgroundForm}>
                    <FormRegister/>
                </div>
        </Layout>
    )
}

export default register;