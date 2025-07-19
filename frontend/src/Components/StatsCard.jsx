import DayStatus from './DayStatus';
import 'react-circular-progressbar/dist/styles.css';
import "../css/StatsCard.css"
import fireIcon from "../assets/Images/fire.png"

function StatsCard({stats})
{
    const handleViewStats = () => 
    {
        alert("The option View Stats is not available for the moment.");
    }

    const handleBillingDetails = () => 
    {
        alert("The option View Billing Details is not available for the moment.");
    }
    
    const { progress1 = 66, progress2 = 80 } = stats;
    
    return      <div className="stats-actions-panel card">
      <div className='stats-section'>
        <div className='stats-info'>
        <div className='stats-header'>

          <div className='Stat-title-container'>
             <h3>Stats</h3>
             <p>for period 3</p>
            </div>
            <div className='streaks-section'>
              <h4>Streaks</h4>
              <p>1 <img src={fireIcon} alt='fireIcon' className='fireIcon'/></p>
            </div>
        </div>
             <div className='week-status'>
          <DayStatus 
           key={"Day1"}
           day="Wed"
           succes={false}
           />
          </div>
          <div className="stats horizontal">
        <div className="stats-info">
            <label>Weeks Enrolled: </label>
            <span>{stats.weeksEnrolled}</span>
        </div>
        <div className="stats-info">
              <label>Compliance: </label>
              <span>{stats.compliance}</span>
        </div>
        </div>
        </div>
       
    
        
         <button 
        className="primary-btn"
        type="button"
        onClick={handleViewStats}
      >View Stats</button>
    </div>
    <button 
        className="secondary-btn"
        type="button"
        onClick={handleBillingDetails}
      >View Billing Details</button>
 </div>
}

export default StatsCard;