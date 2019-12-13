import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterToneList: []
        };
    }


    render() {
        var siteStyle = {
            backgroundColor: 'burleywood',
        };


        return (
            <div style={siteStyle}>
            
                <Toolbar />
                <main style={{marginTop: "64px", backgroundColor: "red"}}>
                    <p>Survivor Finale Tones!</p>
                </main>
            </div>
        );
    }
}
export default App;