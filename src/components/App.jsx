import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
import SeasonChart from "./SeasonChart.jsx"
import { ChartData, AssignedSeasons, seasonArray } from "./../scripts/SeasonTones"
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
        },
        {
            label: "Confident",
            data: [AssignedSeasons[0].confident, AssignedSeasons[1].confident, AssignedSeasons[2].confident, AssignedSeasons[3].confident, AssignedSeasons[4].confident, AssignedSeasons[5].confident, AssignedSeasons[6].confident, AssignedSeasons[7].confident, AssignedSeasons[8].confident, AssignedSeasons[9].confident, AssignedSeasons[10].confident, AssignedSeasons[11].confident, AssignedSeasons[12].confident, AssignedSeasons[13].confident, AssignedSeasons[14].confident, AssignedSeasons[15].confident, AssignedSeasons[16].confident, AssignedSeasons[17].confident, AssignedSeasons[18].confident, AssignedSeasons[19].confident, AssignedSeasons[20].confident, AssignedSeasons[21].confident, AssignedSeasons[22].confident, AssignedSeasons[23].confident, AssignedSeasons[24].confident, AssignedSeasons[25].confident],
            backgroundColor: "purple"
        },
        {
            label: "Tentative",
            data: [AssignedSeasons[0].tentative, AssignedSeasons[1].tentative, AssignedSeasons[2].tentative, AssignedSeasons[3].tentative, AssignedSeasons[4].tentative, AssignedSeasons[5].tentative, AssignedSeasons[6].tentative, AssignedSeasons[7].tentative, AssignedSeasons[8].tentative, AssignedSeasons[9].tentative, AssignedSeasons[10].tentative, AssignedSeasons[11].tentative, AssignedSeasons[12].tentative, AssignedSeasons[13].tentative, AssignedSeasons[14].tentative, AssignedSeasons[15].tentative, AssignedSeasons[16].tentative, AssignedSeasons[17].tentative, AssignedSeasons[18].tentative, AssignedSeasons[19].tentative, AssignedSeasons[20].tentative, AssignedSeasons[21].tentative, AssignedSeasons[22].tentative, AssignedSeasons[23].tentative, AssignedSeasons[24].tentative, AssignedSeasons[25].tentative],
            backgroundColor: "black"
        },
        {
            label: "Analytical",
            data: [AssignedSeasons[0].analytical, AssignedSeasons[1].analytical, AssignedSeasons[2].analytical, AssignedSeasons[3].analytical, AssignedSeasons[4].analytical, AssignedSeasons[5].analytical, AssignedSeasons[6].analytical, AssignedSeasons[7].analytical, AssignedSeasons[8].analytical, AssignedSeasons[9].analytical, AssignedSeasons[10].analytical, AssignedSeasons[11].analytical, AssignedSeasons[12].analytical, AssignedSeasons[13].analytical, AssignedSeasons[14].analytical, AssignedSeasons[15].analytical, AssignedSeasons[16].analytical, AssignedSeasons[17].analytical, AssignedSeasons[18].analytical, AssignedSeasons[19].analytical, AssignedSeasons[20].analytical, AssignedSeasons[21].analytical, AssignedSeasons[22].analytical, AssignedSeasons[23].analytical, AssignedSeasons[24].analytical, AssignedSeasons[25].analytical],
            backgroundColor: "gray"
        }
        ]
    }
    // options: {
    //     barValueSpacing: 5,
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 min: 0
    //             }
    //         }]
    //     }
    // }
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    };

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
                <Bar 
                    data = {data}
                    options= {{
                        title:{
                            display:true,
                            text: "All Tones of All Seasons",
                            fontSize: 20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        );
    }
}

// export default App;