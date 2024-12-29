function Button (props) {
  return (
    <button 
      className="btn"
      onClick={props.allNewDice}
    >{props.tenzies ? "New" : "Roll"}</button>
  )
}

export default Button