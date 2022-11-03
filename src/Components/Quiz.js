import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder'
import "../App.css"
import ProgressBar from './ProgressBar'




export default function Quiz(){
  
   
  const[current,setcurrent]=useState(0)
  const {correct} = useContext(QuizContext)
  return (
    <div className='container flex justify-center items-center'> 
      <Box current={current} handler={setcurrent}/>
    </div>
  )
}
const Box = ({current,handler}) =>{
    const[Percent,setPercent]=useState(0);

    useEffect(()=>{
    console.log(Percent)
    },[Percent])
    const {quizzes,correct,setcorrect,setexit} = useContext(QuizContext);
    const[answer,setanswer] = useState("");
  
    const saveHandler = ()=>{
          if(quizzes[current].correct_answer === answer){

            if(Percent+5>100)return;
            setPercent(Percent+5);

              setcorrect(correct+1);
              handler(current+1)
             document.getElementById("para").innerHTML = " Correct Answer"

          }else{
             document.getElementById("para").innerHTML = "Sorry Your Answer Was Incorrect"
             setcorrect(correct);
             handler(current)
            }

            if(current+1 === quizzes.length){
              setexit(true)
            }

          
    }

  
    
    return(
        <>
        <h3 id='headtext'>CLICK ON AN OPTION AND THEN CLICK NEXT</h3>
        <div className="container" style={{width:"60%",minHeight:"600px",marginTop:"7%", marginLeft:"20%", boxShadow:"0px 3px 11px 7px black"}}>
                
              <ProgressBar Percent={Percent + '%'}/>
                <div className="question">Questions {current+1} of 20</div>
                <h5 style={{fontSize:"0.90rem",}}><i>Entertainment: Board Games</i></h5>
                <h5 style={{fontSize:"1.25rem",}}><strong>{quizzes[current].difficulty}</strong></h5>

                <p id="para"></p>
                <div className="p-2 text-3xl">{quizzes[current].question}</div>
                <div className="row mt-2">
                    <button  className="border btn btn-success" onClick={()=>setanswer(quizzes[current].correct_answer)}>{quizzes[current].correct_answer}</button>
                    <button  className="border btn btn-success" onClick={()=>setanswer(quizzes[current].incorrect_answers[0])}>{quizzes[current].incorrect_answers[0]}</button>
                    <button  className="border btn btn-success" onClick={()=>setanswer(quizzes[current].incorrect_answers[1])}>{quizzes[current].incorrect_answers[1]}</button>
                    <button  className="border btn btn-success" onClick={()=>setanswer(quizzes[current].incorrect_answers[2])}>{quizzes[current].incorrect_answers[2]}</button>
                </div>
                </div>
                <div className="flex justify-between mt-2">
                    <button className='p-2 btm-btn border' onClick={saveHandler} >Next</button>
                </div>
        </>
    )
}