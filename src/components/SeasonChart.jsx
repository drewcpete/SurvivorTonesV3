import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class SeasonChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Cook Islands", "Fiji", "China", "Micronesia", "Gabon", "Tocantis", "Samoa", "Heroes vs. Villians", "Nicaragua", "Redemption Island", "South Pacific", "One World", "Philippines", "Caramoan", "Blood vs. Water", "Cagayan", "San Juan del Sur", "Worlds Apart", "Cambodia", "Kaoh Rong", "Millennials vs Gen X", "Game Changers", "Heroes vs. Healers vs. Hustlers", "Ghost Island", "David vs. Goliath", "Edge of Extinction", "Island of the Idols"],
                datasets: [
                    {
                        label: "Season Tones",
                        data: [
                            .61,
                            .54,
                            .33,
                            .77,
                            .44,
                            0,
                            0,
                            .61,
                            .54,
                            .33,
                            .77,
                            .44,
                            0,
                            .61,
                            .54,
                            .33,
                            .77,
                            .44,
                            0,
                            .61,
                            .54,
                            .33,
                            .77,
                            .44,
                            0,
                            .61,
                            .54,
                            .33,
                            .77,
                            .44,
                            0,
                            .61,
                            .54,
                            .33,
                            .77,
                            .44,
                            0,
                            .61,
                            .54,
                            .33,
                        ],
                        backgroundColor: "green"

                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="seasonChart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}


export default SeasonChart;