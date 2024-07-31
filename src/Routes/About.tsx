import React from 'react'
import Card from '../Components/perfil/Card'
import Mongo from '../img/iconos/mongodb.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faHtml5, faNode, faNodeJs, faSass } from '@fortawesome/free-brands-svg-icons'


function About() {
  return (
    <div className='contenedor-about'>
      <div className="tecnologias">
        <Card />
      </div>
      <article className='about'>
        <div className="description-profile">
          <div className="body-about">
          <h1>Acerca de Mí</h1>
            <p>
              Soy un desarrollador de software con proyección profesional en el uso de nuevas tecnologías para soluciones empresariales en entorno web.
              Con conocimientos sobre tecnologías.Net: ASP.NET MVC, Servicios WCF, Web API, lenguaje de programación C#, VB. Angular, JavaScript, HTML5 y CSS como lenguajes del lado del cliente y bases de datos Oracle y SQL Server.
            </p>
            <p>
              Tambien se trabajar con tecnologías como React, Node.js, MongoDB y otras.

              Se manejar herramientas como Git, TFS, Jenkins, Docker, Kubernetes y Docker Swarm.
              {/* También he trabajado en proyectos de desarrollo de software para empresas en diferentes industrias, como tecnologías de seguimiento y control de calidad, sistemas de gestión de proyectos, y sistemas de información para empresas de retail y logística. */}
            </p>
            <p>
              Me gustaría trabajar en proyectos que me ayuden a desarrollar habilidades y a aplicar mis conocimientos en diferentes áreas de la empresa.
            </p>
            <p>
              Mi correo electrónico es: <a href="mailto:gustavober98@gmail.com">gustavober98@gmail.com .</a>
            </p>
          </div>
        </div>
        <div className="iconos">
          <ul className='lista-iconos'>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/0lEQVR4nO1UWUhUURj+zjn3jnNHZ5UaHWeiXEjDzBLaLcO2l3aCaKOXyrcIg8KiRaGitMgHqaS0yIpAyohEimijhWiDfIjqoV4KiyAzwhz94oxjpWmo9OgHH5f73/N//3/+5QJD+E84CIB/8DD+J2Ks2KeGI7ZteM6UJqnUZwANg9UyAIwHkANgMoBVAFabduuDFUrhmIrLNGPsHwBcH2yA4h6lYB9834uv2Z8A5UKI74nrt9JKy6SyO+hfuIbStFEYJhM3FlEI8QPApx5+OwG0AFjel3AegA0A7goh2u0pGVRON6UthvH5iykNk0IqOqfNJYQIA/gaPb8ewFghRKs+C0B/m9VTXAFo7Wdp2Atv6Gd6cRVtnnh9u9cA9gNYCcDeVTv6sie1OKfPi2SdvO0wDU88hZQMFJVTWY6IfXTpWVpOF63kdI4oO09pt3Qv7mn/rPIrHLG2kFIZYWkY7ZHgQjxGfELgiH4xHXHtRpxbG2lzeyPi2m64PBFbp90XsasYO63gqA4h5Q8hhJ4qBtcWMv3MYyZXP2Bo33ndNx3kFpQV+0sgwv6WRnSeV444usZN4aiS0/RlTw1bCcFWIaXuhd6XVAjDoHf+SmZU3hocT9xh6rGbTFi1uSv4o+jmBzqH1+Vtc2TnMnTkyoAZLL3IpOKzDOyooun26UFpjA7Nb1hu7zPl8jF0oLab84rKWq47Vde7+KE6BvdeYNKemgidOTM7AGjO+WsBlM22VF9t2LICjiyr44yT17jh8gNmVdQz62h994zLLjHpD+Gk3WfombGgqzR6NHuFlEo9sVxuVjfU8/abV7z/7i0LLt1hqPQigwdqO7MtOfdbeE8NA0WVjEvNDEfFj2udf/0i0oQQTTbLEV69fRcbGl+wvrGRS05e7SaqgwQ2ldI7MT8spNJLpeu+BYBAP5AC4KHOSBnmN3965pe03Nnf/BPzmj0ZEz47/MEmZZpfohnrzM8ByMAAoTNZBKAawEsAzQDaAHwE8BxADYACAP6BCg8BfeEnGhSmV1NpTUYAAAAASUVORK5CYII=" />
            </li>
            <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC" />
            </li>
            <li>
              <FontAwesomeIcon icon={faNode} />
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5} />
            </li>
            <li>
              <img src="data:image/png;base64,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"></img>
            </li>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO1ZzW8NURS/Qgg74n8Qdjydc6bRiCBqZdNnJ11gzp1i0USCVS2EBV0Im37MOe+JRrwNC2VRrNiwI5FoQlSCin7YVIJq5b6Oph/z5s6C+ZD+kl8yyb2L3+/cc86cuaPUCv5j6AB8T1CrIkKz06IFf9TJTosqEvyBXRtJ8L0WnDUkgQ9eT2mzKgpIoPZH/ALeVUWAZmyPED9HxnaVZxztw03E8LmRAWIcy3UqkUDQMPrzpwD9Ko/wGHdoxpklYqfrXJxGM2avyhu04GBExKeI4VtEKt1TeYLPbtOy6NeFwgQxTEalkldtdlVeQAJDDYr2k2HkmsCQygN0f/OWqOiHIt9phpFGBe1XYWvW+hUxXolpm6+14HBMV7qcqfhybdvauL6vBV6QwMsYA19OXW1dl5kBCpw2S99/HrLhHgqctuwMMN6yvLSekMDTWAMCA5mI7+ravUYLjMeLw0eG8acE4+VaeXXqBvwKlGxjAzHe1wwPrONF1d2eugFi6LAbgDtmjLYaCMBP3YBm7LUKY7hdp3Uf9qZugBgfJzBQJcYbCfY9TN2AZnxrTSGBPkP7PnyTugEzqFkjK3CNGK4nKPax1A2ENw42YWbM6E5QA99TN0ACPxOcwEVivJRLA1rwawJhXXXa2+1E6gbCSdN2AmeJ8VyCVHuVuoEkb1gKsNPQbhQHMzCAFxKkRocW50SCdns+dQOeuHsT1MCxOi37/IqzJ6NpFEfjxTlH5hhr8mMm06gBsXM6NrLilqmCh211orKC11PaEHcKxM4hw7jod9ZwvcoSxLB/2e3bvED3gCfYGl24+EtX4KDKAxr1elOchpFrDGdUnkACx5eOF+b2zWe3efGpwDQxnlR5BFXQWXgLYT47F356ksAzr79pp8o1ZtWqsC5uzhswzwHuM2uqSNCCw2ZmUkWFZhgx96OqqNCCo+Z2WhUVxDCZyaz/txD+nZlSRYUO/5FlrWMF6h/iNwFD5Zin1tTcAAAAAElFTkSuQmCC" />
            </li>
            <li>
              <img src="data:image/png;base64,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"></img>
            </li>
            <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHElEQVR4nO2ZW4hWVRTHfzaWoygzJVkgWtRQDwlF4jCYyPhQD13HiMyyXrtpN+liPagvZVcVKqaiaRLqpaAsRwZyLloWKFIP5SSaVFSWDzN0sZnRxi8WrAOLxT5n72++M5HgHxZ83z5rr7PWPmuvy95wGqcuZgKXAXOASZwiOAtYDRwCKoZ+B94HlgJnRGTUAYuAVcArwHMqc95EK38OsMcpHqJvgbacL7YG+L5g7gfArIlQXlzkE/eyIeBLYDBHmY+MMiuAownGV3QBGss24BbzgpO6klPM8ybgeTXKKvML0BNQ8gjQDjwA3Au8p3Kz52+VbcB2I1x8tsjNOgtWV/bOct1LHsudEVeWpfzZwHEVelz/x/BCQPlPgfrIvLcN/4sl6U+rEfpZAn+bMdiSrO7dkblXua9VCu4yQt+M8F4PjBr+g8BO838MuKNg/mTgb+X9J8fVqsYTRoENBXxXAH8a3gPAbGA6sNuMjwALC+QcMLyXlGHA40bgxhye84Efnbts0rlCTwMnzPNfNYOHsNfwNVMCHjQCO3Rsuvr6s0CvZuJKlfQH0K/h92Zghsr+2vDMLzsHiPAudYNKyTQCdLvEeFHZUShG+7QcaNf9Yqldn+2rQt7cWhSv00zps2vm41+5xNOfWJVOctn5ZEBWRoNa9IkuVaHRZV9Lm3Vl1pqxY1pOpOJinVNRWqsyO3LeKbo0pAqXAmzACbCJaR1wATBsxqQcrhaPmPki60J1s2wsywcZDaRUqmcCu1ziWQ8sM2MS5raY/3tyPnEL8LCS/PaQObY83+L6jFZ995gZ26U65uJJt+o36fgME3nGnNAlie7XFXCDJW4vWN+XrIw2STaHSCUcxDTgN8N4n3veFVCqLyAnb+8IbQvw9wb43nE895tnouPUkAHXGKb9gdbQulFGix1PS0Jo9Nl1UYDn2oC72X15Y8iAVYZBelWPepdkdgR4VicYIJvXo9utcOY+Fq8ansdCBqyMGDDZuVj3OA2QTe2xw/l/fcSAR2MuNBCILNcFlJHPX6sLLQ7w3Op46rRXzp7fEDJgqlth2TgW7wZeJBuQhM2e0ccB/r4EvpWuks3t7Na4MNpm3GcoJ+T5MNqg0SakVFEYHTPheUQrXrRSTQqjaJLwHdR6V9AdSkxkzervDwELEhPZXvN/WSCR7YwlMjRd73erZ9N6u6b94UhkicFu+GEtT9Y5D7A6iE7npgpvKPDljpxiTgq0VDTlFHObc94ZyuJR1GluCJ28hUrgnirK6f6IrIrSkJb0VZfTFnMTQmNG0qx8CLyuB2C2oXltHA1NKyWgyQgc1AQ2ES3lsLqK7Ymlna0ZC4xAEY6GuKW6yn3aoFersBwE9OrXaTNh0zY14sI1o9kIlDAXwhxNMBnfCT1KyY5VNjkf/0GPYkLYGKt5qsWlRqAcOuVhoXOt3bqqs91hlXytywvkbDC8YnzNmGKSybFIRFgRSDwHzf/RQKnsYV3oTkrCYSO06FhQcE9OSBw1HV4RvijoN8aNl4xQOQIvQr2eYnsD5AQuhpmm7hkt86Zmvks8twd4pEa5LXABaKlTL0FSFmobJaPTGbFVS265InoD+CmgcI9eM1VcLnnGnTxPA55yridVaKlodE1FER3VDY0WYFtz+I5o8/SXG98+UXfPs7QcyFP8sN4niC97SLL6JsH4zxOvsWrCPK3zJWa/rEcwLQmX3LKqV+ut5M9O8e+0143W+/8nnKe9Ren3wqfBf4R/AWhWQRZXSbidAAAAAElFTkSuQmCC" />
            </li>
            <li>

            </li>
          </ul>
        </div>
      </article>

      {/* <div className="tecnoligias">
        <div className="herramientas">
          <h1 className='title'>Tecnologías</h1>
          Tengo conocimientos en tecnologías como:
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

      </div> */}

    </div>
  )
}

export default About