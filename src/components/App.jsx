import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
// import SeasonChart from "./SeasonChart.jsx"
import {  AssignedSeasons } from "./../scripts/SeasonTones"
import { Bar } from "react-chartjs-2";

var data = {
    labels: ["Cook Islands", "Fiji", "China", "Micronesia", "Gabon", "Tocantis", "Samoa", "Heroes vs. Villians", "Nicaragua", "Redemption Island", "South Pacific", "One World", "Philippines", "Caramoan", "Blood vs. Water", "Cagayan", "San Juan del Sur", "Worlds Apart", "Cambodia", "Kaoh Rong", "Millennials vs Gen X", "Game Changers", "Heroes vs. Healers vs. Hustlers", "Ghost Island", "David vs. Goliath", "Edge of Extinction", "Island of the Idols"],
    
    datasets: [{
        label: "Joy",
        data: [AssignedSeasons[0].joy, AssignedSeasons[1].joy, AssignedSeasons[2].joy, AssignedSeasons[3].joy, AssignedSeasons[4].joy, AssignedSeasons[5].joy, AssignedSeasons[6].joy, AssignedSeasons[7].joy, AssignedSeasons[8].joy, AssignedSeasons[9].joy, AssignedSeasons[10].joy, AssignedSeasons[11].joy, AssignedSeasons[12].joy, AssignedSeasons[13].joy, AssignedSeasons[14].joy, AssignedSeasons[15].joy, AssignedSeasons[16].joy, AssignedSeasons[17].joy, AssignedSeasons[18].joy, AssignedSeasons[19].joy, AssignedSeasons[20].joy, AssignedSeasons[21].joy, AssignedSeasons[22].joy, AssignedSeasons[23].joy, AssignedSeasons[24].joy, AssignedSeasons[25].joy],
        backgroundColor: "green"
    }, {
        label: "Sadness",
        data: [AssignedSeasons[0].sadness, AssignedSeasons[1].sadness, AssignedSeasons[2].sadness, AssignedSeasons[3].sadness, AssignedSeasons[4].sadness, AssignedSeasons[5].sadness, AssignedSeasons[6].sadness, AssignedSeasons[7].sadness, AssignedSeasons[8].sadness, AssignedSeasons[9].sadness, AssignedSeasons[10].sadness, AssignedSeasons[11].sadness, AssignedSeasons[12].sadness, AssignedSeasons[13].sadness, AssignedSeasons[14].sadness, AssignedSeasons[15].sadness, AssignedSeasons[16].sadness, AssignedSeasons[17].sadness, AssignedSeasons[18].sadness, AssignedSeasons[19].sadness, AssignedSeasons[20].sadness, AssignedSeasons[21].sadness, AssignedSeasons[22].sadness, AssignedSeasons[23].sadness, AssignedSeasons[24].sadness, AssignedSeasons[25].sadness],
        backgroundColor: "blue"
    },
    {
        label: "Anger",
        data: [AssignedSeasons[0].anger, AssignedSeasons[1].anger, AssignedSeasons[2].anger, AssignedSeasons[3].anger, AssignedSeasons[4].anger, AssignedSeasons[5].anger, AssignedSeasons[6].anger, AssignedSeasons[7].anger, AssignedSeasons[8].anger, AssignedSeasons[9].anger, AssignedSeasons[10].anger, AssignedSeasons[11].anger, AssignedSeasons[12].anger, AssignedSeasons[13].anger, AssignedSeasons[14].anger, AssignedSeasons[15].anger, AssignedSeasons[16].anger, AssignedSeasons[17].anger, AssignedSeasons[18].anger, AssignedSeasons[19].anger, AssignedSeasons[20].anger, AssignedSeasons[21].anger, AssignedSeasons[22].anger, AssignedSeasons[23].anger, AssignedSeasons[24].anger, AssignedSeasons[25].anger],
        backgroundColor: "red"
    }, {
        label: "Tentative",
        data: [AssignedSeasons[0].tentative, AssignedSeasons[1].tentative, AssignedSeasons[2].tentative, AssignedSeasons[3].tentative, AssignedSeasons[4].tentative, AssignedSeasons[5].tentative, AssignedSeasons[6].tentative, AssignedSeasons[7].tentative, AssignedSeasons[8].tentative, AssignedSeasons[9].tentative, AssignedSeasons[10].tentative, AssignedSeasons[11].tentative, AssignedSeasons[12].tentative, AssignedSeasons[13].tentative, AssignedSeasons[14].tentative, AssignedSeasons[15].tentative, AssignedSeasons[16].tentative, AssignedSeasons[17].tentative, AssignedSeasons[18].tentative, AssignedSeasons[19].tentative, AssignedSeasons[20].tentative, AssignedSeasons[21].tentative, AssignedSeasons[22].tentative, AssignedSeasons[23].tentative, AssignedSeasons[24].tentative, AssignedSeasons[25].tentative],
        backgroundColor: "black"
    }, {
        label: "Viewers (in millions)",
        type: "line",
        data: [15.75, 14.83, 15.18, 13.61, 13.81, 12.86, 12.34, 12.60, 13.61, 12.59, 12.77, 11.64, 11.85, 10.82, 10.19, 9.58, 9.79, 9.74, 9.45, 9.54, 9.09, 8.48, 8.70, 7.31, 7.72, 7.21]
    }
    ]
}

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
                <div style={{ borderRadius:"50px", minHeight: "700px", maxHeight: "1000px", backgroundColor: "#e5d8bf", margin: "5%" }}>


                    <Bar
                        data={data}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: "All Tones of All Seasons",
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}

// export default App;