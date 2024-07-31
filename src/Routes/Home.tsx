import { Link } from 'react-router-dom'
import Card from '../Components/perfil/Card'

function Home() {
    return (
        <div className='contenedor-home'>
            <section className='profile'>
                <div className="contenido">
                    <article>
                        <p>
                            <b className='title'>
                                Gustavo Bernal Acero <br />
                            </b>
                            <i className='descrition'>
                                (... Bienvenido a mi portafolio...)
                            </i>
                        </p>
                    </article>
                    <div className="inicio">
                        <Link to={"/About"}>Iniciar</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home