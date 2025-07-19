import "../css/UserProfile.css";

function UserProfile({patient, onPrimaryAction })
{
    const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
    return <div className="profile-account">
        <div className="profile-avatar">
        {getInitials(patient.name)}
      </div>

      <div className="profile-info">
        <h3 className="user-name">{patient.name}</h3>
        <p>Last Activity {" Mar 20, 2019 23:14"}</p>
        <button className="primary-btn" onClick={onPrimaryAction}>
          Start Session
        </button>

      </div>
      <div className="header-action">
      </div>
    </div>
}

export default UserProfile;