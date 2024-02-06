import { useState } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import axios from "axios";
import Students from './components/Students';
import AddStudent from './components/AddStudent/AddStudent';

function App() {
  axios.defaults.baseURL = "http://localhost:3000";

  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </div>
  )
}

export default App
