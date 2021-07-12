import React from 'react'
import {TimerButtonProp} from '../../Timer_Types/Timer_Types'
import './TimerButton.css'

export const TimerButton:React.FC<TimerButtonProp> = ({ButtonAction,ButtonValue}) => {

    return (
        <div className="button-container">
          <button onClick={ButtonAction} >{ButtonValue}</button>  
        </div>
    )
}
