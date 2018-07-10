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
                <div className='body'>
                    <div className='main-event'>
                        <img src='/potting-party.jpg' alt='potting party'/>
                        <div className='event-desc'>
                            <h1>Potting Parties</h1>
                            <p>
                                Come join us this Saturday four our monthly
                                Potting Party.  There will be a lot of laughter,
                                food, and you get to take home a one of a kind
                                planter to add to your collection.
                            </p>
                            <p>
                                Bring a friend, we supply the rest!
                            </p>
                            <p>
                                Call the store to reserve your spot, hurry as they
                                fill up quickly.
                            </p>
                        </div>
                    </div>
                    <div className='sub-events'>
                        <div className='img-button'>
                            <img src='/floral-arrangements.jpg' alt='floral arranging' width='100%' />
                            <div>Floral Arranging</div>
                        </div>
                        <div className='img-button'>
                            <img src='/wreath-making.jpg' alt='wreath making' width='100%' />
                            <div>Wreath Making</div>
                        </div>
                        <div className='img-button'>
                            <img src='/fairy-garden.jpg' alt='fairy gardens' width='100%' />
                            <div>Fairy Gardens</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}