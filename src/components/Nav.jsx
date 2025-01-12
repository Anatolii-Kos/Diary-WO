import {NavLink} from "react-router";

const Nav = () => {
    return (

        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/trending" end>
                Trending Concerts
            </NavLink>
            <NavLink to="/concerts">All Concerts</NavLink>
            <NavLink to="/account">Account</NavLink>
        </nav>

    );
};

export default Nav;
