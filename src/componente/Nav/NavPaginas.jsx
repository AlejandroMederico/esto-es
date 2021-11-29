import React, { Fragment } from 'react'
import NavCompDere from './NavCompDere'
import NavCompIzq from './NavCompIzq'
import "./nav.css"

export default function NavPaginas({url}) {
    const titulo={
      home:"My Project",
      formulario: "Add Project",
      editar:"Edit Project"
    }
    return (
        <nav className="navbar navbar-light bg-light navBoder navPagina" >
        <div className="container-fluid  d-flex align-items-center">
          <NavCompIzq titulo={titulo[url]} url={url}/>
          {url === "home" ? <NavCompDere/> : <Fragment/>}
        </div>
      </nav>
    )
}
