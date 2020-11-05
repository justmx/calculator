import React from 'react';
import { shallow } from 'enzyme';
import HistroyPanel from '../components/HistroyPanel';

const records = [
  '1 + 1 = 2', '1 + 2 = 3', '1 x 1 = 1'
]

describe('HistroyPanel', () => {
  it('should render HistroyPanel', () => {
    const wrapper = shallow(<HistroyPanel records={records} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders record items', () => {
    const wrapper = shallow(<HistroyPanel records={records} />);
    expect(wrapper.find('.record-item')).toBeDefined();
    expect(wrapper.find('.record-item')).toHaveLength(records.length);
  });
});