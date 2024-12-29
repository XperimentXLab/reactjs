const colors = [
  {name: "Red"},
  {name: "Orange"},
  {name: "Yellow"}, 
  {name: "Green"}, 
  {name: "Black"}, 
  {name: "Indigo"}, 
  {name: "Violet"}
]

function Colorss () {
  return (
    <div>
      {colors.map((color) => (
        <p key={color.name}>
          {color.name}
        </p>
      ))}
    </div>
  )
}

const staff = [
  {
    name:"Joey",
    department: "Marketing"
  },
  {
    name:"Auni",
    department: "B2B"
  },
  {
    name:"Lizzy",
    department:"B2C"
  }
]

function Staff () {
  return (
    <div>
      {staff.map((staffs) => (
        <div key={staffs.name}>
          <span>
            <button>{staffs.name}</button>
            <button>{staffs.department}</button>
          </span>
        </div>
      ))}
    </div>
  )
}

export default function PracticeData () {
  return (
    <div>
      <Colorss />
      <Staff />
    </div>
  )
}
