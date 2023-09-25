import React from 'react'
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
      <main>
        <h1 className="title">tennerz</h1>
        <h2>How to play?</h2>
        <p className="instructions-staring-page">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <Link to ='/tennerz'>
          <button className="home-buttons">Play Game</button>
        </Link>
        <Link to='/leaderboard'>
          <button className="home-buttons">View LeaderBoard</button>
        </Link>
      </main>
    </>
  )
}

export default App
