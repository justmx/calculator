import React from 'react';
import { shallow } from 'enzyme';
import HistroyPanel from '../components/HistroyPanel';

const records = [
  '1 + 1 = 2', '1 + 2 = 3', '1 x 1 = 1'
]

describe('HistroyPanel', () => {
  it('should render HistroyPanel', () => {
    const histroyPanel = shallow(<HistroyPanel records={records} />);
    expect(histroyPanel).toMatchSnapshot();
  });

  it('renders record items', () => {
    const histroyPanel = shallow(<HistroyPanel records={records} />);
    expect(histroyPanel.find('.record-item')).toBeDefined();
    expect(histroyPanel.find('.record-item')).toHaveLength(records.length);
  });
});