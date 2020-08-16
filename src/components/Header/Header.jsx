import React from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import {Container} from 'components/Common/Container';
import {Navbar} from './Navbar/Navbar';
import Cart from 'containers/Cart';

export const Header = () => (
    <header className="header">
        <Container classNames="container page__header-wrapper">
            <div className="header__logo logo">
                <Logo />
            </div>

            <Navbar />

            <Cart />
        </Container>
    </header>
);
