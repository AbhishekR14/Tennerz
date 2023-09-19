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
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                />
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                /> 
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                /> 
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                /> 
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                /> 
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                /> 
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                />            
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                /> 
                <LeaderBoardEntry 
                    rank="1"
                    name="Abhishekgggggggggggggggggggggggggggggggggggg"
                    time="2.01"
                />
                <LeaderBoardEntry 
                    rank="22"
                    name="Ranjan"
                    time="102.69222222222"
                /> 
            </div>
            <Link to ='/tenzies'>
                <button className="home-buttons" href="/tenzies">Play Tenzies</button>
            </Link>
        </main>
    </>
    )
}