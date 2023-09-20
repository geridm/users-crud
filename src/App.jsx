import { useEffect, useState } from 'react'
import './App.css'
import './assets/style/FormUser.css'
import'./assets/style/UserCard.css'
import FormUser from './components/FormUser'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'





function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  const [show, setShow] = useState(false)

  useEffect(() => {
    getUsers('/users')
  }, []) 
  
  const handleShow = () => {
    setShow(true)
  }

  console.log(users)

  return (
      <div className='principal'>
        <div className='principal__container'>
          <h1 className='principal__title'>Usuarios</h1>
          <button className='principal__btn' onClick={handleShow} ><i className='bx bx-plus'></i> Crear nuevo usuario</button>
        </div>
        <div className={`${show ? 'form__show' : 'principal__form'}`}>
        <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        setShow={setShow}
        />
        </div>
        
        <div>
          {
            users?.map(user => ( 
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setInfoUpdate={setInfoUpdate}
                setShow={setShow}
                />
              ))
          }
          </div>
      </div>
      
      
  )
}

export default App
