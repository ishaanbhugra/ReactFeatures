import React from 'react'

const TextToSpeech = () => {

    function handleClick(){
const text = "Hello, Welcome to Text to Speech React application"

const value= new SpeechSynthesisUtterance(text)

window.speechSynthesis.speak(value) 
//use speak of browser
//feature of javascript
    }


  return (
    <>
    <h2>Text To Speech</h2>
<button onClick={handleClick}>SPEAK</button>

    </>
  )
}

export default TextToSpeech