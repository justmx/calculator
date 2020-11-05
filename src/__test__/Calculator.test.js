import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from '../components/Calculator';

const histroyRecords = [];

let wrapper, display;
describe('Calculator', () => {
  
  beforeEach(() => {
     wrapper = mount(<Calculator records={histroyRecords} removeHistory={jest.fn()} addRecord={jest.fn()} />);
     display = wrapper.find('.display');
  });


  it('should render Calculator', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display digit when click on digit', () => {
	  wrapper
	    .find({ 'data-testid': '7' })
	    .simulate('click');

	 expect(display.text()).toEqual('7');
  });

  it('should display result when click on some keys', () => {
	  wrapper
	    .find({ 'data-testid': '2' })
	    .simulate('click');
	 wrapper
	    .find({ 'data-testid': '+' })
	    .simulate('click');
	 wrapper
	    .find({ 'data-testid': '2' })
	    .simulate('click');
	 wrapper
	    .find({ 'data-testid': '8' })
	    .simulate('click');
	 wrapper
	    .find({ 'data-testid': '=' })
	    .simulate('click');


	 expect(display.text()).toEqual('30');
  });

});