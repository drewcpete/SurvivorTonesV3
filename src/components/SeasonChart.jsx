import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class SeasonChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    // static defaultProps = {
    //     displayTitle:true,
    //     displayLegend: true,
    //     legendPosition:'right'
    // }

    render() {
        return (
            <div className="seasonChart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        // maintainAspectRatio: false
                        title:{
                            display: true,
                            text: '{tone.props.name}'
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
}


export default SeasonChart;