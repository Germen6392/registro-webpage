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
    <h2>Regístrate</h2>
    <form>
      <Form label="Nombre" inputType="text" placeholderValue="Nombre"/>
      <Form label="Apellido" inputType="text" placeholderValue="Apellido"/>
      <Form label="Email" inputType="email" placeholderValue="correo@correo.com"/>
      <Form label="Teléfono" inputType="phone" placeholderValue="1234567890"/>
      <Form label="Coloca una clave" inputType="password" placeholderValue=""/>
      <Form label="Repite tu clave" inputType="password" placeholderValue=""/>
      <button type='submit'>Enviar</button>
    </form> 
    </>
  )
}

export default App
