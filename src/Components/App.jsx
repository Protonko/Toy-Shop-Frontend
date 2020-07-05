import React, {useEffect} from 'react';
import {Header} from './Header/Header';
import {Main} from './Main';
import {Footer} from './Footer';

const App = props => {
    useEffect(() => {
        fetch('https://egorermolaev.ru/API-shop/products.json')
            .then(response => response.json())
            .then((data) => {
                props.setProducts(data)
            })
    }, []);

    return (
        <>
            <Header />
            <Main {...props} />
            <Footer />
        </>
    )
};

export default App;
