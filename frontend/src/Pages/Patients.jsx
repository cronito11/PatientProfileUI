import { Link } from "react-router-dom";
import { usePatientContext } from "../Context/PatientContext";

function Patient()
{
    const { patients } = usePatientContext();
    
    return<>
    <h2>Patients List</h2>
<ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    
        </>
}

export default Patient;