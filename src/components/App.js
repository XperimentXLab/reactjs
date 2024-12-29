import {useState} from "react"
import Body from "./body"
import Header from "./header"

function App () {

  const [darkMode, setDarkMode] = useState(false)

  function toggleChangeMode () {
    document.body.classList.toggle("dark")
    setDarkMode(prevState => !prevState)
  }

  return (
    <div>
      <Header 
        darkMode={darkMode}
        toggleChangeMode={toggleChangeMode}
      />
      <Body 
        darkMode={darkMode}
      />
    </div>
  )
}

export default App