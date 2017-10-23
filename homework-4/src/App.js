import React, { Component } from 'react';
import Browse from './Browse.jsx';
import ItemDetail from './ItemDetail.jsx';
// import logo from './logo.svg';
import './App.css';
import './styles/browse.css';
import './styles/cart.css';
import './styles/product_detail.css';
import './styles/index.css';
import cart from './images/shopping_cart.png';

var currentCart = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.readFromCart();
    this.state = {
      page: 0,
      currentlySelectedItem: null,
      cartQuantity: currentCart.length,
    }
  }

  readFromCart(){
    if(typeof(Storage) !== "undefined"){
      var rawCart = localStorage.getItem("cart");
      currentCart = JSON.parse(rawCart); 
      if(currentCart == null){
        currentCart = [];
      }
    }
  }

  //0 is browse
  //1 is item detail
  renderPageView(){
    if(this.state.page === 0)
      return <Browse onClick={this.handleItemDetail.bind(this)} />
    if(this.state.page === 1)
      return <ItemDetail onBrowseClick={() => this.handleBackToProducts()} onAddToCartClick={this.handleAddItemToCart.bind(this)} item={this.state.currentlySelectedItem} />
  }

  handleItemDetail(item){
    this.setState({page: 1, currentlySelectedItem : item});
  }

  handleAddItemToCart(item, quantity){
    this.setState({cartQuantity : this.state.cartQuantity+1})
    currentCart.push(item);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    this.readFromCart();
  }

  handleBackToProducts(){
    this.setState({page: 0, currentlySelectedItem : null});
  }

  render() {
    return (
      <div className="App">
        <header className="nav">
            <div className="logo">Muddy Paws</div>
            <div className="shopping-cart">
                <div className="shopping-cart-items">{this.state.cartQuantity}</div>
                <img src={cart} className="shopping-cart-icon" alt="shopping cart"></img>
            </div>
        </header>
        {this.renderPageView()}
      </div>
    );
  }
}

export default App;
