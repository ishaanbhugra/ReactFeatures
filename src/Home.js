import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>FEATURES THAT CAN BE EMBEDDED IN ANY REACT APPLICATION :</h1>

<ol>
    <li><NavLink to="/dataFetchingComponent">API CALL using fetch</NavLink></li>
    <li><NavLink to="/axios">API CALL using Axios</NavLink></li>
    <li><NavLink to="/datePicker">Date Picker</NavLink></li>
    <li><NavLink to="/textToSpeech">Text To Speech</NavLink></li>
    <li><NavLink to="/counter">Counter Application</NavLink></li>
    <li><NavLink to="/table">React Data Table</NavLink></li>

</ol>


    </>
  )
}

export default Home