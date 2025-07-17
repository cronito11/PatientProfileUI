import { useParams } from "react-router-dom";
import { usePatientContext } from "../Context/PatientContext";
import HEPSummaryCard from "../Components/HEPSummaryCard";
import InfoCard from "../Components/InfoCard";
import StatsCard from "../Components/StatsCard" 

function PatientProfile()
{
    const { patientId } = useParams();
  const { patients } = usePatientContext();
  const patient = patients.find((p) => p.id === patientId);

  if (!patient) return <p>Patient not found</p>;

    return<div>
      <h2>{patient.name}</h2>
      {<InfoCard 
        key = {patient.id}
        patient = {patient}
        />}
      {patient.heps.map((hep) => (
        <HEPSummaryCard
          key={hep.id}
          patientId={patient.id}
          patientName={patient.name}
          hep={hep}
        />
      ))}
      {<StatsCard 
        key = {patient.id+"Stats"}
        stats = {patient.stats}
      />

      }
    </div>
}

export default PatientProfile;