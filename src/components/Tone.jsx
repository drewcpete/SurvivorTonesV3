
import React from "react";
import PropTypes from "prop-types";
import BarGraph from "./BarGraph";

function Tone(props) {


    var newAmount = Number(props.value);
    var barPercent = String((newAmount*100+"%"));

    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <BarGraph value={barPercent}/>
            </div>
        </div>
    )
}

Tone.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string
};

export default Tone;