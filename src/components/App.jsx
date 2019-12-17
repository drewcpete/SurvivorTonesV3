import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
import {Chart, ChartData, AssignedSeasons } from "./SeasonChart.jsx"







class App extends React.Component {
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

                <Chart chartData={this.state.chartData} legendPosition="bottom" />

            </div>
        );
    }
}

export default App;