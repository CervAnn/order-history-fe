import React from 'react';
import Container from './Container';
import {shallow} from 'enzyme'

describe('Container', () => {
  it('should take a snapshot of the Container Component', () => {
    const wrapper = shallow(<Container/>)
    expect(wrapper).toMatchSnapshot()
  })
})