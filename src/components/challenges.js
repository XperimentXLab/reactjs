import { useState } from "react"
import Box from "./Box"
import MoreChallenges from "./moreChallenges"

const boxes = [
  {
    id: 1,
    on: true
  },
  {
    id: 2,
    on: false
  },
  {
    id: 3,
    on: true
  },
  {
    id: 4,
    on: true
  },
  {
    id: 5,
    on: false
  },
  {
    id: 6,
    on: false
  },
]


function Challenges () {
  const [square, setSquare] = useState(boxes)
  //CSS in JSX
  //props.darkMode
  //const styles = {
  // backgroundColor: props.on === true ? "#222222" : "#cccccc"
  // }

  function toggle (id) {
    setSquare(prevState => {
       return prevState.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
       })
    }) 
  }

  const boxElement = square.map(boxy => (
    <Box 
      key={boxy.id} 
      on={boxy.on} 
      toggle={() => toggle(boxy.id)}
    />
  ))

  const [messages, setMessages] = useState(["a","b"])

  //Form Challenge
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    ConfirmPassword: "",
    isJoinNewsletter: true,
  })

  function toggleFormData (event) {
    const {name, type, checked, value} = event.target
    setFormData(prevState => ({
        ...prevState, 
        [name] : type === "checkbox" ? checked : value 
    }))
  }

  function toggleSubmitForm (event) {
    event.preventDefault()
    if(formData.password === formData.ConfirmPassword) {
      console.log("Succesfully sign up")
    } else {
      console.log("Passwords do not match")
      return
    }

    if(formData.isJoinNewsletter) {
      console.log("Thanks for our newsletter!")
    }

    console.log(formData)
  }

  return (
    <main className="practice-div">
      <h3>Challenges &#8595;</h3>

      {boxElement} 

      {messages.length > 1 && <h3>You have {messages.length} unread messages!</h3>}
      {messages.length === 1 && <h3>You have {messages.length} unread message!</h3>}
      {!messages.length && <h3>You're all caught up!</h3>}
      {
        messages.length === 0 ?
        <h3>You're all caught up!</h3> : 
        <h3>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}!</h3>
      }

      <form onSubmit={toggleSubmitForm}>
        <input 
          type="email" 
          placeholder="Email" 
          value={formData.email}
          name="email"
          onChange={toggleFormData}
        ></input>
        <br />
        <input 
          type="password" 
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={toggleFormData}
        ></input>
        <br />
        <input 
          type="password" 
          placeholder="Confirm Password"
          value={formData.ConfirmPassword}
          name="ConfirmPassword"
          onChange={toggleFormData}
        ></input>
        <br />
        <input 
          type="checkbox" 
          id="isJoinNewsletter"
          checked={formData.isJoinNewsletter}
          name="isJoinNewsletter"
          onChange={toggleFormData}
        ></input>
        <label htmlFor="isJoinNewsletter">I want to join the newsletter</label>
        <br />
        <button>Sign Up</button>
      </form>
      
      <MoreChallenges />
    </main>
  )
}

export default Challenges