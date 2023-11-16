import './App.css'
import Form from './assets/components/Form'
import Navbar from './assets/components/Navbar'

function App() {

  return (
    <>
    <nav>
      <ul>
    <Navbar navItems="Inicio"/>
    <Navbar navItems="Sobre Nosotros"/>
    <Navbar navItems="Argentina Programa"/>
      </ul>
    </nav>
    <h1>Ejercicio 6</h1> 
    <Form/> 
    </>
  )
}

export default App
