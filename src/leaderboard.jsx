import React from "react";
import "../Stylesheets/leaderboard.css"
import "../Stylesheets/index.css"
import { Link } from 'react-router-dom'
import LeaderBoardEntry from "./leaderboardEntry";
import { leaderBoardCollection } from "./firebase.js"
import { getDocs } from 'firebase/firestore';

export default function leaderBoard(){
    const [sortedLeardBoard, setSortedLeardBoard] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
        try {
            const querySnapshot = await getDocs(leaderBoardCollection);
            const leaderboardData = [];
            querySnapshot.forEach((doc) => {
                const docdata = {
                    key : doc.id,
                    rank : 1,
                    name : doc.data().name,
                    time : doc.data().time
                };
                leaderboardData.push(docdata);
            });
            //const sortedBoard = call the sorting function
            setSortedLeardBoard(leaderboardData);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }}
        fetchData();
    }, []);

    const leaderBoard = sortedLeardBoard.map(entry => {
        return <LeaderBoardEntry 
                  key = {entry.key}
                  rank = {entry.rank}
                  name = {entry.name}
                  time= {entry.time}
                />
      })
    
    return(
    <>
        <main>
            <h1 className="title">LeaderBoard</h1>
            <div className="leaderboard-main">
                {leaderBoard}
            </div>
            <Link to ='/tennerz'>
                <button className="home-buttons" href="/tennerz">Play Tennerz</button>
            </Link>
        </main>
    </>
    )
}