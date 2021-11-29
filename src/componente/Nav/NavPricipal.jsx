import {React,useState} from 'react'
import Logo from "../../img/logo.png"
import {Link} from "react-router-dom";
import "./nav.css";
import {useSelector,useDispatch } from 'react-redux'
import { actualizarFiltradoAction } from '../../redux/EstadisticaDuck';


export default function NavPricipal({ProjectSearch}) {
    const dispatch= useDispatch()
    const arrayRedux = useSelector(store => store.EstadisticaArray.project);
    const [searchForm, setsearchForm] = useState({
        search:""
    })
    const handleChange = (e) =>{
       const  {name,value} = e.target
       setsearchForm({...searchForm,[name]:value})
       if(value.length === 0){
        dispatch(actualizarFiltradoAction([]))
       }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (arrayRedux.length > 0 ) {
            const llavesQuery = Object.keys(arrayRedux[0]);
            let respuestaProject = [...arrayRedux];
            respuestaProject = respuestaProject.filter((_project) => {
            let resultado = false;
            for (const llave of llavesQuery) {
                const expresionRegular = new RegExp(searchForm.search, "ig");
                resultado = expresionRegular.test(_project[llave])
                if (resultado) {
                    break;
                }
            }
            return resultado;
        });       
        dispatch(actualizarFiltradoAction(respuestaProject))
        }
    }
 

    return (
        <nav className="navbar navPrincipal">
            <Link to="/esto-es">
                <img src={Logo} alt="Logo esto es" width="40" height="32" />
            </Link>
            <form className="d-flex formularioSeachr" onSubmit={handleSubmit}>
                <input 
                name="search"
                value={searchForm.search}
                onChange={handleChange}
                type="search" placeholder="Search" 
                aria-label="Search"
                className="form-control  formularioSeachrInput" />
                <button className=" btn-outline-success formularioSeachrButton" type="submit">Search</button>
            </form>
        </nav>
    )
}
