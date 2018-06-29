import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import Plant from './Plant';

class Plants extends Component {
    constructor() {
        super();
        this.state = {
            showDropDown: false
        }
    }

    render() {
        const plants = this.props.plants.map((plant, item) => {
            return (
                <Plant
                    name={plant.name}
                    price={plant.price}
                    img={plant.img}
                />
            )
        })
        return (
            <div className='Plants'>
                <Header />
                <SubHeader />
                <div className='body'>
                    <div className='sortBy'>
                        <img src='/sort-by.png' alt='sort by' width='100%'/>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='content'>
                        {plants}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps)(Plants);