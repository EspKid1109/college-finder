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
            <NavLink className="nav-link" to="/budget">
            </NavLink>
            <NavLink className="nav-link" to="/submit">
            </NavLink>
            <NavLink className="nav-link" to="/institutionType">
            </NavLink>
        </div>
    );
}

export default Navigation;