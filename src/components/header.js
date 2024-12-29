import reactLogo from "./images/react-logo.png"

function Header (props) {

  return (
    <nav className="navbar" id={props.darkMode ? "" : "lightBody"}>
      <img className="react-logo" src={reactLogo}></img>
      <h3 id={props.darkMode ? "" : "lightText"}>ReactFacts</h3>     
      <li>News</li>
      <li>Contact</li>
      <li>About</li>
      <li 
        title='Change Theme' 
        onClick={props.toggleDarkMode}
      >{props.darkMode ? "Dark Mode" : "Light Mode"}</li>
    </nav>
  )
}

export default Header