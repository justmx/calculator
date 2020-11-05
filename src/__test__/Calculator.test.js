import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Calculator from '../containers/Calculator';

const mockStore = configureMockStore([ thunk ]);
const initialState = {init: {histroy_records: []}};

let store;
let component;

describe('Calculator', () => {
  
  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<Calculator store={store} /> ) ;
  });

  it('should render Calculator', () => {
    expect(component).toMatchSnapshot();
  });
});