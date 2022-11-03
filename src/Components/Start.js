import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'
import "../App.css"

const Start = () => {
    const {setstart} = useContext(QuizContext)
  return (
    <div id='start' className='container'>
      <h1>KeyMouse Quiz Project</h1>
      <span><i>designed by</i></span>
      <h3>Mohammad Altaf</h3>
      <button className="btn btn-success" onClick={()=>setstart(true)}>Start</button>
    </div>
  )
}

export default Start;
