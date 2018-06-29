import React, { Component } from 'react';

import Header from './header/Header';
import SubHeader from './header/SubHeader';
import Footer from './Footer';

export default class Events extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Events'>
                <Header />
                <SubHeader />
                <Footer />
            </div>
        )
    }
}