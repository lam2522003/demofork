import React from "react";
import Introduction from "./Container_components/Introduction";
import Content1 from "./Container_components/Content1";
import Subcontent from "./Container_components/Subcontent";
import Content2 from "./Container_components/Content2";
import Contact from "./Container_components/Contact";
import "./Container.css";

const Container = () => {
    return (
        <div className="container_box">
            <Introduction />
            <Content1 />
            <Subcontent />
            <Content2 />
            <Contact />
        </div>
    );
}

export default Container;