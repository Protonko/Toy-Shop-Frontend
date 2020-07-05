import React from 'react';
import {NavbarItem} from './NavbarItem';

export const Navbar = () => (
  <nav className="header__navigation">
      <ul className="header__navigation-list list list--reset">
          <NavbarItem href="/" title="Catalog" />
          <NavbarItem href="/delivery" title="Delivery" />
          <NavbarItem href="/payment" title="Payment" />
          <NavbarItem href="/support" title="Support" />
      </ul>
  </nav>
);
