//import { useState } from "react"

function Box (props) {
  //const [on, setOn] = useState(props.on)
  
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }

  /*
  function toggleOn () {
    setOn(prevState => !prevState),
    console.log(on)
  }
  */

  return (
    <div
      className="box-span" 
      style={styles} 
      onClick={props.toggle}
    >
    </div>
  )
}

export default Box