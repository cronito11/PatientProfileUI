import "../css/SidNav.css"
import { Link } from "react-router-dom"
import { FaHome } from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";

function SideNav()
{
    return <div className="sideBar">
    <h2>HEP App</h2>
    <nav className="navbar">
        <ul>
            <li><Link to="/"><FaHome size={32}/> Home</Link></li>
            <li><Link to="/patients"><FaPeopleGroup size={32}/> Patients</Link></li>
          </ul>
    </nav>
    </div>
}

export default SideNav