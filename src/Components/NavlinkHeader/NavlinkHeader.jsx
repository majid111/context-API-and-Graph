import { NavLink, Outlet, useNavigation } from "react-router-dom";
import './navlinkHeader.css'

const NavlinkHeader = () => {
    const navigation = useNavigation();
    console.log(navigation);
    return (
        <div>
            <nav className="flex gap-6">
                <NavLink to='/form/comments'>Comment</NavLink>
                <NavLink to="/form/photos">Photos</NavLink>
                <NavLink to="/form/posts">Posts</NavLink>
                <NavLink to="/form/error">Error</NavLink>
            </nav>
            {
                navigation.state === "loading" ? <p>Loading.......</p> :
                    <Outlet></Outlet>
            }
        </div>
    );
};

export default NavlinkHeader;