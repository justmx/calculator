import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

const clickFn = jest.fn();
const content = {content: '1', colour: '#ffffff'};
const contentZero = {
  content: '0',
  colour: '#363636',
  double: true
}

describe('Button', () => {
  it('should render content', () => {
    const wrapper = shallow(<Button content={content} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render button with a double class', () => {
    const wrapper = shallow(<Button content={contentZero} />);
    expect(wrapper.find('.circle').hasClass('double')).toEqual(true);
  });

  it('should fire a function when click', () => {
	  const wrapper = shallow(<Button content={content} onClick={clickFn} />);
	  wrapper
	    .find('.circle-holder-right')
	    .simulate('click');
	 expect(clickFn).toHaveBeenCalled();
  });
});