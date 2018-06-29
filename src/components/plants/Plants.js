import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import Plant from './Plant';

class Plants extends Component {
    constructor() {
        super();
        this.changeSort = this.changeSort.bind(this);
        this.toggleIsHidden = this.toggleIsHidden.bind(this);
        this.state = {
            isHidden: true,
            sortBy: 'poop'
        }
    }

    toggleIsHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    changeSort(obj) {
        this.setState(obj);
        this.toggleIsHidden();
        console.log(this.state);
    }

    render() {
        const plants = this.props.plants.map((plant, index) => {
            return (
                <Plant
                    name={plant.name}
                    price={plant.price}
                    img={plant.img}
                    key={index}
                />
            )
        })
        return (
            <div className='Plants'>
                <Header />
                <SubHeader />
                <div className='body'>
                    <div className='sortBy'>
                        <div onClick={this.toggleIsHidden}>
                            <p>{this.state.sortBy}</p>
                        </div>
                        {!this.state.isHidden && <DropDown changeSort={this.changeSort} />}
                    </div>
                    <div className='content'>
                        {plants}
                    </div>
                </div>
            </div>
        )
    }
}

const DropDown = (props) => {
    return (
        <div className='DropDown'>
            <div
                onClick={() => props.changeSort({ sortBy: 'full light' })}
            >full light</div>
            <div
                onClick={() => props.changeSort({ sortBy: 'medium light' })}
            >medium light
            </div>
            <div
                onClick={() => props.changeSort({ sortBy: 'low light' })}
            >low light
            </div>
            <div
                onClick={() => props.changeSort({ sortBy: 'full light' })}
            >cannot kill
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants,
    }
}

export default connect(mapStateToProps)(Plants);