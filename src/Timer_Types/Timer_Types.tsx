export type TimerState={
    hour: number,
    minutes: number,
    seconds: number,
}

export interface TimerNumberType{
    timer: TimerState   
}

export type TimerButtonProp={
    ButtonAction: () =>void,
    ButtonValue: string
}
