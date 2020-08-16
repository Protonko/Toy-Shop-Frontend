import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from 'assets/icons/logo.svg';
import {Container} from 'components/Common/Container';
import {Navbar} from 'components/Navbar/Navbar';
import Cart from 'containers/Cart';

export const Header = () => (
  <header className="header">
    <Container classNames="container page__header-wrapper">
      <NavLink to="/" className="header__logo logo">
        <Logo/>
      </NavLink>

      <Navbar/>

      <Cart/>
    </Container>
  </header>
);
