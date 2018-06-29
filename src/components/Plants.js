import React, { Component } from 'react';

import Header from './header/Header';
import SubHeader from './header/SubHeader';
import Footer from './Footer';

export default class Plants extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Plants'>
                <Header/>
                <SubHeader/>
                <Footer/>
            </div>
        )
    }
}