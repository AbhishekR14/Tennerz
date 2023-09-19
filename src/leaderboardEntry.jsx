import React from "react";
import "../Stylesheets/leaderboard.css";

export default function leaderBoardEntry(props){
    return(
        <div className="leaderboard-grid">
            <div className="leaderboard-rank">
                {props.rank}
            </div>
            <div className="leaderboard-name">
                {props.name}
            </div>
            <div className="leaderboard-time">
                {props.time} Seconds
            </div>
        </div>
    )
}