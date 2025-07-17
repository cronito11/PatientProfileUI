import "../css/PatientHeader.css"

function PatientHeader({ patient, onPrimaryAction }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="patient-header card horizontal">
      <div className="patient-avatar">
        {getInitials(patient.name)}
      </div>

      <div className="patient-info">
        <h2>{patient.name}</h2>
      </div>

      <div className="header-action">
        <button className="primary-btn" onClick={onPrimaryAction}>
          Start Session
        </button>
      </div>
    </div>
  );
}

export default PatientHeader;