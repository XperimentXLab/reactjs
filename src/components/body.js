import { useEffect, useState } from "react"
import {nanoid} from "nanoid"

function Body (props) {

  const date = new Date()
  const fullDate = date.toLocaleDateString()

  //const [FullDate, setFullDate] = useState(fullDate)

  const LSJSON = JSON.parse(localStorage.getItem("notesList"))

  const [notesInput, setNotesInput] = useState("")
  const [notes, setNotes] = useState(()=> LSJSON || [])

  useEffect(()=>{
    localStorage.setItem("notesList", JSON.stringify(notes))
  }, [notes])

  function toggleSave () {
    if(notesInput.trim().length > 0) {
      setNotes(newNote => [
        ...newNote,
        {
          id: nanoid(),
          date: fullDate,
          notes: notesInput
        }
      ])
      setNotesInput("")
    }
  }

  function toggleDelete (id) {
    const newNote = notes.filter((notes)=> notes.id !== id)
    setNotes(newNote)
    console.log(notes)
  }

  function toggleEdit () {
    //try by yourself when you ready

    /*
    setNotes(oldNotes => oldNotes.map(oldNote => {
      return oldNote.id === notes.id 
        ? {...oldNote, notes:text } : oldNote
    }))
    */
  }

  return (
    <main 
      className="body"
      id={props.darkMode ? "dark" : ""}
    >
      <div>
        <textarea
          rows="5"
          cols="8"
          type="text"
          className="notes-input"
          placeholder="Write your notes here"
          value={notesInput}
          onChange={e => setNotesInput(e.target.value)}
        />
        <button
          onClick={toggleSave}
        >Save</button>
      </div>
      <div className="notes">
        {notes.map(notes => (
          <div key={notes.id}>
            <hr />
            <p>{notes.date}</p>
            <span>{notes.notes}</span>
            <br />
            <br />
            <button onClick={()=>toggleDelete(notes.id)}>Delete</button>
            <button>Edit</button>
          </div>
        ))} 
      </div>
    </main>
  )
}

export default Body