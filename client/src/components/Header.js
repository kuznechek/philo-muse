import React from 'react'
import 'bootstrap'
import '../styles/App.css'
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <div className="Main">
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm align-items-center">
                    <div className="m-auto text-decoration-none text-light">
                        <Link to='/'><strong> PhiloMuse </strong></Link>
                    </div>
                </div>
            </header>
            <main>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active banner-1">
                            <div className="col-md-5 p-lg-5 mx-auto my-5">
                                <h1 className="display-4 fw-normal"><strong>PhiloMuse</strong> - простой музыкальный плеер</h1>
                                <p className="lead fw-normal">Выберите композицию для прослушивания или загрузите свою собственную!</p>
                            </div>
                        </div>
                        <div className="carousel-item banner-2">
                            <div className="col-md-5 p-lg-5 mx-auto my-5">
                                <h1 className="display-4 fw-normal"><strong>Загружайте вашу любимую музыку</strong> к нам на сервер</h1>
                                <p className="lead fw-normal">И слушайте в своё удовольствие (:</p>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}