import React from "react";
import "./Logo.css";
import {Link} from "react-router-dom"

const Sticky = () => {
    return (
        
        // <a href="http://localhost:3000/home" className="sticky_logo">
        //     <span>IntelliJ IDEA</span>
        // </a>
        <a href="/home" className="sticky_logo">
            <span>Akatsuki</span>
        </a>
    );
}

export default Sticky;