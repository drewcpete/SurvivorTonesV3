import React from "react";
import SeasonChart from "./SeasonChart";


function Season(props){

return (
    <div>
        <h2>{props.name}</h2>
    </div>
)



SeasonChart.propTypes = {
    name: propTypes.string,
    fear: propTypes.double,
    joy: propTypes.joy,
    sadness: propTypes.sadness,
    anger: propTypes.anger,
    confident: propTypes.confident,
    tentative: propTypes.tentative,
    analytical: propTypes.analytical
}
// chartData:{
//     labels: ["Cook Islands", "Fiji", "China", "Micronesia", "Gabon", "Tocantis", "Samoa", "Heroes vs. Villians", "Nicaragua", "Redemption Island", "South Pacific", "One World", "Philippines", "Caramoan", "Blood vs. Water", "Cagayan", "San Juan del Sur", "Worlds Apart", "Cambodia", "Kaoh Rong", "Millennials vs Gen X", "Game Changers", "Heroes vs. Healers vs. Hustlers", "Ghost Island", "David vs. Goliath", "Edge of Extinction", "Island of the Idols"],
//     datasets: [
//         {
//             label: "Season Tones",
//             datasets: {}  ,
           
            
//             backgroundColor: "green"

//         }
//     ]
}
export default Season;