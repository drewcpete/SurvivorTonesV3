import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
import SeasonChart from "./SeasonChart.jsx"
import ChartData from "./../scripts/SeasonTones"

class App extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }


    componentWillMount() {
        this.getChartData();
    }
    getChartData(){
        this.setState({
            chartData: ChartData
        })
    }


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

                <SeasonChart chartData={this.state.chartData} legendPosition="bottom" />

            </div>
        );
    }
}

export default App;