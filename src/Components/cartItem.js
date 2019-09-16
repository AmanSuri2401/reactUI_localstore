import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';	

import '../css/cart.css';

export default class CartItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	importAll = (r) => {
		let images = {};
		r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
		return images;
	}

	render(){
		const { product } = this.props;
		const images = this.importAll(require.context('../../public/img', false, /\.(png|jpe?g|svg)$/));
		return (

			<li>
				<div>
					<Link to='/prod'>
						<div className="img-div">
							<img className="cart-img" src={images[product.photo]} />
						</div>
						<div className="prod-item">
								<h4 className="prod-name">{product.name}</h4>
								<p>₹{product.price}</p>
						</div>
					</Link>
				</div>
			</li>
		)
	}
}
