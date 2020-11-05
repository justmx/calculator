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
    const keyPanel = shallow(<KeyPanel left_data={left_data} right_data={right_data}/>);
    expect(keyPanel).toMatchSnapshot();
  });

  it('renders Buttons', () => {
    const keyPanel = shallow(<KeyPanel left_data={left_data} right_data={right_data}/>);
    expect(keyPanel.find('Button')).toBeDefined();
    expect(keyPanel.find('Button')).toHaveLength(left_data.length + right_data.length);
  });
});
