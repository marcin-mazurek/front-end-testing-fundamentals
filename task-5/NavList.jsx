import React from 'react';
import NavItem from './NavItem';

const NavList = ({ links = [], activeLink }) => {
  if (links.length === 0) {
    return <span>The menu is empty</span>
  }

  return <ul>
    {links.map((link, index) => 
      <li key={index}><NavItem {...link} isActive={activeLink === link.href} /></li>
    )}
  </ul>
}

export default NavList;