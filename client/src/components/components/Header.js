import React from "react";
import Logo from "./Header_components/Logo";
import Navs_logo from "./Header_components/Navs_logo";
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="header_box">
            <div className="wide">
                {/* <a className="header_link" href="http://localhost:3000/"> <Logo /> </a> */}
                <a href="/home" className="header_link"><Logo /></a>
                <Navs_logo />
            </div>
        </div>
    );
}

export default Header;