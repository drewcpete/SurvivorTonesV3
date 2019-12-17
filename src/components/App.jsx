import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
import SeasonChart from "./SeasonChart.jsx"
import AssignedSeasons from "../scripts/SeasonTones"







class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterSeasonList: AssignedSeasons,
            chartData: {}
        }
    }


    // componentWillMount() {
    //     this.getChartData();
    // }



    render() {
        var siteStyle = {
            backgroundColor: 'burleywood',
        };

              
        

        return (
            <div style={siteStyle}>

                <Toolbar />
                <main style={{ marginTop: "64px", backgroundColor: "red" }}>
                    <p>Survivor Finale Tones!</p>
                </main>

                <SeasonChart chartData={data} legendPosition="bottom" />

            </div>
        );
    }
}

export default App;