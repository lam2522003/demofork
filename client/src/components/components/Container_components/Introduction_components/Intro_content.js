import React from "react";
import "./Intro_content.css";
import {Link} from "react-router-dom"

const Intro_content = () => {
    return (
        <ul className="Intro_content_box">
            <li className="Intro_content_item">
                <span>ProManage – the Leading Product management for Company</span>
            </li>
            <li className="Intro_content_item">
                <span>The web that makes management a more productive and enjoyable experience</span>
            </li>
            <li className="Intro_content_item">
                {/* <a href="#" className="Intro_content_login">Login</a> */}
                <a href="/sign-in" className="Intro_content_login">
                    <span className="login_link--span1">Sign In</span>
                </a>
            </li>
        </ul>
    );
}

export default Intro_content;