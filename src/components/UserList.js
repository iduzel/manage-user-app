import { Modal, Button, Alert } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const UserList = () => {
  const { sortedUsers } = useContext(UserContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
 

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert();
    };
  }, [sortedUsers]);

  const indexOfLastUser = currentPage * usersPerPage;
 
  
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser)
  const totalPagesNum = Math.ceil(sortedUsers.length / usersPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Users</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New User</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        User List updated successfully!
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers            
            .map((user) => (
              <tr key={user.id}>
                <User user={user} />
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination pages ={totalPagesNum} 
                  setCurrentPage ={setCurrentPage}
                  currentUsers={currentUsers}
                  sortedUsers={sortedUsers} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <AddForm />

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="danger">
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
