import React from 'react'
import {shallow} from 'enzyme'
import {TimerButton} from './TimerButton'


describe('Testing TimerButton',() =>{
   let  container=shallow(<TimerButton ButtonAction={jest.fn} ButtonValue={""}/>)


it('Chekcing Div',() =>{
    expect(container.find('div').length).toBeGreaterThanOrEqual(1)
})

it('Chekcind Span',() =>{
    expect(container.find('button').length).toEqual(1)
})

})