import React from 'react'
import 'bootstrap'
import '../styles/Navbar.css'
import {Link} from "react-router-dom"

export function Navbar () {
    return (
        <div className="container n py-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <Link to='/'>Композиции</Link>
                <Link to='/upload'>Загрузить</Link>
            </nav>
        </div>
    )
}



