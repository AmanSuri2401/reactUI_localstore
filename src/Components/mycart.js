import React from 'react';
import { Router, NavLink, Link, Route, Switch } from 'react-router-dom';

import { getCartProducts } from '../repository';
import CartItem from './cartItem';

import '../css/productlist.css';
import '../css/product.css';

class MyCart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
	}

	componentWillMount() {
		let cart = localStorage.getItem('cart');
		if (!cart) return;
		getCartProducts(cart).then((products) => {
			let total = 0;
			for (var i = 0; i < products.length; i++) {
				total += products[i].price * products[i].qty;
			}
			this.setState({ products, total });
		});
	}

	removeFromCart = (product) => {
		let products = this.state.products.filter((item) => item.id !== product.id);
		let cart = JSON.parse(localStorage.getItem('cart'));
		delete cart[product.id.toString()];
		localStorage.setItem('cart', JSON.stringify(cart));
		let total = this.state.total - (product.qty * product.price)
		this.setState({ products, total });
	}

	clearCart = () => {
		localStorage.removeItem('cart');
		this.setState({ products: [] });
	}

	render() {
		const { products, total } = this.state;
		return (
			<div className="cart-container">
				<div>
					<ul className="cart-list">
						<hr />
						{
							products.map((product, index) => <CartItem product={product} remove={this.removeFromCart} key={index} />)
						}
						<hr />
					</ul>
				</div>
				<div>
					{products.length ? <div><h4 className="ttl_amt"><small>Total Amount:</small>₹{total}</h4><hr /></div> : ''}

					{!products.length ? <h3 className="no_itm">No item on the cart</h3> : ''}
					<Link to="/checkout"><button className="btn-checkout">Checkout</button></Link>
					<button className="btn-clear" onClick={this.clearCart} style={{ marginRight: "10px" }}>Clear Cart</button>
					<br /><br /><br />
				</div>

			</div>
		);
	}
}

export default MyCart;
