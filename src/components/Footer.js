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
                    <img src='/facebook-icon.png' alt='FB' width='30px' height='30px'/>
                </div>
                <p>copyright 2017</p>
            </div>
        )
    }
}