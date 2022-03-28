import React from "react"
import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <div className="navigation">
            <NavLink className="homepage" to="/college-finder">
            </NavLink>
            <NavLink className="nav-link" to="/personalInt">
            </NavLink>
            <NavLink className="nav-link" to="/academicInfo">
            </NavLink>
        </div>
    );
}

export default Navigation;