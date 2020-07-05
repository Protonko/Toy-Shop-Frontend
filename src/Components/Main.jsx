import React from 'react';
import Filter from '../containers/Filter';
import {Container} from './Common/Container';
import {Content} from './Content';
import {Loader} from './Common/Loader';

export const Main = props => {
    return (
        <main className="page__content">
            <Container classNames="container page__content-wrapper">
                {!props.isLoaded
                    ? <Loader />
                    : (
                        <>
                            <Content {...props} />
                            <Filter />
                        </>
                    )
                }
            </Container>
        </main>
    );
}
