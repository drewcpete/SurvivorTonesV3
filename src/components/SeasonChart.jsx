import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { AssignedSeasons, SeasonArray, ChartData } from '../scripts/SeasonTones'



class SeasonChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    
    render() {
        return (
            <div className="chartSeason">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'All Tones of All Seasons',
                            // maintainAspectRatio: false 
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }
                }
                />
            </div>
        )
    }
}

SeasonChart.defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
}

export default SeasonChart;
// {this.props.seasonList.map((season, i) =>
//     <Season name={season.name}
//         index={i}
//         key={season.id}
//         fear={season.fear}
//         joy={season.joy}
//         sadness={season.sadness}
//         anger={season.anger}
//         confident={season.confident}
//         tentative={season.tentative}
//         analytical={season.analytical}
//         />
//     )}
//     <Bar
//         data={this.state.chartData}
//         options={{
//             // maintainAspectRatio: false
//             title:{
//                 display: true,
//                 text: ""
//             },
//             legend:{
//                 display:this.props.displayLegend,
//                 position:this.props.displayLegend
//             }
//         }}