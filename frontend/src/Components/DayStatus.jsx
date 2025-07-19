import "../css/DayStatus.css"
import completeImage from "../assets/Images/task_alt.png"
import incompleteImage from "../assets/Images/motion_photos_on.png"
function DayStatus({day, complete})
{
    return <div className="dayContainer">
        <img src={complete? completeImage : incompleteImage} alt="status-icon"/>
        <p>{day}</p>
    </div>
}

export default DayStatus;