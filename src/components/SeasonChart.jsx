import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {AssignedSeasons, SeasonArray, ChartData} from '../scripts/SeasonTones'


const state = {
    labels: DataTransfer,
}

export default class SeasonChart extends Component {
    chartRef = React.createRef();

    componentDidMount(){
        const myChartRef= this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type:"bar",
            data: {
                labels: SeasonArray,
                ChartData
            }
        })
    }
}

    render() {
        return (
            <div className="seasonChart">
            {this.props.seasonList.map((season, i) =>
                <Season name={season.name}
                    index={i}
                    key={season.id}
                    fear={season.fear}
                    joy={season.joy}
                    sadness={season.sadness}
                    anger={season.anger}
                    confident={season.confident}
                    tentative={season.tentative}
                    analytical={season.analytical}
                    />
                )}
                <Bar
                    data={this.state.chartData}
                    options={{
                        // maintainAspectRatio: false
                        title:{
                            display: true,
                            text: ""
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.displayLegend
                        }
                    }}
                />
            </div>
        )
    }



export default SeasonChart;