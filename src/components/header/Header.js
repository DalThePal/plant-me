import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Header'>
                <div className='search'>
                    <Link to='/search'>
                    <img src='/search-icon.png' alt='search' height='20px' width='22px'/>
                    </Link>
                </div>
                <div className='links'>
                    <Link to='/'>home</Link>
                    <Link to='/plants'>plants</Link>
                    <Link to='/events'>events</Link>
                    <Link to='/community'>community</Link>
                </div>
                <div className='cart'>
                    <Link to='/cart'>
                        <img src='/cart-icon.png' alt='cart' height='20px' width='22px' />
                    </Link>
                </div>
            </div>
        )
    }
}