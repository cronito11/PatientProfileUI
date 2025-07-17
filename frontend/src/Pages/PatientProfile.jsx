import "../css/PatientProfile.css"
import { useParams } from "react-router-dom";
import { usePatientContext } from "../Context/PatientContext";
import HEPSummaryCard from "../Components/HEPSummaryCard";
import InfoCard from "../Components/InfoCard";
import StatsCard from "../Components/StatsCard" 
import PatientEducation from "../Components/PatientEducation";
import PatientHeader from "../Components/PatientHeader";
function PatientProfile()
{
    const { patientId } = useParams();
  const { patients } = usePatientContext();
  const patient = patients.find((p) => p.id === patientId);

  if (!patient) return <p>Patient not found</p>;

    return<>
        <PatientHeader 
            key={patient.id+"Header"}
            patient = {patient}
            onPrimaryAction = {() => alert("Is not possible start session now, try later. " + patient.name)}
        />
      {<InfoCard 
        key = {patient.id}
        patient = {patient}
        />}
        <div className="HEP-Grid">

      {patient.heps.map((hep) => (
          <HEPSummaryCard
          key={hep.id}
          patientId={patient.id}
          patientName={patient.name}
          hep={hep}
          />
        ))}
        </div>
      {<StatsCard 
        key = {patient.id+"Stats"}
        stats = {patient.stats}
      />
      }
      {<PatientEducation
        key = {patient.id+"Education"}
        />
      }
    </>
}

export default PatientProfile;