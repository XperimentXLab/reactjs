import Button from "./Button";
import Dies from "./Dies";
import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";

function App() {

  const [tenzies, setTenzies] = useState(false)
  const [dice, setDice] = useState(allNewDice())

  useEffect(()=> {
    let value = dice[0].value
    let isHeld = dice.every(dies => dies.isHeld)
    let isSameValue = dice.every(dies => dies.value === value)
    if (isSameValue && isHeld) {
      return setTenzies(true)
    } else {
      return setTenzies(false)
    }
  }, [dice])

  /*
  useEffect(()=>{
    if (tenzies === true) {
      return alert("You won!")
    } else {
      return setTenzies(false)
    }
  }, [tenzies])
  */

  function allNewDice () {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),
        value: Math.floor(Math.random()*7),
        isHeld: false,
      })
    }
    return newDice
  }


  function rollDice () {
    if (!tenzies) {
      setDice(dices => dices.map(dies => {
        return dies.isHeld === false ? {
          ...dies,
          value: Math.floor(Math.random()*7)
        } : dies
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  
  function holdDice (id) { 
    setDice((dices => dices.map(dies => { 
      return dies.id === id ? 
      {...dies, isHeld: !dies.isHeld} : dies
    }))) 
  }
  
  

  const diceElement = dice.map(dies => {
    return (
      <Dies 
        key={dies.id} 
        id={dies.id}
        value={dies.value} 
        isHeld={dies.isHeld}
        holdDice={()=>holdDice(dies.id)}
      />
    )})

  return (
    <main className="out-line">
      {tenzies && <Confetti />}
      {diceElement}
      <div></div>
      <div></div>
      <Button 
        allNewDice={rollDice}
        tenzies={tenzies}
      />
    </main>
      
  );
}

export default App;
