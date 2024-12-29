import { useState } from "react"
import useID from "./ChallengesData"

function MoreChallenges () {

  //Id not correctly +1
  let nextId = 0

  const [name, setName] = useState('')
  const [artist, setArtist] = useState([])

  function toggleSave () {
    console.log(artist)
    setArtist(prevState => [
      ...prevState,
      {id: nextId++, name: name}])
  }

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  function toggleAdd () {
    const nId = Math.floor(Math.random() * 1000)
    setTodoList(prevState => [
      ...prevState,
      {id: nId, todo: todo}
    ])
  }


  return (
    <div className="practice-div">
      <h3>More Challenges &#8595;</h3>

      <h4>Array</h4>

      <input 
        placeholder="Input artist's name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button
        onClick={toggleSave}
      >Save</button>
        {artist.map(artist => (
          <span className="p-span" key={artist.id}>{artist.name}</span>
        ))}


      <h4>Simplest To Do List</h4>

      <input 
        placeholder="Write your to do list here"
        value={todo}
        onChange={event => setTodo(event.target.value)}
      />
      <button
        onClick={toggleAdd}
      >Add</button>
      <br />
      {todoList.map(todoList => (
        <span className="p-span"
          key={todoList.id}
        >{todoList.todo}{"  "}
          <button 
          >Delete</button>
          <br />
        </span>
      ))}

    </div>
  )
}

export default MoreChallenges