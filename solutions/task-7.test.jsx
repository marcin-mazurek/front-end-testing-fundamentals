import React from 'react';
import { shallow } from 'enzyme';
import NavList from '../task-7/NavList';

const links = [
  { href: 'http://example.com/page/1', text: 'Example link 1' },
  { href: 'http://example.com/page/2', text: 'Example link 2' },
  { href: 'http://example.com/page/3', text: 'Example link 3' },
];

describe('NavList', () => {
  it('renders a "The menu is empty" text if no links are given', () => {
    const wrapper = shallow(<NavList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an ul with links', () => {
    const wrapper = shallow(<NavList links={links} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('marks the active link with an appropriate class', () => {
    const wrapper = shallow(<NavList links={links} activeLink={links[1].href} />);
    expect(wrapper).toMatchSnapshot();
  });
});