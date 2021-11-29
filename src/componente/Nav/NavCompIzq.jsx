import React, { Fragment } from 'react'
import {Link} from "react-router-dom";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./nav.css"

export default function NavCompIzq({url,titulo}) {
    return (
        <div className="d-flex flex-row ">
            {url === "home"
            ?<Fragment/>
            :<Fragment>
                <Link to="/" className="d-flex align-items-center" style={{textDecoration:"none"}}>
                <FontAwesomeIcon icon={faArrowLeft} className="iconFlecha"/>
                <p className="back">Back</p>
                </Link>
                
            </Fragment>}
             <p className="componenteIzqTitulo my-auto">{titulo}</p>
        </div>
    )
}
