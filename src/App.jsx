import React from 'react'
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
      <main>
        <h1 className="title">Tenzies</h1>
        <h2>How to play?</h2>
        <p className="instructions-staring-page">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <Link to ='/tenzies'>
        <button className="home-buttons" href="/tenzies">Play Game</button>
        </Link>
        <a href='/leaderBoard'>
          <button className="home-buttons">View LeaderBoard</button>
        </a>
      </main>
    </>
  )
}

export default App
