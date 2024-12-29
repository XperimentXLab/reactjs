function Main (props) {
  return (
    <div className="main-div" id={props.darkMode ? "": "lightBody"}>
      <h2 
        className="facts-title" 
        id={props.darkMode ? "" : "lightText"}
      >Fun facts about React</h2>
      <ul className="facts-list" id={props.darkMode ? "" : "lightText"}>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default Main