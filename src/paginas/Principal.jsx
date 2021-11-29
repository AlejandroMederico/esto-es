import React from 'react'
import NavPaginas from '../componente/Nav/NavPaginas'
import Tabla from '../componente/Tabla'
import "./pagina.css"

export default function Principal({url,searchProject}) {
    return (
        <div>
            <NavPaginas url={url}/>
            <div className="tablaTamano">
                <Tabla searchProject={searchProject}/>
            </div>
            
        </div>
    )
}
