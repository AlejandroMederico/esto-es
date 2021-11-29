import {React,useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import generateStore from './redux/store';
import Formulario from "./paginas/Formulario";
import Principal from "./paginas/Principal";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider } from "react-redux";
import NavPricipal from "./componente/Nav/NavPricipal";

function App() {
  const store = generateStore()
  const [searchProject, setsearchProject] = useState(null)
  const ProjectSearch = (search) =>{
    setsearchProject(search)
  }
  return (
      <div style={{background:"#E5E5E5"}}>
        <BrowserRouter>
        <Provider store={store}>
          <NavPricipal ProjectSearch={ProjectSearch}/>
          <Routes>
              <Route path="/" element={
                  <Principal url={"home"} searchProject={searchProject}/>} />
              <Route path="/formulario" element={
                  <Formulario url={"formulario"}/>} />
              <Route path="/editar" element={
                  <Formulario url={"editar"}/>} />
          </Routes>
          </Provider>
        </BrowserRouter>
      </div>
  );
}

export default App;
