import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-4">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/graph'>Graph</NavLink>
            <NavLink to='/form'>Form</NavLink>
            <NavLink to='/comment'>Comment</NavLink>
            <NavLink to='/signUp'>Sign Up</NavLink>
        </div>
    );
};

export default Header;