import { useState } from 'react';
import styles from './headerLinks.module.scss'

export function HeaderLinks() {

  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <ul className={styles.list}>
      <li>
        <a
          href="#"
          onClick={() => handleLinkClick('Collections')}
        >
          Collections
        </a>
        <span className={activeLink === 'Collections' ? styles['active'] : ''}></span>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleLinkClick('Men')}
        >
          Men
        </a>
        <span className={activeLink === 'Men' ? styles['active'] : ''}></span>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleLinkClick('Women')}
        >
          Women
        </a>
        <span className={activeLink === 'Women' ? styles['active'] : ''}></span>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleLinkClick('About')}
        >
          About
        </a>
        <span className={activeLink === 'About' ? styles['active'] : ''}></span>
      </li>
      <li>
        <a
          href="#"
          onClick={() => handleLinkClick('Contact')}
        >
          Contact
        </a>
        <span className={activeLink === 'Contact' ? styles['active'] : ''}></span>
      </li>
    </ul>
  );
};