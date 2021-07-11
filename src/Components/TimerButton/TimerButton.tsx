import React from 'react'
import {TimerButtonProp} from '../../Timer_Types/Timer_Types'


export const TimerButton:React.FC<TimerButtonProp> = ({ButtonAction,ButtonValue}) => {

    return (
        <div>
          <button onClick={ButtonAction}>{ButtonValue}</button>  
        </div>
    )
}
