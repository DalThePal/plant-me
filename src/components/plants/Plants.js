import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import Plant from './Plant';
import PlantModal from './PlantModal';

class Plants extends Component {
    constructor() {
        super();
        this.changeSort = this.changeSort.bind(this);
        this.toggleDropIsHidden = this.toggleDropIsHidden.bind(this);
        this.toggleModalIsHidden = this.toggleModalIsHidden.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.state = {
            dropIsHidden: true,
            modalIsHidden: true,
            sortBy: '',
            modalItem: null
        }
    }

    toggleDropIsHidden() {
        this.setState({
            dropIsHidden: !this.state.dropIsHidden
        });
    }

    toggleModalIsHidden() {
        this.setState({
            modalIsHidden: !this.state.modalIsHidden
        });
    }

    displayModal(item) {
        this.setState({ modalItem: item });
        this.toggleModalIsHidden();
    }

    changeSort(obj) {
        this.setState(obj);
        this.toggleDropIsHidden();
        console.log(this.state);
    }

    render() {
        const plants = this.props.plants.map((plant, index) => {
            return (
                <Plant
                    name={plant.name}
                    price={plant.price}
                    img={plant.img}
                    displayModal={this.displayModal}
                    key={index}
                />
            )
        })
        return (
            <div className='Plants'>
                <Header />
                <SubHeader />
                {
                    !this.state.modalIsHidden &&
                    <PlantModal 
                        name={this.state.modalItem.name}
                        price={this.state.modalItem.price}
                        img={this.state.modalItem.img}
                        toggleModal={this.toggleModalIsHidden}
                    />
                }
                <div className='body'>
                    <div className='sortBy'>
                        <span className='input'>{this.state.sortBy}</span>
                        <button onClick={() => this.toggleDropIsHidden()}><img src='/dropdown-icon.png' /></button>
                    </div>
                    {!this.state.dropIsHidden && <DropDown changeSort={this.changeSort} />}
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
            <div onClick={() => props.changeSort({ sortBy: 'full light' })}>full light</div>
            <div onClick={() => props.changeSort({ sortBy: 'medium light' })}>medium light</div>
            <div onClick={() => props.changeSort({ sortBy: 'low light' })}>low light</div>
            <div onClick={() => props.changeSort({ sortBy: 'cannot kill' })}>cannot kill</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants,
    }
}

export default connect(mapStateToProps)(Plants);