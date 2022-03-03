
import { Form, Button, FormControl } from 'react-bootstrap';
import {useContext, useState} from 'react'
import { EmployeeContext } from '../context/EmployeeContext';


const EditForm = ({theEmployee}) => {  
    
    const id = theEmployee.id

    const [name, setName] = useState(theEmployee.name)
    const [email, setEmail] = useState(theEmployee.email)
    const [address, setAddress] = useState(theEmployee.address)
    const [phone, setPhone] = useState(theEmployee.phone)

    const {updateEmployee} = useContext(EmployeeContext)

    const updatedEmployee = {id, name, email, address, phone}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)

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

          <Button  variant="success" type="submit" block="true">Edit Employee</Button>
      </Form>
  )
};

export default EditForm;


