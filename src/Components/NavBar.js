import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const myLinks = [
    {
      id: 1,
      text: 'Home',
      path: '/',
    },
    {
      id: 2,
      text: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      text: 'Quote',
      path: '/quote',
    },
  ];

  return (
    <header className={styles.header}>
      <h1>Math-Magicians</h1>
      <nav>
        <ul className={styles.links_contianer}>
          {myLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
