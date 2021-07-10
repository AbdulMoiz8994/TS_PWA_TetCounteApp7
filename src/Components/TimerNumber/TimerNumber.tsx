import React from 'react'
import {TimerNumberType} from '../../Timer_Types/Timer_Types'


export const TimerNumber: React.FC<TimerNumberType> = ({timer}) => {
    return (
        <div>
            <span>{timer.hour < 10 ? `0${timer.hour}` : timer.hour}</span>
            <span>{timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}</span>
            <span>{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</span>

        </div>
    )
}
