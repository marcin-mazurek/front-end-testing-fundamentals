import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../task-6/Tooltip';

describe('Tooltip', () => {
  it('renders an element passed as a child', () => {
    const child = <strong>Main text</strong>
    const wrapper = shallow(<Tooltip text="Help text">{child}</Tooltip>);

    expect(wrapper.contains(child)).toBe(true);
  });

  it('does not display the tooltip by default', () => {
    const wrapper = shallow(<Tooltip text="Help text">Main text</Tooltip>);
    expect(wrapper.text()).not.toContain('Help text');
  });

  it('shows the tooltip on hover', () => {
    const wrapper = shallow(<Tooltip text="Help text">Main text</Tooltip>);

    wrapper.simulate('mouseEnter');

    expect(wrapper.find('.tooltip__text').text()).toBe('Help text');
  });

  it('hides the tooltip on mouse leave', () => {
    const wrapper = shallow(<Tooltip text="Help text">Main text</Tooltip>);

    wrapper.simulate('mouseEnter');
    wrapper.simulate('mouseLeave');

    expect(wrapper.text()).not.toContain('Help text');
  });
});