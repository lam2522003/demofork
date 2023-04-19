import React from "react";
import "./Logo.css";
import {Link} from "react-router-dom"

const Sticky = () => {
    return (
        
        // <a href="http://localhost:3000/home" className="sticky_logo">
        //     <span>IntelliJ IDEA</span>
        // </a>
        <Link to="/home" className="sticky_logo">
            <span>Akatsuki</span>
        </Link>
    );
}

export default Sticky;