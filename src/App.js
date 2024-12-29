import Header from './components/header.js'
import Main from "./components/main-.js"
import Footer from './components/footer.js';
import { useState } from 'react';

function App () {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode () {   
    document.body.classList.toggle("lightBody")
    setDarkMode(prevState => !prevState)
  }

  return (
  <div>
    <Header 
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode}
    />
    <Main darkMode={darkMode}/>
    <Footer darkMode={darkMode}/>
  </div>
  )
}

export default App