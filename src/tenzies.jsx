import React from "react";
import Dice from './dice.jsx'
import { nanoid } from 'nanoid'
import '../Stylesheets/tenzies.css'
import '../Stylesheets/index.css'

export default function tenzies(){

  const [dices , setDices] = React.useState(generateRandomDiceArray());
  const [gameWon , setGameWon] = React.useState(false);
  function generateRandomDiceArray(){
    let diceArray = [];
    for(let i = 0 ; i < 10 ; i++){
      diceArray.push(generateRandomDice());
    }
    return diceArray
  }

  function generateRandomDice(){
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isSelected : false
    }
  }

  function rollDice(){
    setDices(oldDice => oldDice.map(dice => {
      return dice.isSelected ? dice : generateRandomDice()
    }));
  }

  function endGame(){
    let count=0;    
    const num = dices[0].value;
    dices.forEach(dice => {
      if(dice.isSelected && dice.value === num){
        count += 1
      }
    })
    if(count === 10){
      setGameWon(true);
    }
  }

  function changeSelected(id){
    setDices(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isSelected: !die.isSelected} : die
    }))
  }

  React.useEffect(endGame,[dices])

  const diceElements = dices.map(dice => {
    return <Dice 
              key ={dice.id}
              id = {dice.id}
              value={dice.value} 
              isSelected={dice.isSelected}
              onClick={changeSelected}
            />
  })

  return (
    <>
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-grid">
          {diceElements}
        </div>
        {gameWon && <div className="you-won">You Won!!</div>}
        {gameWon ? <button className="add-to-leaderboard">Add your time to the LeaderBoard</button>:<button className="roll-dice" onClick={rollDice}>Roll</button>}
      </main>
    </>
  )
}