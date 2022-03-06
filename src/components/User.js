import React, {useContext, useEffect, useState} from "react";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";


import {UserContext} from '../context/UserContext'
import EditForm from "./EditForm";

function User({user}) {

    const { deleteUser, updateUser} = useContext(UserContext)

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose()
}, [user])
  return (
    <>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
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
            <button  onClick={() => deleteUser(user.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">  &#xE872; </i> </button>
       </OverlayTrigger>
       
        
          
          
         
       
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm  theUser={user}/>
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

export default User;
