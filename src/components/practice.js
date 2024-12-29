//Props vs State

import { useState } from "react"
import Practice2 from "./practice2"

//Props - refer properties being passed into components in order for it to work correctly 
//-similar to how a function receive parameter
//-immutable

//State - refer to value that are managed by the components
//-similar to variables declared inside function

const friends = ["Joey", "Auni", "Lizzy"]

function Practice () {
  function handleClick () {
    console.log("Button clicked")
    const dataP = friends
    const getRandom = Math.floor(Math.random() * dataP.length)
    console.log(getRandom)
  }

  function Hover () {
    console.log("It's hovering")
  }

  const friendElement = friends.map(friendd => (<p key={friendd}>{friendd}</p>))
  const [addFriend, setAddFriend] = useState(["Joey", "Auni", "Lizzy"])
  function addFriends () {
    const addNewF = `New Friend ${friends.length + 1}`
    return (
      setAddFriend(prevState => [...prevState, `Friend ${prevState.length + 1}`]),
      friends.push(addNewF),
      console.log(friends)
    )
  }

  //State (JS simple example of State)
  function Greeting () {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const time = hours + ":" + minutes

    let timeOfDay
    if (hours >= 4 && hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 - hours < 17) {
      timeOfDay = "afternoon"
    } else if (hours >= 17 - hours < 20) {
      timeOfDay = "evening"
    } else if (hours >= 20 - hours < 3){
      timeOfDay = "night"
    }

    const greet = `Good ${timeOfDay}, now is ${time}!`

    return (
      <p>{greet}</p>
    )
  }

  //ternary = if `answer` === `true` ? so it will return "Yes" :(if not) "No"
  //let isGoingOut = true
  //let answer = isGoingOut === true ? "Yes" : "No"

  const [goingOut, setGoingOut] = useState(true)
  function changeMind() {
    setGoingOut(prevState => ! prevState)
  }

  const [haveEat, setHaveEat] = useState(true)
  function Answer () {
    setHaveEat(prevState => ! prevState)
  }

  return (
    <div className="practice-div">
      <p>Hi</p>
      <Greeting />
      <button onClick={handleClick} onMouseOver={Hover}>Click</button>
      <button onClick={addFriends}>Add Friend</button>
      {friendElement}
      <br></br>
      <span className="p-span" onClick={changeMind}>Are you going out tonight? {goingOut ? "Yes" : "No"}</span>
      <br></br>
      <span className="p-span" onClick={Answer} >Have you eaten yet ? {haveEat ? "Yes" : "No"}</span>
      <Practice2 />
    </div>
  )
}

export default Practice