import React from "react";
import Navs_bar from "./Sticky_components/Navs_bar";
import Logo from "./Sticky_components/Logo";
import { useEffect } from "react";

const Sticky = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const addSticky = () => {
        const sticky = document.querySelector('.Sticky_box');
        const header = document.querySelector('.header_box');
        header.style.marginBottom = "92px";
        sticky.style.position = "fixed";
        sticky.style.zIndex = "999";
        sticky.style.top = "0";
        sticky.style.background = "#fff";
    }

    const removeSticky = () => {
        const sticky = document.querySelector('.Sticky_box');
        const header = document.querySelector('.header_box');
        header.style.marginBottom = "0";
        sticky.style.position = "";
        sticky.style.zIndex = "";
        sticky.style.top = "";
        sticky.style.background = "";
    }

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 72 ? addSticky() : removeSticky();
    };

    return (
        <div className="Sticky_box">
            <div className="wide">
                <Logo />
                <Navs_bar />
            </div>
        </div>
    );
}


// window.onscroll = function() {myFunction()};

// var header = document.getElementById("Sticky_box");

// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

export default Sticky;