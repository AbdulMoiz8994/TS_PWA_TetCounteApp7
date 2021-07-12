import React from 'react'
import {TimerNumberType} from '../../Timer_Types/Timer_Types'

import './TimerNumber.css'
export const TimerNumber: React.FC<TimerNumberType> = ({timer:{hour,minutes,seconds}}) => {
    return (
        <div className="time-display">
            <span>{hour < 10 ? `0${hour}` : hour}:</span>
            <span>{minutes < 10 ? `0${minutes}` : minutes}:</span>
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>

        </div>
    )
}
