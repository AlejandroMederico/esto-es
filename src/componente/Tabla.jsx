import React from 'react'
import FilaTabla from './FilaTabla'
import "./tabla.css"
import MediaQuery from 'react-responsive'

export default function Tabla({searchProject}) {
    return (
        <table className="table" style={{background:"#FFFFFF",verticalAlign:"middle"}} >
            <MediaQuery minWidth={700}> 
            <thead className="sinBorde ">
                <tr style={{height:"60px"}} >
                <th scope="col" className="col-4">Project</th>
                <th scope="col" className="col-3">Project Manager</th>
                <th scope="col" className="col-3">Assigned to</th>
                <th scope="col" className="col-1">Status</th>
                <th scope="col" className="col-1">Action</th>
                </tr>
            </thead>
            </MediaQuery>
            <tbody >
                 <FilaTabla  searchProject={searchProject}/>
            </tbody>
    </table>
    )
}
