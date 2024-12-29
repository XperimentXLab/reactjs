import { useState } from "react"
import {nanoid} from "nanoid"
import NewTry from "./NewTry"

function Try () {

  function Box (props) {
    return (
      <div 
        className="box-div" 
      >
        <span>{props.value}</span>
      </div>
    )
  }

  const [numBer, setNumBer] = useState(changeNum())

  function changeNum () {
    const num = []
    for (let i=0; i < 5; i++) {
      num.push({
        id: nanoid(),
        value: Math.floor(Math.random()*6)
      })
    }
    return num
  }


  const newBox = numBer.map(num => {
    return (
    <Box key={num.id} value={num.value} />
    )}) //key is buggy

  const [theAlpha, setTheAlpha] = useState([
    "A", "B", "C", "D", "E"
  ])

  const alphabet = theAlpha.map((alphabet, index) => (
  <span>{index}. {alphabet}, </span>))

  return (
    <div className="try-div">
      <h3>Try By Myself</h3>
      {newBox}
      <br />
      {alphabet}
      <hr />
      <NewTry />
    </div>
  )
}

export default Try