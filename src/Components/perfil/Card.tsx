import React from 'react'
import Foto from '../../img/Foto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Card() {
  return (
    <div className='Card'>
      <section className='image'>
        <img src={Foto} alt="" />
      </section>
      <section className='titulo_name'>
        <h1>Gustavo Bernal</h1>
        <h4>Developer Junior .Net(C#)</h4>
      </section>

      <article className='descripcion-perfil'><b>Bienvenido a mi perfil, puedes encontrar cosas hechas por mi autoria en este portefolio espero te guste!</b></article>
      <section className='contactos'>

        <div className="icon">
          <a href="https://github.com/Gtv1521">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/gustavo-bernal-1b58621a3">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="icon">
          <a href="https://wa.me/qr/CRXQZUJTH2UNF1">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Card