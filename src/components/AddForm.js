
import { Form, Button, FormControl } from 'react-bootstrap';
import {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext';

const AddForm = () => {

    const {addUser} = useContext(UserContext)

    const [newUser, setNewUser] =useState({
        name:"", email:"", address:"",phone:""
    });

    const onInputChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const {name, email, address, phone} = newUser;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, email, address, phone)
    }

  return (
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
              <FormControl
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e) }
                  required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <FormControl
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e) }
                  required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <FormControl
                  as="textarea"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={(e) => onInputChange(e) }
                 rows={3}
              />
          </Form.Group >
          <Form.Group className="mb-3">
              <FormControl
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => onInputChange(e) }
                
              />
          </Form.Group>

          <Button  variant="success" type="submit" block="true" >Add New User</Button>
      </Form>
  )
};

export default AddForm;


