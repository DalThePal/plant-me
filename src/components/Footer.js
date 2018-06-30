import React, { Component } from 'react';

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='Footer'>
                <p>connect</p>
                <div className='subscribe'>
                    <input/>
                    <button>join</button>
                </div>
                <div className='socialLinks'>
                    <a href='https://www.facebook.com/'><img src='/facebook-icon.png' alt='FB' width='30px' height='30px'/></a>
                    <a href='https://www.instagram.com/?hl=en'><img src='/instagram-icon.png' alt='IG' width='30px' height='30px'/></a>
                    <a href='https://www.pinterest.com/'><img src='/pinterest-icon.png' alt='Pin' width='30px' height='30px'/></a>
                </div>
                <p>copyright 2017</p>
            </div>
        )
    }
}