import React from 'react'

export type TimerButtonProp={
    ButtonAction: () =>void,
    ButtonValue: string
}


export const TimerButton:React.FC<TimerButtonProp> = ({ButtonAction,ButtonValue}) => {

    return (
        <div>
          <button onClick={ButtonAction}>{ButtonValue}</button>  
        </div>
    )
}
