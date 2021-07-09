import React,{useState} from 'react'
import {TimerState} from '../../Timer_Types/Timer_Types'



export const Timer = () => {

   const [timer, setTimer]=useState<TimerState>({hour:0,minutes: 0, seconds: 0})   
   const [status, setStatus]=useState<number>(0)
   const [inter, setInterv]=useState<any>()

function Run(){
    // start()
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
        <div>
            <span>{timer.hour < 10 ? `0${timer.hour}` : timer.hour}</span>
            <span>{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}</span>
            <span>{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</span>
            <button onClick={Run}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
