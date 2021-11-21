import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <h1>Hola desde React!</h1>
      <NavBar nombre = "Fabian" apellido = "Herrera"/>
      <Menu cedula = "80.220.616" correo = "fh.herrera@gmail.com" celular = "317 360 0776"/>
    </div>
  );
}

export default App;
