import Layout from '../components/Layout'
import FormLogin from '../components/FormLogin'
import estilos from '../public/css/styles.module.css'
import Head from 'next/head'


const login = () => {
    return (
        <div>
            <Head>
                <title>FoodGo</title>
            </Head>
            <Layout>
                <div className={estilos.backgroundForm}>
                    <FormLogin />
                </div>
            </Layout>
        </div>
    )
}

export default login;