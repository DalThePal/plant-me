import React, { Component } from 'react';

import Header from './header/Header';
import SubHeader from './header/SubHeader';
import Footer from './Footer';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Home'>
                <Header
                    displayPage='home'
                />
                <SubHeader />
                <div className='body'>
                    <div className='img-button'>
                        <img src='/dummy-img1.jpg' alt='how we started'/>
                        <span>How we started...</span>
                    </div>
                    <div className='img-button'>
                        <img/>
                        <span>What inspires us...</span>
                    </div>
                    <div className='img-button'>
                        <img/>
                        <span>Employee favorites...</span>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}