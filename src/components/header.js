function Header (props) {
  return (
    <nav 
      className="header"
      id={props.darkMode ? "dark" : ""}
    >
      <span
        className="head"
      >Notes App</span>
      <img
        className="mode"
        title="Change Mode"
        onClick={props.toggleChangeMode}
        src={props.darkMode ? "./images/lamp-cartoon-bw.png" : "./images/lamp-cartoon.png"}
      />
    </nav>
  )
}

export default Header