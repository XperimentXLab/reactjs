//State and Effect Practices

import { useEffect, useState } from "react"

function WindowTracker () {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => { //assessing window data using useEffect
    function watchWindow () { //effect function
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener("resize", watchWindow)

    return () => { //cleanup function to avoid leakers of function in State
      window.removeEventListener("resize", watchWindow)
    }
  }, [])

  return (
    <div>
      <h3>Window Width : {windowWidth}</h3>
      <h3>Window Height: {windowHeight}</h3>
    </div>
  )
}

function S_E () {

  const [show, setShow] = useState(true)

  function toggleShow () {
    setShow(prevState => !prevState)
    console.log(show)
  }

  return (
    <div className="practice-div">
      <h4>State & Effect Practice</h4>

      <button onClick={toggleShow}>
        Toggle WindowTracker
      </button>

      {show ? <WindowTracker /> : <></>}

    </div>
  )
} 

export default S_E