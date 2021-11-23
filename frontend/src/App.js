import 'bootstrap/dist/css/bootstrap.min.css';

/*import NavBar from "./components/NavBar";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <h1>Hola desde React!</h1>
      <NavBar nombre = "Fabian" apellido = "Herrera"/>
      <Menu cedula = "80.220.616" correo = "fh.herrera@gmail.com" celular = "317 360 0776"/>
    </div>
  );
}*/

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./screens/Landing";
import Home from "./screens/Home";
import SearchResults from "./screens/SearchResults";
import NotFound from "./screens/NotFound";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
