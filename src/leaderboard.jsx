import React from "react";
import "../Stylesheets/leaderboard.css"
import "../Stylesheets/index.css"
import { Link } from 'react-router-dom'
import LeaderBoardEntry from "./leaderboardEntry";
export default function leaderBoard(){
    return(
    <>
        <main>
            <h1 className="title">LeaderBoard</h1>
            <div className="leaderboard-main">
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishek"
                    time="2.01"
                />
            </div>
            <Link to ='/tennerz'>
                <button className="home-buttons" href="/tennerz">Play tennerz</button>
            </Link>
        </main>
    </>
    )
}