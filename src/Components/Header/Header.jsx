import React from 'react';
import {Container} from '../Common/Container';
import {Navbar} from './Navbar/Navbar';

export const Header = () => {
    return (
        <header className="header">
            <Container classNames="container page__header-wrapper">
                <div className="header__logo logo">
                    logo
                </div>

                <Navbar />

                <div className="header__actions">
                    click
                </div>
            </Container>
        </header>
    );
}
