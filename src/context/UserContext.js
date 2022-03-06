import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const UserContext = createContext()

const UserContextProvider = (props) => {

    const [users, setUsers] = useState([
        {id:uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
        {id:uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735'},
        {id:uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931'},
        {id:uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'}
    ])

    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('users')))
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    })

   

  

    const sortedUsers = users.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))

    const addUser = (name, email, address, phone) => {
        setUsers([...users, {id:uuidv4(), name, email, address, phone}])
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => user.id === id ? updatedUser : user))
    }

    return (
        <UserContext.Provider value={{sortedUsers, addUser, deleteUser, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;