import React from 'react';
import { Link, HashRouter } from "react-router-dom";


function Toolbar(props) {
    console.log(props);
    
    var toolbar = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "auto",
        height: "auto",
        background: "#e47312",
        padding: "5px 20px 5px 5px"
    };
    var toolbarLogo = {
        position: "flex",
        color: "white",
        font: "1.5rem"
    }
    var toolbarNav = {
        display: "flex"
    }

    function handleClick(int) {
        props.changeSeason(int)
    }

    return (
        <HashRouter>

            <header style={toolbar}>
                <nav className="toolbarNav">
                    <div></div>
                    <div style={toolbarLogo}>
                        <Link to="/">Survivor</Link>
                    </div>
                    <div className="toolbarList">
                        <ul>
                            <button  className=""><Link to="/All">All Seasons</Link></button>
                            <li><a onClick={()=> handleClick(0)} href="/#/All">All Seasons</a></li>
                            <li><Link onClick={()=> handleClick(39)} to="/s39">Season 39</Link></li>
                            <li><a href="/">Twitter Users</a></li>
                            <li><a href="/">Location</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </HashRouter>
    );

}
export default Toolbar;