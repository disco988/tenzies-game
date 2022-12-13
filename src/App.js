
import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"



export default function App() {


  



const [dice, setDice] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)

function allNewDice () {

  const newDice = []

for (let i = 0; i < 10; i++) {
  
  newDice.push(
    {value:Math.ceil(Math.random()* 6),
    isHeld: false,
  id:nanoid()}
  )
}
return newDice


}


React.useEffect(() => {
  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value
  const allSameValue = dice.every(die => die.value === firstValue)
  if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
  }
}, [dice])



  const diceElements = dice.map(die => <Die isHeld={die.isHeld} value={die.value} onClick={() => holdDice(die.id)} key={die.id}/>)
  
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
      {...die, isHeld: !die.isHeld} : die
    }))}



  function handleRoll () {

    if(tenzies){

      setDice(allNewDice())
    }
    else{


    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
      die : {value:Math.ceil(Math.random()* 6),
            isHeld: false,
            id:nanoid()
          }}))
        
        
        }}



  

  return(
    <main>
      <h1 className="title">Tenzies Game</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it!</p>
      <div className="container">
      {diceElements} 
      </div>
      <button
      className="roll-button"
      onClick={handleRoll}
      >{tenzies ? "Reset" : "Roll"}</button>
    </main>
  )
  }
