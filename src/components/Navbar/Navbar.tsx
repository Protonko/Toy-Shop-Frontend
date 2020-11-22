// types
import {INavData} from 'models/interfaces';

import React, {FC} from 'react';
import {navData} from './navData';
import {NavbarItem} from './NavbarItem';

export const Navbar: FC = () => {
  const renderNav = (nav: INavData) => (
    <NavbarItem key={nav.id} href={nav.href} title={nav.title}/>
  );

  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list list list--reset">
        {navData.map(renderNav)}
      </ul>
    </nav>
  );
}
