import React from "react";
import '../Stylesheets/dice.css'
export default function Dice(props){
    return(
        <div className="single-dice">
            {props.value}
        </div>
    )
};