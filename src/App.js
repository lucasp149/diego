import logo from './logo.svg';
import './App.css';
import Curriculum from "./pages/curriculum.js";
import Goles from "./pages/goles.js";
import Inicio from "./pages/inicio.js"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Presentation from './components/presentation';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="home" element={<Presentation />}></Route>
        <Route path="curriculum" element={<Curriculum />}></Route>
        <Route path="goles" element={<Goles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
