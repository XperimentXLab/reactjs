import { useEffect, useState } from "react";

//Interact with API = request a data from API
/*
  Broken ways to do in React
  1. GET the data (fetch)
  2. Save the data to state

  function APIPractice () {
  const [starWarsdata, setStarWarsData] = useState({})

  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))

  return (
    <div>
      <h3>API Practice</h3>
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
    </div>
  )
} 
# fetch on top making it rerendered in the background everytime


Side Effects
#What React can't handle on its own
  - (Out)side Effects
    - localStorage
    - API/database interactions
    - Subscriptions (web socket)
    - Sync 2 different internal states together
    

UseEffect()
# always run on first render n during rerender
# lets you synchronize a component with an external system
# syntax and default behaviour
  - UseEffect(function{side effects code}, [dependencies])
  - When to use dependencies

!! useEffect() to render side effect in React with dependencies without error

*/


function UseEffectsPractice () {
  const [count, setCount] = useState(0)
  const [starWarsdata, setStarWarsData] = useState({})

  console.log("Counting...")

  /*
  **useEffect() takes function as its parameter. If that function returns something, it needs to be a cleanup function. Otherwise, it should return nothing. If we make it an async function, it automatically returns a promise instead of a function or nothing. Therefore, if you want to use async operations inside of useEffect(), you need to define the function seperately inside of the callback function. 

  useEffect(() => {
    async function getMeme() {
      const res = await fetch(`https://swapi.dev/api/people/${count}`)
      const data = await res.json()
      setStarWarsData(data)
    }
    console.log("Effect function ran")
    getMeme()
  }, [count]) 
  */

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`) //side effect code
      .then(res => res.json())
      .then(data => setStarWarsData(data))

    console.log("Effect function ran")
  }, [count]) //dependencies

  function toggleAdd () {
    setCount(prevState => {return prevState += 1})
  }

  return (
    <div className="practice-div">
      <h3>UseEffects Practice</h3>

      <h5>The count: {count}</h5><button onClick={toggleAdd}>Get Next Character</button>

      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
      
      
    </div>
  )
}

export default UseEffectsPractice