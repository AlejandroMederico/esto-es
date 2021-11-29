import React, { useState,useEffect } from 'react'
import { Form,Button,Modal } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import {agregarAlPROJECTAction} from '../redux/EstadisticaDuck'
import "./pagina.css"
import uniqid from 'uniqid';
import NavPaginas from '../componente/Nav/NavPaginas'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Formulario({url}) {
    
    let editarProject = useSelector(store => store.EstadisticaArray.numeroID);
    let arrayReduxProject = useSelector(store => store.EstadisticaArray.project);
    const dispatch= useDispatch()
    const valorInicial= {
        project:"",
        descripcion: "",
        manager:"",
        person:"",
        status:""
    }
    const [btnEdit, setbtnEdit] = useState(false)
    const [modalDelete, setmodalDelete] = useState(false)
    const [formulario, setformulario] = useState(valorInicial);
    const [errorFormulario, seterrorFormulario] = useState({
        ErrorProject:false,
        ErrorDescripcion: false,
        ErrorManager:false,
        ErrorPerson:false,
        ErrorStatus:false
    })
useEffect(() => {
    if(url === "editar"){
        // console.log(editarProject);
        if(editarProject !== null)setformulario(editarProject);
        setbtnEdit(true)
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [url])
    const handleChange = (e) =>{
      const {name,value} = e.target;
      setformulario({
          ...formulario,[name]:value
      });
      switch (name) {
          case "project":
                const ErrorProject = (value.length < 3) ;
                seterrorFormulario({...errorFormulario,ErrorProject})
              break;
          case "descripcion":
                const ErrorDescripcion = (value.length < 8) ;
                seterrorFormulario({...errorFormulario,ErrorDescripcion})
              break;
          default:
              break;
      }
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      if (btnEdit=== false) {
        //   console.log("guardar");
          let today = new Date(),
          date = today.getDate() + '/' + (today.getMonth() + 1) + '/' +today.getFullYear()
          + ' ' +today.getHours() + ':' + today.getMinutes() ;
        //   console.log(date);
          formulario.FechaCreacion = date;
          formulario.id=uniqid()
          setformulario(valorInicial)
          dispatch(agregarAlPROJECTAction(formulario))  
        } else {
            // console.log("editar");
           arrayReduxProject.forEach(projecto => {
              if(projecto.id === editarProject.id){

                    projecto.project=formulario.project;
                    projecto.descripcion= formulario.descripcion;
                    projecto.manager=formulario.manager;
                    projecto.person=formulario.person;
                    projecto.status=formulario.status;
                }})
      }
      setmodalDelete(true)
    }
    const handleClose = () =>{
        setmodalDelete(false)
    }
    return (
        <div >
            <NavPaginas url={url}/>
            <Form className="formulario mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" 
                controlId="formBasicProjectName">
                    <Form.Label className="FormularioLabel">Project Name</Form.Label>
                    <Form.Control 
                        className="FormularioControl"
                        required
                        type="text"
                        name="project"
                        value={formulario.project}
                        onChange={handleChange}
                        placeholder="Enter Name " />
                        {errorFormulario.ErrorProject && <p className="text-start text-danger" >
                        Ingrese minimo 3 caracteres.</p>}
                </Form.Group>

                <Form.Group className="mb-3" 
                controlId="formBasicDescripcion">
                    <Form.Label className="FormularioLabel">Descripcion</Form.Label>
                    <Form.Control 
                        className="FormularioControl"
                        required
                        type="text" 
                        name="descripcion"
                        value={formulario.descripcion}
                        onChange={handleChange}
                        placeholder="Enter Descripcion " />
                          {errorFormulario.ErrorDescripcion && <p className="text-start text-danger" >
                        Ingrese minimo 8 caracteres.</p>}
                </Form.Group>

                <Form.Group className="mb-3" 
                controlId="formBasicProjectManager">
                    <Form.Label className="FormularioLabel">Project Manager</Form.Label>
                    <Form.Select 
                    className="FormularioControl"
                    required
                    name="manager"
                    value={formulario.manager}
                    onChange={handleChange}
                    aria-label="Default select example">
                        <option value="">Select a person</option>
                        <option value="Alejandro Mederico">Alejandro Mederico</option>
                        <option value="Jaiza Joa">Jaiza Joa</option>
                        <option value="Manzur Mederico">Manzur Mederico</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" 
                controlId="formBasicAssignedTo">
                    <Form.Label className="FormularioLabel">Assigned To</Form.Label>
                    <Form.Select 
                    className="FormularioControl"
                    required
                    name="person"
                    value={formulario.person}
                    onChange={handleChange}
                    aria-label="Default select example">
                        <option value="">Select a person</option>
                        <option value="Ramon Joa">Ramon Joa</option>
                        <option value="Diana Gonzalez">Diana Gonzalez</option>
                        <option value="Marcos jo">Marcos joa</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3" 
                controlId="formBasicStatus">
                    <Form.Label className="FormularioLabel">Status</Form.Label>
                    <Form.Select 
                    className="FormularioControl"
                    required
                    name="status"
                    value={formulario.status}
                    onChange={handleChange} 
                    aria-label="Default select example">
                        <option value="">None</option>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </Form.Select>
                </Form.Group>
                <Button className="btn-formulario" 
                style={{background:"#F5222D"}} 
                type="submit"
                >
                  {btnEdit === false ? "Create Project" : "Save Changes"}  
                </Button>
            </Form>
            <Modal show={modalDelete} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Successful Process</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>If you want to delete the selected project, click "Delete Project"</Modal.Body> */}
                <Modal.Footer className="medio">
                    <button onClick={handleClose} className="iconOk">
                         <FontAwesomeIcon icon={faCheckCircle} />                               
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
