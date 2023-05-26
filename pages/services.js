import Head from 'next/head'
import Container from '../components/Container';
import estilos from '../public/css/styles.module.css'

const services = () => {
    return (
        <div>
            <Head>
                <title>Services</title>
            </Head>
            <Container>
                <section className="container my-5" className={estilos.backgroundForm}>
                    <h2 className="text-center mb-4">Nuestros Servicios</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Servicio 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Catering para eventos</h5>
                                    <p className="card-text">Ofrecemos una amplia variedad de opciones para tu evento, desde banquetes de gala hasta menús casuales.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Servicio 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Entrega a domicilio</h5>
                                    <p className="card-text">¿No te apetece cocinar? No te preocupes, nosotros nos encargamos de llevarte tu comida favorita a la puerta de tu casa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="https://via.placeholder.com/350x200" alt="Servicio 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Comida para llevar</h5>
                                    <p className="card-text">¿Estás en apuros y no tienes tiempo para cocinar? Pasa por nuestra tienda y elige entre una amplia selección de comidas preparadas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default services;