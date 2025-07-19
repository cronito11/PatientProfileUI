import "../css/PatientEducation.css"
import imagePatientEducation from "../assets/Images/RangeMotion.png"
function PatientEducation() {
  return (
    <div className="patient-education card">
      <h4 className="border-bottom">Patient Education</h4>
             <h4>Comming Soon</h4>
             <img src={imagePatientEducation} alt="Range Motion" className="motion-image" />
    </div>
  );
}

export default PatientEducation;