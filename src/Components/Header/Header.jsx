import { NavLink } from "react-router-dom";
import './Nav.css'

const Header = () => {
    return (
        <nav className="flex gap-4">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/graph'>Graph</NavLink>
            <NavLink to='/form'>Form</NavLink>
            <NavLink to='/comment'>Comment</NavLink>
            <NavLink to='/signUp'>Sign Up</NavLink>
            <NavLink to="/inputManage">inputManage</NavLink>
        </nav>
    );
};

export default Header;