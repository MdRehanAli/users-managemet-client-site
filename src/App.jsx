import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [users, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])


  return (
    <>

      <h1>Users Management System. </h1>
      <h3>Numbers of data {users.length}</h3>
      {
        users.map(user => <p key={user.id}>{user.id}: {user.name}: {user.email}</p>)
      }

    </>
  )
}

export default App
