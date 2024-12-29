import {useState} from "react"
import Body from "./useStatePractice2"

function UseStatePractice () {
  const [chac, setChac] = useState("A")

  function handleChange () {
    if (chac === "A") {
      setChac("B")
    } else if (chac === "B") {
      setChac("C") 
    } else if (chac === "C"){
      setChac("A")
    }
  }

  const [result, setResult] = useState("Yes")

  function handleClick () {

    if (result === "Yes") {
      setResult("No")    //giving new value of the state
    } else {
      setResult ("Yes")
    }
  
    return(
      console.log(result)
    )
  }

  const [count, setCount] = useState(0)

  function handleCountAdd () {
    return (
      setCount(oldValue => oldValue + 1)   //use call back function can trace back old value of state
    )
  }

  function handleCountMinus () {
    return (
      setCount(count - 1)
    )
  }

  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

  function addThings () {

    return (
      setThingsArray(prevState => [...prevState, `Thing ${prevState.length+ 1} `] ), 
      console.log(thingsArray)
    )
  }

  //Complex State: Object
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Wayne",
    isFavorite: true
  }
  )

  //let starIcon = contact.isFavorite ? "./images/star-filled.png" : "./images/star-empty.png" 

  function toggleFav () {
    setContact(prevState => {
      return {
      ...prevState,
      isFavorite: !prevState.isFavorite
    }})
  }

  //Passing state as Props
  function Counting (props) {
    return (
        <span className="p-span">{props.number}</span>
    )
    
  }

  //Setting State from child components
  function Star (props) {
    const starIcon = props.isFilled ? "./images/star-filled.png" : "./images/star-empty.png"
    return (
      <img className="star--img" src={starIcon}></img>
    )
  }

  //Setting State at Parent components and connect in child components
  const [user, setUser] = useState("Moon")

  return (
    <div className='practice-div'>
      <h3>UseState Practice</h3>
        <button onClick={handleClick}>{result}</button>
        <br></br>
        <button onClick={handleCountMinus}>-</button>
        <Counting number={count}/>
        <button onClick={handleCountAdd}>+</button>
      <br></br>
      <span className="p-span">{chac}</span>
      <button onClick={handleChange}>Change</button>
      <br></br>
      <button onClick={addThings}>Add Things</button>
      <p>{thingsArray}</p>
      <br></br>
      <div>
        <button onClick={toggleFav}>Toggle Favorite</button>
        <span className="p-span">{contact.firstName} {contact.lastName}</span>
        <Star isFilled={contact.isFavorite}/>
      </div>
      <br></br>
      <Body user={user}/>
      <br></br>
    </div>
  )

}

export default UseStatePractice