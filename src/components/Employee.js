import React, {useContext, useEffect, useState} from "react";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";


import {EmployeeContext} from '../context/EmployeeContext'
import EditForm from "./EditForm";

function Employee({employee}) {

    const { deleteEmployee, updateEmployee} = useContext(EmployeeContext)

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose()
}, [employee])
  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger
            overlay={
              <Tooltip id={`tooltip-top`}>
                  Edit
              </Tooltip>
            }> 
            <button onClick={handleShow} className="btn text-warning btn-act"data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
       </OverlayTrigger>

       <OverlayTrigger
            overlay={
              <Tooltip id={`tooltip-top`}>
                  Delete
              </Tooltip>
            }> 
            <button  onClick={() => deleteEmployee(employee.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">  &#xE872; </i> </button>
       </OverlayTrigger>
       
        
          
          
         
       
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm  theEmployee={employee}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Employee;
