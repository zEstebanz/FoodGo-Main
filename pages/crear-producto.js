import Layout from '../components/Layout'
import FormProducto from '../components/FormProducto'
import estilos from '../public/css/styles.module.css'
import Head from 'next/head'


const CrearProducto = () => {
    return (
        <div>
            <Head>
                <title>FoodGo</title>
            </Head>
            <Layout>
                <div className={estilos.backgroundForm}>
                    <FormProducto />
                </div>
            </Layout>
        </div>
    )
}

export default CrearProducto;