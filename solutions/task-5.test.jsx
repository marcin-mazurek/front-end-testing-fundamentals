import React from 'react';
import { shallow } from 'enzyme';
import NavList from '../task-5/NavList';
import NavItem from '../task-5/NavItem';

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

    expect(wrapper.find(NavItem)).toHaveLength(3);

    expect(wrapper.find(NavItem).at(0).prop('href')).toEqual(links[0].href);
    expect(wrapper.find(NavItem).at(1).prop('href')).toEqual(links[1].href);
    expect(wrapper.find(NavItem).at(2).prop('href')).toEqual(links[2].href);

    expect(wrapper.find(NavItem).at(0).prop('text')).toEqual(links[0].text);
    expect(wrapper.find(NavItem).at(1).prop('text')).toEqual(links[1].text);
    expect(wrapper.find(NavItem).at(2).prop('text')).toEqual(links[2].text);
  });

  it('marks the active link with an appropriate class', () => {
    const wrapper = shallow(<NavList links={links} activeLink={links[1].href} />);
    const activeLink = wrapper.find(NavItem).find({ isActive: true });

    expect(activeLink).toHaveLength(1);
    expect(activeLink.prop('href')).toEqual(links[1].href);
  });
});