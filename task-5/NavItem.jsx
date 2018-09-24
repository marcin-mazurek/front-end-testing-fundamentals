const NavItem = ({ href, isActive, text }) => 
  <a href={link.href} className={isActive && 'link--active'}>{text}</a>;

export default NavItem;