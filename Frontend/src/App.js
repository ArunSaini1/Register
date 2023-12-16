import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeRedux from './Components/HomePage'
import AddUser from './Components/AddNewUser'
import UpdateUser from './Components/UpdateUser'

export default function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<HomeRedux/>} />
          <Route path='/adduser' element={<AddUser/>} /> 
        <Route path='/user/:id' element={<UpdateUser/>} /> 
      </Routes>
    </div>
  )
}
