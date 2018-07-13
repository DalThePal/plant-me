import React, { Component } from 'react';
import { actions } from '../../duck';
import { connect } from 'react-redux';

class PlantModal extends Component {

    render () {
        return (
            <div className='modal-background'>
                <div className='modal'>
                    <img src={this.props.img}/>
                    <div className='info'>
                        <p>{this.props.name}</p>
                        <p>price: {this.props.price}</p>
                    </div>
                    <p>desc</p>
                    <button onClick={() => this.props.addToCart(this.props)}>add</button>
                    <button onClick={() => this.props.toggleModal()}>close</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(actions.addToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantModal)