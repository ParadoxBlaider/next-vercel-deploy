import { ActiveLink } from './ActiveLink';
import style from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={style.link}>
      {
        menuItems.map(item => (
          <ActiveLink key={item.href} text={item.text} href={item.href} />
        ))
      }
    </nav>
  )
}