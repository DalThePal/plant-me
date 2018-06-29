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
                        <img src='/dummy-img1.jpg' alt='how we started' width='100%'/>
                        <div>How we started...</div>
                    </div>
                    <div className='img-button'>
                        <img src='/dummy-img1.jpg' alt='what inspires us' width='100%'/>
                        <div>What inspires us...</div>
                    </div>
                    <div className='img-button'>
                        <img src='/dummy-img1.jpg' alt='what inspires us' width='100%'/>    
                        <div>Employee favorites...</div>
                    </div>
                </div>
            </div>
        )
    }
}