import React from 'react'

function About() {
  return (
    <div className='contenedor-about'>
      <article className='about'>
        <h1 className='title'>Acerca de Mí</h1>
        <div className="body-about">
          <p>
            Soy un desarrollador de software con proyección profesional en el uso de nuevas tecnologías para soluciones empresariales en entorno web.
            Con conocimientos sobre tecnologías.Net: ASP.NET MVC, Servicios WCF, Web API, lenguaje de programación C#, VB. Angular, JavaScript, HTML5 y CSS como lenguajes del lado del cliente y bases de datos Oracle y SQL Server.
          </p>
          <p>
            Tambien se trabajar con tecnologías como React, Node.js, MongoDB y otras.

            Se manejar tecnoligias como Git, TFS, Jenkins, Docker, Kubernetes y Docker Swarm.
            {/* También he trabajado en proyectos de desarrollo de software para empresas en diferentes industrias, como tecnologías de seguimiento y control de calidad, sistemas de gestión de proyectos, y sistemas de información para empresas de retail y logística. */}
          </p>
          <p>
            Me gustaría trabajar en proyectos que me ayuden a desarrollar habilidades y a aplicar mis conocimientos en diferentes áreas de la empresa.
          </p>
          <p>
            Mi correo electrónico es: <a href="mailto:gustavober98@gmail.com">gustavober98@gmail.com .</a>
          </p>
        </div>
      </article>

      <div className="tecnoligias">
        <h1 className='title'>Tecnologías</h1>

        Tengo conocimientos en tecnoligias como:
        <ul>
          <li>
            .NET Core
          </li>
          <li>
            C#
          </li>
          <li>
            JavaScript
          </li>
          <li>
            React
          </li>
          <li>
            Node.js
          </li>
          <li>
            Html
          </li>
          <li>
            CSS
          </li>
          <li>
            Sass
          </li>
        </ul>
      </div>

    </div>
  )
}

export default About