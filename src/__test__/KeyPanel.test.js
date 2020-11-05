import React from 'react';
import { shallow } from 'enzyme';
import KeyPanel from '../components/KeyPanel';

const left_data = [
  '(', ')', 'mc', 'm+', 'm-', 'mr'
]

const right_data = [
{
  
  content: 'C',
  colour: '#a4a4a4'
},
{
  
  content: '+/-',
  colour: '#a4a4a4'
},
{
  
  content: '%',
  colour: '#a4a4a4'
},
{
  
  content: '/',
  colour: '#e49425'
},
{
  
  content: '7',
  colour: '#363636'
}];

describe('KeyPanel', () => {
  it('should render KeyPanel', () => {
    const wrapper = shallow(<KeyPanel left_data={left_data} right_data={right_data}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Buttons', () => {
    const wrapper = shallow(<KeyPanel left_data={left_data} right_data={right_data}/>);
    expect(wrapper.find('Button')).toBeDefined();
    expect(wrapper.find('Button')).toHaveLength(left_data.length + right_data.length);
  });
});
