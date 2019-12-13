import React from "react";
import Tone from "./Tone";
import PropTypes from "prop-types";

function ToneList(props) {
    return(
        <div>
            <h2>Tones</h2>
            <hr/>
            {props.toneList.map((tone, i)=>
                <Tone name={tone.name}
                value={tone.value}
                key={tone.id}
                index={i}
                />
                )}
        </div>
    );
}

ToneList.PropTypes = {
    toneList: PropTypes.array,
};
export default ToneList;