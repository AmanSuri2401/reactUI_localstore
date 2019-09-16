import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';
import ProductDetails from './productdetails';
import ProductItem from './productitem';
import { getProducts } from '../repository';

import '../css/productlist.css';
import '../css/product.css';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        getProducts().then((products) => {
            this.setState({ products });
        });
    }

    render() {
        const { products } = this.state;
        return (
            <div className="prod-container">
                <ul className="prod-list">
                    <hr />
                    {
                        products.map((product, index) => <ProductItem product={product} key={index} passedfunc={this.openModalHandler} />)
                    }
                    <hr />
                </ul>
            </div>
        );
    }
}

export default ProductList;