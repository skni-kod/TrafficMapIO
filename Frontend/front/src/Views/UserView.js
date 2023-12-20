import Navbar from "./Navbar"
import '../styles/User.css'

const UserView = () => {
    return <div>
    <Navbar />
    <div id="user-first-card" className="usercard">
        <img></img> <br />
        Name <br />
        Surname

        <button>Logout</button>
    </div>
    <div id="user-second-card" className="usercard">
        rest informations
    </div>

    </div>
}

export default UserView


