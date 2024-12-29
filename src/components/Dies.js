function Dies (props) {

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <div 
      className="dies-" 
      style={styles}
      onClick={props.holdDice}
    >
      <h3 
        className="dies-h3"
      >{props.value}</h3>
    </div>
  )
}

export default Dies