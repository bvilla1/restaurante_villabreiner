import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Ruteo } from './app/utilidades/Rutas/Ruteo'
import { Cabecera } from './app/componentes/contenedor/Cabecera'

function App() {

  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>

          <Cabecera />

          <Ruteo />

        </BrowserRouter>
        este es el punto de acceso a la aplicacion
      </div>

    </>
  )
}

export default App
