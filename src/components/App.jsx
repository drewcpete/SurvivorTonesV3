import React from "react";
import { Switch, HashRouter, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
import SeasonChart from "./SeasonChart.jsx"
// import { seasonArray, AssignedSeasons } from "./../scripts/SeasonTones"
import { Bar, Pie } from "react-chartjs-2";
import { AssignedDocumentSeasons } from '../scripts/SeasonTones'
import { AssignedDoc39Episodes } from '../scripts/Season39Tones'


let seasonDocumentData = {
    labels: AssignedDocumentSeasons.map((season) => { return season.name }),

    datasets: [{
        label: "Joy",
        data: AssignedDocumentSeasons.map((season) => { return season.joy }),
        backgroundColor: "green",
        borderTopRadius: "5%"
    }, {
        label: "Sadness",
        data: AssignedDocumentSeasons.map((season) => { return season.sadness }),
        backgroundColor: "blue",
        borderTopRadius: "5%"
    },
    {
        label: "Anger",
        data: AssignedDocumentSeasons.map((season) => { return season.anger }),
        backgroundColor: "red",
        borderTopRadius: "5%"
    }, {
        label: "Tentative",
        data: AssignedDocumentSeasons.map((season) => { return season.tentative }),
        backgroundColor: "black",
        borderTopRadius: "5%"
    }, {
        label: "Viewers (in millions)",
        type: "line",
        data: [15.75, 14.83, 15.18, 13.61, 13.81, 12.86, 12.34, 12.60, 13.61, 12.59, 12.77, 11.64, 11.85, 10.82, 10.19, 9.58, 9.79, 9.74, 9.45, 9.54, 9.09, 8.48, 8.70, 7.31, 7.72, 7.21]
    }]
}
let s39DocumentData = {
    labels: AssignedDoc39Episodes.map((episode) => { return episode.name }),

    datasets: [{
        label: "Joy",
        data: AssignedDoc39Episodes.map((episode) => { return episode.joy }),
        backgroundColor: "green",
    }, {
        label: "Sadness",
        data: AssignedDoc39Episodes.map((episode) => { return episode.sadness }),
        backgroundColor: "blue",
    },
    {
        label: "Anger",
        data: AssignedDoc39Episodes.map((episode) => { return episode.anger }),
        backgroundColor: "red",
    }, {
        label: "Tentative",
        data: AssignedDoc39Episodes.map((episode) => { return episode.tentative }),
        backgroundColor: "black",
    }, {
        label: "Viewers (in millions)",
        type: "line",
        data: [15.75, 14.83, 15.18, 13.61, 13.81, 12.86, 12.34, 12.60, 13.61, 12.59, 12.77, 11.64, 11.85, 10.82, 10.19, 9.58, 9.79, 9.74, 9.45, 9.54, 9.09, 8.48, 8.70, 7.31, 7.72, 7.21]
    }]
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        };
        this.CurrentChart = this.CurrentChart.bind(this)
    };

    CurrentChart(int) {
        if (int == 39) {
            this.setState({ chartData: s39DocumentData })
        } else {
            this.setState({ chartData: seasonDocumentData })
        }

    }
    render() {
        // var siteStyle = {
        //     backgroundColor: 'burleywood',
        // };
        return (
            <div>
                <div>

                    <main >
                        <div className="jumbotron" style={{ display: "flex", width: "70%", backgroundColor: "#d55252", borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px", alignItems: "center", marginLeft: "15%" }}>
                            <h1 style={{ width: "100%", textAlign: "center" }}>Survivor Tones!</h1>
                        </div>
                    </main>
                    <Toolbar changeSeason={this.CurrentChart} />
                    <div >
                            <Route key="home" exact path="/home" component={Home} />
                        <Switch>
                            <Route key="all" path="/All" render={() => <SeasonChart chartTitle="All Seasons" chartData={this.state.chartData} />} />
                            <Route key="39" path="/:s39" render={() => <SeasonChart chartTitle="Season 39 Episodes" chartData={this.state.chartData} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

// export default App;