import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('Component: App', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  //TODO: change after components implementation
  it('should render initial block', () => {
    const initialBlock = wrapper.find('div'); 

    expect(initialBlock).toHaveLength(1);
    expect(initialBlock.text()).toStrictEqual('App');
  });
});


