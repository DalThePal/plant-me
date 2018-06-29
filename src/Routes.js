import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Plants from './components/plants/Plants';
import Events from './components/Events';
import Cart from './components/Cart';
import Community from './components/Community';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/plants' component={Plants} />
            <Route path='/events' component={Events} />
            <Route path='/community' component={Community} />
            <Route path='/cart' component={Cart} />
        </Switch>
    )
}