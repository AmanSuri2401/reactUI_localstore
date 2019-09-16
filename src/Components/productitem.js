import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import '../css/product.css';
import ProductDetails from './productdetails';
import modal from './modal';


class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1,
			isShowing: false,
		}
	}

	handleInputChange = event => this.setState({ [event.target.name]: event.target.value })

	importAll = (r) => {
		let images = {};
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		return images;
	}

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	render() {
		const { product } = this.props;
		const images = this.importAll(require.context('../../public/img', false, /\.(png|jpe?g|svg)$/));
		return (
			<li>
				<div>
					<Link to='/prod'>
						<div className="img-div">
							<img className="prod-img" src={images[product.photo]} />
						</div>
						<div className="prod-item">
								<h4 className="prod-name">{product.name}</h4>
								<p>₹{product.price}</p>
								{ product.available_quantity > 0 ?
								<button className="btn-cart" onClick={this.addToCart()}>Add to Cart</button> :
								<p style={{fontWeight: 'bold'}}> OUT OF STOCK </p>
								}
						</div>
					</Link>
				</div>
			</li>
		)
	}
}

/*
			<li>
				{this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

				<Link className="open-modal-btn" onClick={this.openModalHandler}>
					<div className="img-div">
						<img className="prod-img" src={images[product.photo]} />
					</div>
					<div className="prod-item">
						<h4 className="prod-name">{product.name}</h4>
						<p>₹{product.price}</p>
					</div>
				</Link>
				<Modal
					className="modal"
					show={this.state.isShowing}
					close={this.closeModalHandler}>
				</Modal>

			</li>
*/


export default ProductItem;