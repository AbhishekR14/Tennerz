import React from "react";
import Dice from './dice.jsx'
import { nanoid } from 'nanoid'
import { Form, Link } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import '../Stylesheets/tennerz.css'
import '../Stylesheets/index.css'

export default function tennerz(){

  const [dices , setDices] = React.useState(generateRandomDiceArray());
  const [gameWon , setGameWon] = React.useState(false);
  const {width, height} = useWindowSize()
  const [startTime ,  setStartTime] = React.useState();
  const [gameTime ,  setGameTime] = React.useState();
  const [firstMove , setfirstMove] = React.useState('');
  const [playerName , setPlayerName] = React.useState('');

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
      const endTime = new Date();
      const timeDiff = (endTime - startTime)/1000;
      setGameTime(timeDiff);
    }
  }

  function changeSelected(id){
    if(firstMove === ''){
      setStartTime(new Date());
      setfirstMove('moved');
    }
    setDices(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isSelected: !die.isSelected} : die
    }))
  }

  function handleName(event){
    setPlayerName(event.target.value)
  }

  function addToLeaderBoard(){
    console.log(playerName)
    console.log(gameTime)
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
        <h1 className="title">tennerz</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-grid">
          {diceElements}
        </div>
        {gameWon && <>
          <div className="you-won">You Won in {gameTime} Seconds!!</div> 
          <Form>
            <input
              type="text"
              placeholder="Enter your name"
              className="add-your-name"
              onChange={handleName}
            />
          </Form>
        </>}
        {gameWon &&<Confetti width={width} height={height} />}
        {gameWon ? 
          <Link to='/leaderboard'> 
            <button className="add-to-leaderboard" onClick={addToLeaderBoard}>Add to LeaderBoard</button> 
          </Link>
          :<button className="roll-dice" onClick={rollDice}>Roll</button>}
      </main>
    </>
  )
}