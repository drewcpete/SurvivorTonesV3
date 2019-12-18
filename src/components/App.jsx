import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
import SeasonChart from "./SeasonChart.jsx"
import { seasonArray, AssignedSeasons } from "./../scripts/SeasonTones"
import { Bar, Pie } from "react-chartjs-2";




export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    };

    render() {
        // var siteStyle = {
        //     backgroundColor: 'burleywood',
        // };
        return (
            <div>

                <main >
                    <div className="jumbotron" style={{ display: "flex", width: "70%", backgroundColor: "#d55252", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px", alignItems: "center", marginLeft: "15%" }}>

                        <h1 style={{ width: "100%", textAlign: "center" }}>Survivor Finale Tones!</h1>
                    </div>
                </main>
                <div >
                    <SeasonChart/>                   
                </div>
            </div>
        );
    }
}

// export default App;