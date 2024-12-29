import { useState } from "react"

function Body (props) {
  const [color, setColor] = useState("blue")

  function toggleChange () {
    console.log('Change button clicked')
    setColor(prevState => prevState === "blue" ? "red" : "blue") 
  }

  //useState with String
  const [naming, setNaming] = useState('')
  const updateNaming = (event) => {
    setNaming(event.target.value)
  }

  const Staff = [
    {
      name: "Joey",
      color: "Purple"
    },
    {
      name: "Auni",
      color: "Yellow"
    },
    {
      name: "Lizzy",
      color: "Black"
    }
  ]

  const [staff, setStaff] = useState(Staff)
  const staffColor = staff.map((mappin) => {
    return (
      <div>
        <span className="p-span" key={mappin.name}>{mappin.name} | {mappin.color}</span><br />
      </div>
    )
  })

  function ChangeAllSC () {
    setStaff(prevState => {
      return prevState.map((mapping) => {
        return mapping.color === "Black" || "Grey" ? {...mapping, color: "Green"} : mapping
      })
    })
  }

  const department = [
    {
      id: 1,
      name: "B2C",
      active: true
    },
    {
      id: 2,
      name: "B2B",
      active: true
    }, 
    {
      id: 3,
      name: "Inbound",
      active: false
    }, 
    {
      id: 4,
      name: "Return",
      active: false
    },
    {
      id: 5,
      name: "Marketing",
      active: true
    }, 
    {
      id: 6,
      name: "Finance",
      active: true
    }
  ]

  const [departments, setDepartments] = useState(department)

  const theDepartment = departments.map((mappin) => {
    return (
      <div key={mappin.id}>
        <span className="p-span">{mappin.name}</span>
      </div>
    )  
  })

  const [isShown, setIsShown] = useState(false)
  //const [text, setText] = useState("Show")
  function toggleShow () {
    setIsShown(prevState => !prevState)
    //setText(prevState => prevState === "Hide" ? "Show" : "Hide")
  }


  return (
    <div>
      <p>Connect user... {props.user}</p>
      <button onClick={toggleChange}>Change</button>
      <span className="p-span">{color}</span>
      <br />
      <span className="p-span">My name is {naming}</span>
      <input type="text" onChange={updateNaming}></input>
      <br />
      <button onClick={ChangeAllSC}>Match The Staff Color</button>
      {staffColor}
      <button onClick={toggleShow}>{isShown ? "Hide" : "Show"} All Department</button>
      {isShown && <h5>{theDepartment}</h5>}
    </div>
  )
}

export default Body