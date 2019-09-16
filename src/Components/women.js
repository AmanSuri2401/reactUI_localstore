import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';

import ProductList from './productlist';
import '../css/productlist.css';

class Women extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div class="container">
                <ProductCategoryNav></ProductCategoryNav>
                </div>
                <div class="container">
                 <Switch>
                    <Route path="/women/tops" component={ProductList} />
                    <Route path="/women/jeans" component={ProductList} />
                    <Route path="/women/trousers" component={ProductList} />
                    <Route path="/women/heels" component={ProductList} />
                </Switch>
                </div>
            </div>
        );
    }
}

class ProductCategoryNav extends React.Component {
    render() {
        return (
            <div className="prod-links">
                    <li><NavLink to="/women/tops" className="prod-link" params='productCategory: "tops'>Tops</NavLink></li>
                    <li><NavLink to="/women/jeans" className="prod-link">Jeans</NavLink></li>
                    <li><NavLink to="/women/trousers" className="prod-link">Trousers</NavLink></li>
                    <li><NavLink to="/women/heels" className="prod-link">Heels</NavLink></li>
            </div>
        );
    }
}

/*class Tops extends React.Component {

    state = {
        productCategory : null
    }

    componentDidMount () {
        const { productCategory } = this.props.match.params
    
        fetch(`http://localhost:3000/women/tops/${productCategory}`)
          .then((productCategory) => {
            this.setState(() => ({ productCategory }))
          })
      }

    render() {
        return (
            <div>
                <p>product category</p>

            </div>
        );
    }
}*/

export default Women;
