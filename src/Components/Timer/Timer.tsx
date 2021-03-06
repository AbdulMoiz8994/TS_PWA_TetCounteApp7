import React,{useState} from 'react'
import {TimerState} from '../../Timer_Types/Timer_Types'
import {TimerButton} from '../TimerButton/TimerButton'
import {TimerNumber} from '../TimerNumber/TimerNumber'
import './Timer.css'


export const Timer = () => {

   const [timer, setTimer]=useState<TimerState>({hour:0,minutes: 0, seconds: 0})   
   const [status, setStatus]=useState<number>(0)
   const [inter, setInterv]=useState<any>()

function Run(){
    if(status === 0){   
  setInterv(
      setInterval(() =>{
          start()
      },1000)
  )
  setStatus(1) 
  console.log(status);
  
}

}
console.log(status);

function start(){
    if(timer.seconds === 60){
        ++timer.minutes
        timer.seconds=0
    }
    if(timer.minutes === 60){
        ++timer.hour
        timer.minutes=0
    }
    // we can add th else{} or retrun as well
    
 return setTimer({hour: timer.hour, minutes: timer.minutes, seconds: ++timer.seconds})
}


function Stop(){
    if(status !== 0){   
    clearInterval(inter)
    setStatus(0)
}
}
// console.log(inter);

function Reset(){
    setTimer({hour: 0 , minutes: 0, seconds: 0})
    setStatus(0)
    clearInterval(inter)
}

    return (
        <div className="timer-container">
            <h1>Timer Application</h1>
            {/* <div className="time-display "> */}
            <TimerNumber timer={timer}/>
            {/* </div> */}
            <div className="timer-button-container">
            <TimerButton ButtonAction={Run} ButtonValue={"Start"}/>
            <TimerButton ButtonAction={Stop} ButtonValue={"Stop"}/>
            <TimerButton ButtonAction={Reset} ButtonValue={"Reset"}/>
            </div>
        </div>
    )
}
