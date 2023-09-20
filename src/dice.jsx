import React from "react";
import '../Stylesheets/dice.css'
export default function Dice(props){
    
    const style = {
        backgroundColor : props.isSelected ? "#8afccc" : "white"
    }

    return(
        <div style={style}className="single-dice" onClick={() => props.onClick(props.id)}>
            {props.value}
        </div>
    )
};