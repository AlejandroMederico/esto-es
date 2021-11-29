import React from 'react'
import {Link} from "react-router-dom";
import "./nav.css"
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavCompDere() {
    return (
        <div>
            <Link to="/formulario" 
            style={{textDecoration:"none"}}
            className="btnAdd d-flex justify-content-start">
                <FontAwesomeIcon icon={faPlus} className="iconfaPlus"/>
                <p className="Pnav" > Add Project</p>
            </Link>
        </div>
    )
}
