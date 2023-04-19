import React from "react";
import "./Navs_bar.css";
import {Link} from "react-router-dom"

const Navs_bar = () => {
    return (
        <ul>
            {/* <li className="sticky_navs_item">Coming in 2023</li>
            <li className="sticky_navs_item">What's New</li> */}
            <li className="sticky_navs_item"><a href="http://localhost:3006">Features</a></li>
            {/* <li className="sticky_navs_item">Resources</li> */}
            {/* <li className="sticky_navs_item">
                <a href="#" className="register_link">
                    <span className="register_link--span">Register</span>
                </a>
            </li> */}
            <li className="sticky_navs_item">
                {/* <a href="#" className="login_link">
                    <span className="login_link--span">Login</span>
                </a> */}
                <Link to="/sign-in" className="login_link">
                    <span className="login_link--span">Sign In</span>
                </Link>
            </li>
        </ul>
    );
}

export default Navs_bar;