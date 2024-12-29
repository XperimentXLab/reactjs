import React, { useEffect, useState } from "react"
//use Mouse Events in React for event listener
//import allData from "./allData"

function Meme () {
  const [meme, setMeme] = useState({
    topText: "",
    randomImage: "",
    bottomText: "",
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function Generate () {
    console.log("Button clicked")
    //const datas = allData.data.memes
    const getRandom = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[getRandom].url
    setMeme(prevState => ({
      ...prevState,
      randomImage: url,
    }))
  }

  function toggleChange (event) {
    const {name, value} = event.target
    setMeme(prevState => ({
      ...prevState,
      [name] : value
    }))
  }

  return (
    <div>
      <div className="form-">
        <input 
          type="text" 
          placeholder="Insert first keyword" 
          className="input-" 
          name="topText"
          value={meme.topText}
          onChange={toggleChange}
        ></input>
        <input 
          type="text" 
          placeholder="Insert second keyword" 
          className="input-"
          name="bottomText"
          value={meme.bottomText}
          onChange={toggleChange}
        ></input>
        <button className="form-button" onClick={Generate}>Get a New Meme Image </button>
      </div>
      <div className="meme-img-div">
        <img className="meme-img" src={meme.randomImage}></img>
        <div className="meme-text">
          <h2>{meme.topText}</h2>
          <h2>{meme.bottomText}</h2>
        </div>
      </div>
    </div>

  )
}

export default Meme
