import React from 'react';
import {shallow} from 'enzyme'
import {Timer} from './Timer'
import {TimerNumber} from '../TimerNumber/TimerNumber'
import {TimerButton} from '../TimerButton/TimerButton'

describe('Timer Comp',() =>{
  let container=shallow(<Timer/>)   

    it('Chekcing Div',() =>{
      expect(container.find('div').length).toBeGreaterThanOrEqual(2)
    });
   
   test('checking Timer Number Comp ',() =>{
     expect(container.containsMatchingElement(<TimerButton ButtonAction={jest.fn} ButtonValue={""}/>))
   })  
  
   it('should be a heading',() =>{
    const heading=shallow(<Timer/>);
    expect(heading.find('h1').length).toEqual(1)
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

