import DayStatus from './DayStatus';
import 'react-circular-progressbar/dist/styles.css';
import "../css/StatsCard.css"
import fireIcon from "../assets/Images/fire.png"
import currencySign from "../assets/Images/attach_money.png"
import callToActionIcon from "../assets/Images/CallAction.png"

function StatsCard({ stats }) {
  const handleViewStats = () => {
    alert("The option View Stats is not available for the moment.");
  }

  const handleBillingDetails = () => {
    alert("The option View Billing Details is not available for the moment.");
  }

  const { progress1 = 66, progress2 = 80 } = stats;

  return <div className="stats-actions-panel card">
    <div className='stats-section'>
      <div className='stats-info'>
        <div className='stats-header'>

          <div className='Stat-title-container'>
            <h3>Stats</h3>
            <p>for period 3</p>
          </div>
          <div className='streaks-section'>
            <h4>Streaks</h4>
            <div className='streak-number'>
              <p>1 </p><img src={fireIcon} alt='fireIcon' className='fireIcon' />
            </div>
          </div>
        </div>
        <div className='horizontal'>
          <DayStatus
            key={"Day1"}
            day="Wed"
            succes={false}
            addBorder={false}
          />
          <DayStatus
            key={"Day2"}
            day="Thru"
            succes={false}
            addBorder={true}
          />
          <DayStatus
            key={"Day3"}
            day="Fri"
            succes={false}
            addBorder={true}
          />
          <DayStatus
            key={"Day4"}
            day="Sat"
            succes={true}
            addBorder={true}
          />
          <DayStatus
            key={"Day5"}
            day="Sun"
            succes={false}
            addBorder={true}
          />
          <DayStatus
            key={"Day6"}
            day="Mon"
            succes={false}
            addBorder={true}
          />
          <DayStatus
            key={"Day7"}
            day="Today"
            succes={false}
            addBorder={true}
          />
        </div>
        <div className="stats horizontal">
          <div className="stats-info-advance">
            <label>Weeks Enrolled</label>
            <span>{stats.weeksEnrolled}</span>
          </div>
          <div className="stats-info-advance left-border">
            <label>Compliance</label>
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
      className="secondary-btn horizontal"
      type="button"
      onClick={handleBillingDetails}
    >
      <img src={currencySign} alt='fireIcon' className='fireIcon' />
      <p>View Billing Details</p></button>

             <button className="call-to-action-Profile" type="button" onClick={()=> {alert("Clicked")}}>
                    <img src={callToActionIcon}/>
                </button>
  </div>
}

export default StatsCard;