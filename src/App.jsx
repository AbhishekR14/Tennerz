import React from 'react'
import Dice from './dice.jsx'
function App() {

  return (
    <>
      <main>
        <div class="dice-grid">
        <Dice value="1"/>
        <Dice value="2"/>
        <Dice value="3"/>
        <Dice value="4"/>
        <Dice value="5"/>
        <Dice value="6"/>
        <Dice value="1"/>
        <Dice value="1"/>
        <Dice value="1"/>
        <Dice value="1"/>
        </div>
      </main>
    </>
  )
}

export default App
