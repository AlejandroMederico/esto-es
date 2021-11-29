import {React,useState,useEffect} from 'react'
import { Modal ,Button} from 'react-bootstrap';
import {useSelector,useDispatch } from 'react-redux'
import { actualizarNumeroIdAction,actualizarPROJECTAction } from '../redux/EstadisticaDuck';

export default function ModalDelete({modalDelete}) {
  
  const dispatch= useDispatch()
  let arrayProject = useSelector(store => store.EstadisticaArray.project);
  let ProjectRedux = useSelector(store => store.EstadisticaArray.numeroID);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect(() => {
      setShow(modalDelete)
    }, [modalDelete])
    
    const borrarProjecto = () =>{
      console.log(ProjectRedux.id);
      let arrayNuevoProject = arrayProject.filter(proje => proje.id != ProjectRedux.id) 
      dispatch(actualizarPROJECTAction(arrayNuevoProject))
      setShow(false)
  }
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>If you want to delete the selected project, click "Delete Project"</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={borrarProjecto}>
              Delete Project
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
