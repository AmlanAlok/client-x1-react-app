import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-inverse tranlusent">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Amlan Alok</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink to='/signup'>SignUp</NavLink></li>
                    <li><NavLink to='/login'></NavLink></li>
                    {/* <li><NavLink to='/resume'>Resume</NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar