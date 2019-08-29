import React from 'react';
import App from './App';
import {shallow} from 'enzyme'

describe('App', () => {
  it('should take a snapshot of the App Component', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
