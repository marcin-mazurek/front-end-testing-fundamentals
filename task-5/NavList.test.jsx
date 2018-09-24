import React from 'react';
import NavList from './NavList';
import NavItem from './NavItem';
import { shallow } from 'enzyme';

const links = [
  { href: 'http://example.com/page/1', text: 'Example link 1' },
  { href: 'http://example.com/page/2', text: 'Example link 2' },
  { href: 'http://example.com/page/3', text: 'Example link 3' },
];

describe('NavList', () => {
  it('renders a "The menu is empty" text if no links are given', () => {
    const wrapper = shallow(<NavList />);
    expect(wrapper.text()).toEqual('The menu is empty');
  });

  it('renders an ul with NavLinks', () => {
    const wrapper = shallow(<NavList links={links} />);

  });

  it('marks the active link with an appropriate class', () => {
    const wrapper = shallow(<NavList links={links} activeLink={links[1].href} />);

  });
});