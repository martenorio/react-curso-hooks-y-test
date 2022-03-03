import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  // obtener referencia al context
  const {user, setUser} = useContext(UserContext)
  //data para setUser
  const loginUser = {
    id:423234,
    name:'Miguel Angel Ramirez Tenorio',
  }
  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />
        <button 
        className='btn btn-primary' 
        onClick={() => setUser(loginUser)}
        >
          login
        </button>
    </div>
  )
}
