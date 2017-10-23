import React, { Component } from 'react';
import Browse from './Browse.jsx';
import ItemDetail from './ItemDetail.jsx';
import Cart from './Cart.jsx';
import './App.css';
import './styles/browse.css';
import './styles/cart.css';
import './styles/product_detail.css';
import './styles/index.css';
import cart from './images/shopping_cart.png';

var currentCart = [];
var currentCartID = 0;

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
  }

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
    if(this.state.page === 2)
      return <Cart cart={currentCart} onBrowseClick={() => this.handleBackToProducts()} />
  }

  handleItemDetail(item){
    this.setState({page: 1, currentlySelectedItem : item});
  }

  handleAddItemToCart(item, quantity){
    this.setState({cartQuantity : this.state.cartQuantity+1})
    item.cartID = guid(); //important! create a unique id for a cart item
    currentCart.push(item);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    this.readFromCart();
  }

  handleBackToProducts(){
    this.setState({page: 0, currentlySelectedItem : null});
  }

  handleGoToCart(){
    this.setState({page: 2, currentlySelectedItem : null});
  }

  render() {
    return (
      <div className="App">
        <header className="nav">
            <div className="logo">Muddy Paws</div>
            <div className="shopping-cart">
                <div className="shopping-cart-items">{this.state.cartQuantity}</div>
                <img src={cart} onClick={() => this.handleGoToCart()} className="shopping-cart-icon" alt="shopping cart"></img>
            </div>
        </header>
        {this.renderPageView()}
      </div>
    );
  }
}

export default App;
