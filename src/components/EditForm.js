
import { Form, Button, FormControl } from 'react-bootstrap';
import {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext';


const EditForm = ({theUser}) => {  
    
    const id = theUser.id

    const [name, setName] = useState(theUser.name)
    const [email, setEmail] = useState(theUser.email)
    const [address, setAddress] = useState(theUser.address)
    const [phone, setPhone] = useState(theUser.phone)

    const {updateUser} = useContext(UserContext)

    const updatedUser = {id, name, email, address, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, updatedUser)

    }
  



  return (
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
              <FormControl
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <FormControl
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
          </Form.Group>

          <Form.Group className="mb-3">
              <FormControl
                  as="textarea"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                 rows={3}
              />
          </Form.Group >
          <Form.Group className="mb-3">
              <FormControl
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={phone}  
                  onChange={(e) => setPhone(e.target.value)}         
                 
              />
          </Form.Group>

          <Button  variant="success" type="submit" block="true">Edit User</Button>
      </Form>
  )
};

export default EditForm;


