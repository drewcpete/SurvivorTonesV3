import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import Toolbar from "./Toolbar/Toolbar"
import SeasonChart from "./SeasonChart.jsx"
import Analyze from "../main.js"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterToneList: [],
            chartData:{}
        }
    }

componentWillMount(){
    this.getChartData();
}

    getChartData(){
        this.setState({
            // Ajax call here
            chartData:{
                labels: ["Cook Islands", "Fiji", "China", "Micronesia", "Gabon", "Tocantis", "Samoa", "Heroes vs. Villians", "Nicaragua", "Redemption Island", "South Pacific", "One World", "Philippines", "Caramoan", "Blood vs. Water", "Cagayan", "San Juan del Sur", "Worlds Apart", "Cambodia", "Kaoh Rong", "Millennials vs Gen X", "Game Changers", "Heroes vs. Healers vs. Hustlers", "Ghost Island", "David vs. Goliath", "Edge of Extinction", "Island of the Idols"],
                datasets: [
                    {
                        label: "Season Tones",
                        data:  Analyze(allText);
                            // 61,
                            // 54,
                            // 33,
                            // 77,
                            // 44,
                            // 0,
                            // 0,
                            // 61,
                            // 54,
                            // 33,
                            // 77,
                            // 44,
                            // 0,
                            // 61,
                            // 54,
                            // 33,
                            // 77,
                            // 44,
                            // 0,
                            // 61,
                            // 54,
                            // 33,
                            // 77,
                            // 44,
                            // 0,
                            // 61,
                            // 54,
                            // 33,
                            // 77,
                            // 44,
                            // 0,
                            // 61,
                            // 54,
                            // 33,
                            // 77,
                            // 44,
                            // 0,
                            // 61,
                            // 54,
                            // 33,
                        ],
                        backgroundColor: "green"

                    }
                ]
            }
        })
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
                
                <SeasonChart chartData={this.state.chartData} legendPosition="bottom"/>
                
            </div>
        );
    }
}
export default App;