import React from 'react';
import {shallow} from 'enzyme'
import App from './App';
import {Timer} from './Components/index'


describe('App',() =>{

it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});


it('checking the Timer Comp on App Comp',() =>{
	const Comp=shallow(<App/>);
	expect(Comp.containsMatchingElement(<Timer/>)).toEqual(true)
})

})
