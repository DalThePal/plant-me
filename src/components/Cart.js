import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plant from './plants/Plant';

import Header from './header/Header';
import SubHeader from './header/SubHeader';
import Footer from './Footer';

class Cart extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.cart)
    }

    render() {
        const plants = this.props.cart.map((item, index) => {
            return (
                <Plant
                    key={index}
                    img={item.img}
                    price={item.price}
                    name={item.name}
                />
            )
        })
        return (
            <div className='Cart'>
                <Header />
                <SubHeader />
                {plants}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);