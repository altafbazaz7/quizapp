import React from 'react'
import Quiz from './Components/Quiz'
import Result from './Components/Result'
import Start from './Components/Start'
import QuizHolder from './Context/QuizHolder'
import {QuizContext} from './Context/QuizHolder'
import { useContext } from 'react'
import "./App.css"
import { Progress } from 'antd'

const App = () => {
  const{start,exit}=useContext(QuizContext)
   
  return (
    <>
    {
      exit===false
      ?
      <>
      {
      start === true
      ? 
      <Quiz/>
      :
      <Start/>
      }
      </>
      :
    <Result/>
    }
    <Progress/>
    </>
  )
}

export default App
