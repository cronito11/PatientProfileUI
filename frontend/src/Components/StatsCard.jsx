import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../css/StatsCard.css"

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
    <h3>Stats & Actions</h3>
     <div className="streaks-placeholder">
        <CircularProgressbar value={progress1} text={`${progress1}%`} />
        <CircularProgressbar value={progress2} text={`${progress2}%`} />
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
    <div className="horizontal stats-btn">
         <button 
        className="primary-btn"
        type="button"
        onClick={handleViewStats}
      >View Stats</button>

      <button 
        className="secondary-btn"
        type="button"
        onClick={handleBillingDetails}
      >View Billing Details</button>
    </div>
 </div>
}

export default StatsCard;