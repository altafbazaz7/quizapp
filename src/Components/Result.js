import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'
import "../App.css"

const Result = () => {
  const{correct,setexit,setstart,quizzes}=useContext(QuizContext)
  return (
    <div className="result">
    <h2>{correct} are correct out of {quizzes.length}</h2>
    </div>
  )
}

export default Result
