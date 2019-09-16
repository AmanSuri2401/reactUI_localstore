import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';

//  import '../css/productdetails.css';

class ProductDetails extends React.Component {

    constructor(props){
        super(props);
    }

    addToCart = () => {
	}

    render() {
        const { product } = this.props;
        return (
            <div>
                <p>Product Name: Product1</p>
                <p>Price: Rs. 1000.00</p>
                <p>Size: S, M</p>
                <button className="btn-cart" onClick={this.addToCart()}>Add to Cart</button>
            </div>
        );
    }
}

export default ProductDetails;