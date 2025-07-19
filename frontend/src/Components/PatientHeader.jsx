import InfoCard from "./InfoCard";
import UserProfile from "./UserProfile";
import RouteInfo from "./RouteInfo";
import "../css/PatientHeader.css"

function PatientHeader({ patient, onPrimaryAction }) {
  

  return (
    <div className="patient-header">
      <RouteInfo 
        key={"Route"}
        route = {`Dashboard/${patient.name}`}
        />
      <div className="patient-account-info">
        <UserProfile 
          patient={patient}
          onPrimaryAction = {onPrimaryAction}
        />
        <InfoCard 
          patient={patient}
          />
      </div>
    </div>
  );
}

export default PatientHeader;