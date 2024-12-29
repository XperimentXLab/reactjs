import { useState } from "react"


function Practice2 () {
  
  /*
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  function toggleFirstName (event) {
    console.log("Changed!")
    const eventData = event.target.value
    setFirstName(eventData)
  }

  function toggleLastName (event) {
    console.log("Changed!")
    const eventData = event.target.value
    setLastName(eventData)
  }

  console.log(firstName)
  console.log(lastName) 
  */

  //Tetarea - <textarea />
  //Checkbox - type="radio"
  //Select and Option - <select><option>1</option></select>

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  })

  function toggleFormData (event) {
    const {name, value, type, checked} = event.target
    //console.log(event.target.name)
    setFormData(prevState => {
      return {
        ...prevState, 
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }

  //Submitting a form with a function (recommended in React)
  function toggleSUbmit (event) {
    event.preventDefault() //it won't refresh the page
    console.log(formData)
  }

  //In React, all data gather as the form filled out. All data all held in local state

  return (
    <div>
      <h3>Form Practice</h3>
      <form onSubmit={toggleSUbmit}>
        <label>First Name: </label>
        <input type="text" onChange={toggleFormData} name="firstName" value={formData.firstName} />
        <br />
        <label>Last Name: </label>
        <input type="text" onChange={toggleFormData} name="lastName" value={formData.lastName} />
        <br />
        <label>Email: </label>
        <input type="email" onChange={toggleFormData} name="email" value={formData.email} />
        <br />

        <textarea 
          name="comments" 
          value={formData.comments} 
          onChange={toggleFormData} placeholder="Comments"
        />
        <br />

        <input 
          type="checkbox" 
          id="isFriendly" 
          checked={formData.isFriendly} 
          onChange={toggleFormData} 
          name="isFriendly" 
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />

        <fieldset>
          <legend>Current employment status</legend>

          <input 
            type="radio" 
            id="unemployed" 
            name="employment" //same as main data array (state)
            value="unemployed" //specific value as we only need to check 1
            onChange={toggleFormData} 
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input 
            type="radio" 
            id="part-time"
            name="employment"
            value="part-time"
            onChange={toggleFormData} 
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input 
            type="radio"
            id="full-time"
            name="employment" 
            value="full-time"
            onChange={toggleFormData} 
          />
          <label htmlFor="full-time">Full-time</label>
        </fieldset>
        <br />

          <label htmlFor="favColor">What is your favorite color ?</label>
          <br />
          <select 
            id="favColor"
            value={formData.favColor}
            onChange={toggleFormData}
            name="favColor"
            style={{fontSize: 17}}
          >
            <option value="">--Choose--</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
        <br />
        <br />

        <button style={{fontSize: 19}}>Submit</button>
      </form>
    
    </div>
  )
}

//<button></button> the type auto being "submit"

export default Practice2