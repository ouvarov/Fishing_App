import React, {Fragment} from 'react';
import './Style.sass';


import Footer from './commponets/Footer';
import Header from './commponets/Header'
import Content from './commponets/Content'

const Body = () => (
    <Fragment>
        <Header/>
        <Content/>
        <Footer/>
    </Fragment>
);

export default Body;
