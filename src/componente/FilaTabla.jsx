import {Fragment, React,useState,useRef} from 'react'
import { faEllipsisV,faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector,useDispatch } from 'react-redux'
import { Overlay,Popover,Modal,Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./tabla.css"
import Avatar from 'react-avatar';
import MediaQuery from 'react-responsive'
import { actualizarNumeroIdAction,actualizarPROJECTAction } from '../redux/EstadisticaDuck';

export default function FilaTabla({searchProject}) {  
    const dispatch= useDispatch()
    const arrayFiltrado = useSelector(store => store.EstadisticaArray.filtrado);
    let arrayProject = useSelector(store => store.EstadisticaArray.project);
    const projectReduxBorrar = useSelector(store => store.EstadisticaArray.project);
    let ProjectRedux = useSelector(store => store.EstadisticaArray.numeroID);
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const [target, setTarget] = useState(null);
    const [modalDelete, setmodalDelete] = useState(false)

    const borrarProjecto = () =>{
        setmodalDelete(true)
        setShow(false)
    }
    const handleClose = () => setmodalDelete(false);

    

    const borrarProjectoModal = () =>{
      let arrayNuevoProject = projectReduxBorrar.filter(proje => proje.id !== ProjectRedux.id) 
      dispatch(actualizarPROJECTAction(arrayNuevoProject))
      setmodalDelete(false);
    }
    let arrayFilasProject;
    if(arrayFiltrado.length > 0 ){
        arrayFilasProject = arrayFiltrado
    }else {
        arrayFilasProject = arrayProject
    }

   
    return (
        <Fragment>
            {
                (arrayFilasProject !== undefined || arrayFilasProject.length > 0)
                ?<Fragment>
                   {
                       arrayFilasProject.map(project =>{
                           return(<tr key={project.id} className="FilaGeneral">
                               
                                    <td className="FilaProject">
                                            <p className="FilaProjectName">{project.project}</p>
                                            <p className="FilaProjectDate">Creation Date: {project.FechaCreacion}</p>
                                    </td>
                                    <MediaQuery minWidth={700}> 
                                        <td >
                                            <div className="d-flex">
                                                <Avatar
                                                className="AvatarNombre"
                                                size="24"
                                                color="#FFE0B3"
                                                fgColor="#CA4A02"
                                                round={true}
                                                name={project.manager} />
                                                <p className="FilaProjectName" >{project.manager}</p>
                                            </div>                                    
                                        </td>
                                    </MediaQuery>
                                    <td className="FilaPersona">
                                        <div className="d-flex">
                                        <Avatar
                                        className="AvatarNombre" 
                                        size="24" 
                                        round={true} 
                                         src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
                                            <p className="FilaProjectName" >{project.person}</p>
                                        </div>                                    
                                        
                                    </td>
                                    <MediaQuery minWidth={700}> 
                                    <td className="my-auto">
                                        <p className="btnTablaEnable" style={{background:"#F5F5F5"}}
                                        >{project.status}</p>
                                    </td>
                                    </MediaQuery>
                                    <td ref={ref} className="FilaBotonMenu">
                                        <button  style={{background:"white",border:"none"}}
                                        onClick={(event) => {
                                            setShow(!show);
                                            setTarget(event.target);
                                            dispatch(actualizarNumeroIdAction(project))
                                          }}
                                        type="">
                                            <FontAwesomeIcon icon={faEllipsisV} className="iconFlecha"/>
                                        </button >
                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="bottom"
                                            container={ref}
                                            containerPadding={20}
                                            // popperConfig={transform: translate("98px", "0px")}
                                        >
                                            <Popover id="popover-contained">
                                            <Popover.Body className="bodyPopover d-flex flex-column">
                                                
                                                <Link to="/editar" 
                                                style={{textDecoration:"none"}}
                                                className="d-flex flex-row">
                                                    <FontAwesomeIcon icon={faEdit} className="iconFlecha"/>
                                                    <p className="textPopover">Edit</p>
                                                </Link>
                                                <button className="btnDelete"
                                                onClick={borrarProjecto}>
                                                    <FontAwesomeIcon icon={faTrashAlt} className="iconFlecha"/>
                                                    <p className="pDelete">Delete</p>
                                                </button>
                                            </Popover.Body>
                                            </Popover>
                                        </Overlay>
                                    </td>
                                </tr>)
                       })
                   }
                </Fragment> 
                :   <Fragment>
                    <tr>
                        <td>No hay Project </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </Fragment>
            }
             <Modal show={modalDelete} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>If you want to delete the selected project, click "Delete Project"</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="danger" onClick={borrarProjectoModal}>
                    Delete Project
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
