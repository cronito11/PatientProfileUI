import { useState } from 'react'
import './css/App.css'
import {Routes, Route} from "react-router-dom"
import {PatientProvider } from './Context/PatientContext'
import Home from "./Pages/Home";
import PatientProfile from "./Pages/PatientProfile"
import Patients from "./Pages/Patients"
import SideNav from './Components/SideNav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <PatientProvider>
      <SideNav/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/patients" element={<Patients />}/>
          <Route path="/patients/:patientId" element={<PatientProfile />}/>
        </Routes>
      </main>
    </PatientProvider>
  )
}

export default App
