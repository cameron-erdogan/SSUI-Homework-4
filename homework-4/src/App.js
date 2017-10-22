import React, { Component } from 'react';
import Browse from './Browse.jsx';
// import logo from './logo.svg';
import './App.css';
import './styles/browse.css';
import './styles/cart.css';
import './styles/product_detail.css';
import './styles/index.css';
import cart from './images/shopping_cart.png';

class App extends Component {

  renderPageView(){
    return <Browse/>
  }

  render() {
    return (
      <div className="App">
        <header className="nav">
            <div className="logo">Muddy Paws</div>
            <div className="shopping-cart">
                <div className="shopping-cart-items">0</div>
                <img src={cart} className="shopping-cart-icon" alt="shopping cart"></img>
            </div>
        </header>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {this.renderPageView()}
      </div>
    );
  }
}

export default App;
