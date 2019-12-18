import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { AssignedDocumentSeasons, SeasonArray, ChartData } from '../scripts/SeasonTones'

var seasonDocumentData = {
    labels: AssignedDocumentSeasons.map((season) => {return season.name}),
    
    datasets: [{
        label: "Joy",
        data: AssignedDocumentSeasons.map((season) => {return season.joy}),
        backgroundColor: "green",
        borderTopRadius: "5%"
    }, {
        label: "Sadness",
        data: AssignedDocumentSeasons.map((season) => {return season.sadness}),
        backgroundColor: "blue",
        borderTopRadius: "5%"
    },
    {
        label: "Anger",
        data: AssignedDocumentSeasons.map((season) => {return season.anger}),
        backgroundColor: "red",
        borderTopRadius: "5%"
    }, {
        label: "Tentative",
        data:AssignedDocumentSeasons.map((season) => {return season.sadness}), 
        backgroundColor: "black",
        borderTopRadius: "5%"
    }, {
        label: "Viewers (in millions)",
        type: "line",
        data: [15.75, 14.83, 15.18, 13.61, 13.81, 12.86, 12.34, 12.60, 13.61, 12.59, 12.77, 11.64, 11.85, 10.82, 10.19, 9.58, 9.79, 9.74, 9.45, 9.54, 9.09, 8.48, 8.70, 7.31, 7.72, 7.21]
    }]
}

class SeasonChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    
    render() {
        return (
            <div style={{ borderRadius:"50px", minHeight: "700px", maxHeight: "1000px", backgroundColor: "#e5d8bf", margin: "5%" }} className="chartSeason">
                <Bar
                    data= {seasonDocumentData}
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
