import React from "react";

function BarGraph(props) {
    var value = String(props.level);
    var barColor = String(props.barColor);
    console.log(level);
    var graphStyle = {
        height: "500px"
    };
    var barGraph = {
        backgroundColor: barColor,
        height: value,
        background: barColor,
        maxHeight: "500px",
        maxWidth: "50px",    
    };
    return (
        <div style={graphStyle}>
            <div style={barGraph}></div>
        </div>
    )

}

export default BarGraph;