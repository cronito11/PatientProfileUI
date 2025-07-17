import "../css/Patients.css"
import { Link } from "react-router-dom";
import { usePatientContext } from "../Context/PatientContext";

function Patient()
{
    const { patients } = usePatientContext();
    
    return<div className="Patients">
    <h1>Patients List</h1>
<ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    
     </div>
}

export default Patient;