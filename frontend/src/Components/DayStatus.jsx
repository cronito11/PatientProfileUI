import "../css/DayStatus.css"
import completeImage from "../assets/Images/task_alt.png"
import incompleteImage from "../assets/Images/motion_photos_on.png"
function DayStatus({day, complete, addBorder})
{
    return <div className="dayContainer">
        <img src={complete? completeImage : incompleteImage} alt="status-icon" className={addBorder ? "left-border": ""}/>
        <p className={addBorder ? "left-border": ""}>{day}</p>
    </div>
}


export default DayStatus;