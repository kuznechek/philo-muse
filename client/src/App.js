import React from 'react'
import 'bootstrap'
import './styles/App.css'
import {Main} from './components/Routs'
import {Navbar} from "./components/Navbar"
import {Header} from "./components/Header"

function App() {
  return (
      <div className="App">
          <Header/>
          <Navbar/>
          <Main/>
      </div>
  )
}

export default App


