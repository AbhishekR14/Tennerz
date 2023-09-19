import React from "react";
import Dice from './dice.jsx'
import '../Stylesheets/tenzies.css'
import '../Stylesheets/index.css'
export default function tenzies(){
    return (
      <>
        <main>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-grid">
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
          <button className="roll-dice">Roll</button>
        </main>
      </>
    )
}