import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class SeasonChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            chartData: props.chartData,
            chartTitle: props.chartTitle
        }
    }
    componentDidMount(){
        console.log("it mounted holy fuvk")
    }
    render() {
        return (
            <div style={{ borderRadius:"50px", minHeight: "700px", maxHeight: "1000px", backgroundColor: "#e5d8bf", margin: "5%" }} className="chartSeason">
                <Bar
                    data= {this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: this.state.chartTitle,
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            backgroundColor: "#e47312"
                        }
                    }}
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
