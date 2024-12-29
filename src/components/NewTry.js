import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";

function NewTry () {

  function RealDice (props) {

    const styles = {
      backgroundColor: props.nIsHeld ? "#59E391" : "white"
    }

    return (
      <div 
        className="box-div" 
        style={styles}
        onClick={props.nHoldDice}
      >
        <span>{props.nValue}</span>
      </div>
    )
  }

  const [nDices, setNDices] = useState(nAllNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [start, setStart] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  if (seconds > 59) {
    setSeconds(0)
  }
  if (minutes > 59) {
    setMinutes(0)
    setHours(hour => hour +1)
  }
  if (hours > 23) {
    setHours(0)
  }

  useEffect(()=> {
    let timer = setInterval(()=>{
      if (!start) {
        return
      }
      if (tenzies) {
        return
      }
      setSeconds(second=> second +1)
    }, 1000)

    return () => clearInterval(timer)
  }, [start, !tenzies])

  useEffect(()=>{
    let nValue = nDices[0].value
    let nIsHeld = nDices.every(dice => dice.nIsHeld)
    let isSameValue = nDices.every(dice => dice.value === nValue)
    if (isSameValue && nIsHeld) {
      setTenzies(true)
    } else {
      setTenzies(false)
    }
  }, [nDices])

  function nHoldDice (id) {
    setStart(true)
    if (tenzies) {
      return 
    }
    setNDices(dices => dices.map(dice => {
      return dice.nId === id ? 
      {...dice, nIsHeld: !dice.nIsHeld} : dice
    }))
  }

  function nAllNewDice () {
    const newArray = []
    for (let i=0; i < 10; i++) {
      newArray.push({
        nId: nanoid(),
        nValue: (Math.floor(Math.random()*6)+1), 
        nIsHeld: false,
      })
    }
    return newArray
  }

  function nRollDice () {
    if (tenzies) {
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      setStart(false)
      setNDices(nAllNewDice())
      return
    }
    setNDices(dices => dices.map(dice => {
      return dice.nIsHeld === false ? 
      {
        ...dice,
        nValue: (Math.floor(Math.random()*6)+1)
      } : dice
    }))
  }

  const nDiceElement = nDices.map(dice => {
    return (
    <RealDice 
      key={dice.nId}
      nValue={dice.nValue} 
      nIsHeld={dice.nIsHeld}
      id={dice.id}
      nHoldDice={()=>nHoldDice(dice.nId)}
    />)
  })

  return (
    <div>
      {tenzies && <Confetti />}
      <h3>Tenzies Game Tutorial Hell</h3>
      {!start && <p>Roll the Dice to begin play!</p>}
      {start && <div>
        <p>Time {String(hours).padStart(2,"0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</p>
      </div>}
      {nDiceElement}
      <br />
      <button onClick={nRollDice}>{tenzies ? "New Game" : "Roll"}</button>
      <br />
      <br />
    </div>
  )
}

export default NewTry