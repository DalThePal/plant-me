import React, { Component } from 'react';

import Header from './header/Header';
import SubHeader from './header/SubHeader';

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
                        <img src='/small-vegetable-business.jpg' alt='how we started' width='100%'/>
                        <div>How we started...</div>
                    </div>
                    <div className='img-button'>
                        <img src='/chairs.jpg' alt='what inspires us' width='100%'/>
                        <div>What inspires us...</div>
                    </div>
                    <div className='img-button'>
                        <img src='/potted-cactus.jpg' alt='what inspires us' width='100%'/>    
                        <div>Employee favorites...</div>
                    </div>
                </div>
            </div>
        )
    }
}