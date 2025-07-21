import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

import Product from './components/products'
import Cart from './components/cart'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
            
                <Route exact  path="/" component={Product} />
                <Route  exact path="/cart" component={Cart} />
                
            </Router>
        )
    }
}

export default AppRouter;