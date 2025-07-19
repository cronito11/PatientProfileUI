import "../css/SideNav.css"
import { Link } from "react-router-dom"

import HomeIcon from "../assets/Images/home.png";
import backIcon from "../assets/Images/back.png";
import DashboardIcon from "../assets/Images/Dashboard.png";
import LogoIcon from "../assets/Images/iconX2.png";
import LogoutIcon from "../assets/Images/logout.png";

function SideNav()
{
    return <div className="sideBar">
        <div className="top-buttons">

    <Link to="/"><img src= {LogoIcon} alt="HEP App Logo" className="logo" /></Link>
    <nav className="navbar">
        <ul>
            <li><Link to="/"><img src={HomeIcon} alt="Home" className="home-icon" /></Link></li>
            <li><Link to="/"><img src={backIcon} alt="Back" className="back-icon" /></Link></li>
            <li><Link to="/patients"><img src={DashboardIcon} alt="Dashboard" className="dashboard-icon" /></Link></li>
          </ul>
    </nav>
        </div>
        <div className="bottom-buttons">
            <Link to="/" className="logout-btn"><img src= {LogoutIcon} alt="HEP App Logo" className="logout" /></Link>
        </div>
    </div>
}

export default SideNav