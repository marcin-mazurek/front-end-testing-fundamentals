import React from 'react';

const NavList = ({ links = [], activeLink }) => {
  if (links.length === 0) {
    return <span>The menu is empty</span>
  }

  return <ul>
    {links.map((link, index) =>
      <li key={index}><a href={link.href} className={activeLink === link.href && 'link--active'}>{link.text}</a></li>
    )}
  </ul>
}

export default NavList;