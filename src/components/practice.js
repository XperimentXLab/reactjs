//.map() method in React
import PracticeData from "./practice-data"

//Basic Props
function Hello () {
  const words = "Madd"
  const date = new Date()
  const theDate = date.getDate()

  return (
    <div>
      <p>Hello {words}!</p>
      <p>Today date is {theDate} June 2024</p>
    </div>
  )
}

//React Props
function Contact (props) {
  return (
    <div className="contact-div">
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  )
}

//.map() method to loop array
//1) number
function Num () {
  const num = [1, 2, 3, 4, 5]
  const squared = num.map(function (i){
    return i * i
  })
  return (
    console.log(squared)
  )
} 
//2) strings
function Strings () {
  const names = ["alice", "bob", "charlie", "danielle"]
  const uppercase = names.map((i) => {
    return i[0].toUpperCase() + i.slice(1)
  })
  return (
    console.log(uppercase)
  )
}
//3) include html element
function ArrStr () {
  const pokemon = ["Bulbassaur", "Charmander", "Squirtle"]
  const pokemons = pokemon.map((i) => {
    return `<p>${i}</p>`
  })
  return(
    console.log(pokemons)
  )
}

export default function Practice () {
  return (
    <div>
      //Basic Props
      <br></br>
      <a href="https://google.com" target="_blank">Click the link</a>
      <Hello />
    
      //React Props
      <div className="contact-props-div">
        <Contact 
          name="Mr. Felix"
          phone="(60)123456789"
          email="mr.felix@meow.com"
        />
        <Contact 
          name="Mr.John"
          phone="(60)126987453"
          email="mr.john453@meow.com"
        />
      </div>

      <Num />
      <Strings />
      <ArrStr />
      <PracticeData />

    </div>
  )
}