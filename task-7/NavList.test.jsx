import React from 'react';
import NavList from './NavList';
import { shallow } from 'enzyme';

const links = [
  { href: 'http://example.com/page/1', text: 'Example link 1' },
  { href: 'http://example.com/page/2', text: 'Example link 2' },
  { href: 'http://example.com/page/3', text: 'Example link 3' },
];

describe('NavList', () => {
  it('renders a "The menu is empty" text if no links are given', () => {
    const wrapper = shallow(<NavList />);
    expect(wrapper.text()).toBe('The menu is empty');
  });

  it('renders an ul with links', () => {
    const wrapper = shallow(<NavList links={links} />);

    expect(wrapper.find('a')).toHaveLength(3);

    expect(wrapper.find('a').at(0).prop('href')).toBe(links[0].href);
    expect(wrapper.find('a').at(1).prop('href')).toBe(links[1].href);
    expect(wrapper.find('a').at(2).prop('href')).toBe(links[2].href);

    expect(wrapper.find('a').at(0).prop('children')).toBe(links[0].text);
    expect(wrapper.find('a').at(1).prop('children')).toBe(links[1].text);
    expect(wrapper.find('a').at(2).prop('children')).toBe(links[2].text);
  });

  it('marks the active link with an appropriate class', () => {
    const wrapper = shallow(<NavList links={links} activeLink={links[1].href} />);
    const activeLink = wrapper.find('.link--active');

    expect(activeLink).toHaveLength(1);
    expect(activeLink.prop('href')).toBe(links[1].href);
  });
});