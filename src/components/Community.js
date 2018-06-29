import React, { Component } from 'react';

import Header from './header/Header';
import SubHeader from './header/SubHeader';
import Footer from './Footer';

export default class Community extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Community'>
                <Header/>
                <SubHeader/>
                <div className='body'>
                    <img src='/3cactus.jpg' alt='cactus' width='100%'/>
                    <p>Join our community by visiting our Facebook page
                        to follow and add to discussions on plant tips 
                        and recommendations!
                    </p>
                </div>
            </div>
        )
    }
}