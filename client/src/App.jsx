import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import axios from "axios";
import Students from './components/Students';
import AddStudent from './components/AddStudent/AddStudent';
import EditStudent from './components/EditStudent';

function App() {
  // axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.baseURL = "https://mernmachinetask.onrender.com";

  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/students/edit-student-details/:id" element={<EditStudent />} />
      </Routes>
    </div>
  )
}

export default App
