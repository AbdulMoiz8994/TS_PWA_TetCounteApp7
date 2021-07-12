import React from 'react';
import {shallow} from 'enzyme'
import {Timer} from './Timer'
import {TimerNumber} from '../TimerNumber/TimerNumber'
import {TimerButton} from '../TimerButton/TimerButton'
// import {TimerNumberType} from '../../Timer_Types/Timer_Types'

describe('Timer Comp',() =>{
  let container=shallow(<Timer/>)   

    it('Chekcing Div',() =>{
      expect(container.find('div')).toHaveLength(1)
    });
   
   test('checking Timer Number Comp ',() =>{
     expect(container.containsMatchingElement(<TimerButton ButtonAction={jest.fn} ButtonValue={""}/>))
   })  
  

   test('Checking the Timer Number',() =>{
     expect(container.containsMatchingElement(<TimerNumber timer={container.props().timer}/>))
   })
 
   test('Checking The Timer Number Element',() =>{
     expect(container.find('TimerNumber').length).toBeGreaterThanOrEqual(1)
   })
   it('chekcing the Timer Button',() =>{
     expect(container.find('TimerButton').length).toBe(3)
   })
})

