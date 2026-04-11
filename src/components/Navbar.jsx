import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {
    return (
        <nav className = "navbar">
            <ul className="nav-links">
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/resume">Skills</Link></li>
                <li><Link to="/projects">Work Samples</Link></li>
                <li><Link to="/education">Education & Acknowledgements</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
// Change link names back to Home, Resume, Projects, Education, and Contact once portfolio is graded
    );
}

export default Navbar;