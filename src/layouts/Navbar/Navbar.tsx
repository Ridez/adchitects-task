import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { getPages } from '../../services/breallyApi';
import logo from './logo.svg';
import './styles.scss';

interface Nav {
  url: string;
  id: string;
}

const urlToName = (url: string) => {
  const name = url.slice(1);
  return name[0].toUpperCase() + name.substring(1);
};

export const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<Nav[]>([]);

  const showNav = () => {
    setMenuActive(true);
  };

  const hideNav = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    getPages().then((apiMenuList) => setMenuList(apiMenuList.data));
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar__wrapper'>
        <Link to='/'>
          <img src={logo} alt='breally logo' className='navbar__logo' />
        </Link>
        <div className={`navbar__menu ${menuActive ? 'navbar__menu--active' : ''}`}>
          <ul className='navbar__list'>
            {menuList.map(
              (item) =>
                item.url !== '/' && (
                  <li className='navbar__list-item' key={item.id}>
                    <Link to={item.url}>{urlToName(item.url)}</Link>
                  </li>
                )
            )}
          </ul>
          <Link to='/contact' className='navbar__contact-link'>
            <Button text='Contact us' type='button'></Button>
          </Link>
          <FontAwesomeIcon onClick={hideNav} className='navbar__close' icon={faTimes} />
        </div>

        <FontAwesomeIcon onClick={showNav} className='navbar__bars' icon={faBars} />
      </div>
    </nav>
  );
};
