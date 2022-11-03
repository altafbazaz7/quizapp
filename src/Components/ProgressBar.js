import React from 'react'

const ProgressBar = ({Percent = '0%'}) => {
  return (
    <>
       <div className="progBar">
                <div className="inBar" style={{'--width':Percent}}>
                 {Percent}
                </div>
               </div>
    </>
  )
}

export default ProgressBar
