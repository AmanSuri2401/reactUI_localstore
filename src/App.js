import React from 'react';
import { BrowserRouter, NavLink, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import './css/product.css';
import logo from './logo.png';

import Home from './Components/home';
import Women from './Components/women';
import MyCart from './Components/mycart';
import Modal from './Components/modal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      isHome: true
    }
  }

  hideHome = () => {
    this.setState({
      isHome: false
    });
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
    return (
      <div>
        {/* Modal Compoment */}
        {this.state.isShowing ?
          <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}>
        </Modal>

        {/* Header including navigation bar and product container */}
        <div className="header">
          <div>
            <h1>Online Shopping Portal</h1>
            <NavLinks></NavLinks>
            <h2 style={{ textAlign: 'center', marginBottom: 0, padding: 0, fontFamily: 'Brush Script MT', fontSize: '40px', border: 0}}>Happy Shopping!</h2>
            <Switch>
            <Route path="/home" component={Home} />
            <Route path="/mycart" component={MyCart} />
          </Switch>
          

          </div>
        </div>
      </div>
    );
  }
}

class NavLinks extends React.Component {
  render() {
      return (
          <div className="links">
              <div className="div-left">
                  <NavLink exact to="/" className="link" activeClassName="active"><img src={logo} className="logo"/></NavLink>
                  <NavLink to="/home" className="link">Products</NavLink>
                  <NavLink to="/mycart" className="link">My Cart</NavLink>
              </div>
              <div className="div-right">
                  <NavLink to="/login" className="link">Login</NavLink>
              </div>
          </div>
      );
  }
}

export default App;
