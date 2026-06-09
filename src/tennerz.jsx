import React from "react";
import Dice from './dice.jsx'
import { nanoid } from 'nanoid'
import { Form, useNavigate } from 'react-router-dom'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { addDoc } from "firebase/firestore"
import { leaderBoardCollection } from "./firebase.js"
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
  const [nameError, setNameError] = React.useState(false);
  const navigate = useNavigate();

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
    setPlayerName(event.target.value);
    if(nameError) setNameError(false);
  }

  async function addToLeaderBoard(){
    if(!playerName.trim()){
      setNameError(true);
      return;
    }
    const LeaderBoardCollection = {
      name : playerName,
      time : gameTime
    };
    await addDoc(leaderBoardCollection,LeaderBoardCollection);
    navigate('/leaderboard');
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
        <h1 className="title">Tennerz</h1>
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
              className={`add-your-name${nameError ? ' input-error' : ''}`}
              onChange={handleName}
            />
            {nameError && <p className="name-error">Please enter your name to submit.</p>}
          </Form>
        </>}
        {gameWon &&<Confetti width={width} height={height} />}
        {gameWon ?
          <button className="add-to-leaderboard" onClick={addToLeaderBoard}>Add to LeaderBoard</button>
          :<button className="roll-dice" onClick={rollDice}>Roll</button>}
      </main>
    </>
  )
}