import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import author from './author.jpg'
import { CgWebsite } from 'react-icons/cg'
import { GiGears } from 'react-icons/gi'
import { IoIosRocket } from 'react-icons/io'

function App () {
  return (
    <>
      <nav id='nav' className='navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Portfolio
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#home'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#expertise'>
                  Expertise
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#projects'>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className='jumbotron text-center'>
        <img src={author} alt='Sultan Raffy' width='200px' className='rounded-circle img-thumbnail' />
        <h1 className='display-4'>Sultan Raffy</h1>
        <p className='lead'>Student | Science Computer</p>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ffffff'
            fillOpacity='1'
            d='M0,32L40,26.7C80,21,160,11,240,37.3C320,64,400,128,480,160C560,192,640,192,720,176C800,160,880,128,960,112C1040,96,1120,96,1200,106.7C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
          />
        </svg>
      </section>

      <section id='about'>
        <div className='container'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h2>About Me</h2>
            </div>
          </div>
          <div className='row fs-5 text-center justify-content-center'>
            <div className='col-md-6'>
              <div className='about-content'>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate debitis quae eum harum soluta cupiditate autem veritatis magni? Delectus deleniti ipsam iusto alias, cum voluptatibus aspernatur ut reprehenderit odio
                  neque?
                </p>
                <ul className='clearfix'>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Date of birth:</span> 29 August 2000
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Email:</span> sraffy15@gmail.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Phone:</span> +62-812-7155-7139
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='info d-flex align-items-center'>
                      <div className='info-text'>
                        <p className='text'>
                          <span className='span-text'>Location:</span> Lubuklinggau Sumatera Selatan
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis quos doloribus eaque aperiam rem alias sapiente, porro quod pariatur explicabo inventore dicta sint. Vitae repellendus dolorem earum nihil ea.</p>
            </div>
          </div>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#e2edff'
            fillOpacity='1'
            d='M0,64L48,64C96,64,192,64,288,101.3C384,139,480,213,576,245.3C672,277,768,267,864,218.7C960,171,1056,85,1152,74.7C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          />
        </svg>
      </section>

      <section id='expertise'>
        <div className='container'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h2>Area of Expertise</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <GiGears color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text fw-bold text-center fs-3'>Web Development</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <CgWebsite color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text fw-bold text-center fs-3'>Web Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ffffff'
            fillOpacity='1'
            d='M0,32L48,32C96,32,192,32,288,69.3C384,107,480,181,576,213.3C672,245,768,235,864,202.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          />
        </svg>
      </section>

      <section id='projects'>
        <div className='container'>
          <div className='row text-center mb-3'>
            <div className='col'>
              <h2>Projects</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IoIosRocket color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text text-center fw-bold'>On Progress</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IoIosRocket color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text text-center fw-bold'>On Progress</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <div className='card'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <IoIosRocket color='#0d6efd' size={128} />
                </div>
                <div className='card-body'>
                  <p className='card-text text-center fw-bold'>On Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#0d6efd'
            fillOpacity='1'
            d='M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,101.3C672,117,768,171,864,170.7C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          />
        </svg>
      </section>

      <footer className='bg-primary text-white text-center pb-5'>
        <h4>Sultan Raffy 118140198</h4>
        <p>Praktikum Web Lanjut 2</p>
      </footer>
    </>
  )
}

export default App
