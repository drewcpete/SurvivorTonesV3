import React from 'react';
// import Logo from "../img/survivorlog.png";
import { Link } from "react-router-dom";

function Toolbar() {
    var toolbar = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "auto",
        height: "auto",
        background: "purple",
        padding: "5px 20px 5px 5px"
    };
    var toolbarLogo = {

    }
    var toolbarList = {

    }

    return (
        <header style={toolbar}>
            <nav className="toolbarNav">
                <div></div>
                <div style={toolbarLogo}>
                    {/* <img style src={Logo}/> */}
                </div>
                <div className="toolbarList">
                    <ul>
                        <li><a href="/">Seasons</a></li>
                        <li><a href="/">Tones</a></li>
                        <li><a href="/">Twitter Users</a></li>
                        <li><a href="/">Location</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );

}
export default Toolbar;