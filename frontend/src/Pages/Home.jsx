import "../css/Home.css"
import { Link } from "react-router-dom";

function Home()
{
    return<div className="Home">
        <h1>Welcome to HEP App</h1>
      <Link to="/patients">Go to Patients</Link>
    </div>
}

export default Home;