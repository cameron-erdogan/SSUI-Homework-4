import React, { Component } from 'react';
import Browse from './Browse.jsx';
import ItemDetail from './ItemDetail.jsx';
import Cart from './Cart.jsx';
import CartPreview from './CartPreview.jsx';
import './App.css';
import './styles/browse.css';
import './styles/cart.css';
import './styles/product_detail.css';
import './styles/index.css';
import cart from './images/shopping_cart.png';

var currentCart = [];

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

//adds size, quantity, color 
class BuyableItem {
  constructor(item, quantity){
      this.item = item;
      this.quantity = quantity;
      this.cartID = guid();
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.readFromCart();
    this.state = {
      page: 0,
      currentlySelectedItem: null,
      cartQuantity: this.calculateCartQuantity(currentCart),
      showCartPreview : false,
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
  //2 is 
  renderPageView(){
    if(this.state.page === 0)
      return <Browse onClick={this.handleItemDetail.bind(this)} />
    if(this.state.page === 1)
      return <ItemDetail onBrowseClick={() => this.handleBackToProducts()} onAddToCartClick={this.handleAddItemToCart.bind(this)} item={this.state.currentlySelectedItem} />
    if(this.state.page === 2)
      return <Cart cart={currentCart} onBrowseClick={() => this.handleBackToProducts()} onRemoveClick={this.handleRemoveItemFromCart.bind(this)} />
  }

  renderShoppingCartPreview(){
    if(this.state.showCartPreview)
      return <CartPreview cart={currentCart} />
  }

  handleItemDetail(item){
    this.setState({page: 1, currentlySelectedItem : item});
  }

  calculateCartQuantity(currentCart){
    let quantity = 0;
    for(var i = 0; i < currentCart.length; i++){
      let buyableItem = currentCart[i];
      quantity += parseInt(buyableItem.quantity);
    }
    return quantity;
  }

  //need to convert an item to a buyable item
  handleAddItemToCart(item, quantity){
    var buyableItem = new BuyableItem(item, quantity);
    currentCart.push(buyableItem);
    this.setState({cartQuantity : this.calculateCartQuantity(currentCart)})
    localStorage.setItem("cart", JSON.stringify(currentCart));
    this.readFromCart();
  }

  handleRemoveItemFromCart(cart){
    currentCart = cart;
    this.setState({cartQuantity : this.calculateCartQuantity(currentCart)})
    localStorage.setItem("cart", JSON.stringify(currentCart));
    this.readFromCart();
  }

  handleBackToProducts(){
    this.setState({page: 0, currentlySelectedItem : null});
  }

  handleGoToCart(){
    this.setState({page: 2, currentlySelectedItem : null});
  }

  showCartPreview(){
    this.setState({showCartPreview: true});
  }

  hideCartPreview(){
    this.setState({showCartPreview: false});
  }

  render() {
    return (
      <div className="App">
        <header className="nav">
            <div className="logo">Muddy Paws</div>
            <div className="shopping-cart" onMouseEnter={this.showCartPreview.bind(this)} onMouseLeave={this.hideCartPreview.bind(this)}>
                <div className="shopping-cart-items">{this.state.cartQuantity}</div>
                <img src={cart} onClick={() => this.handleGoToCart()} className="shopping-cart-icon" alt="shopping cart"></img>
                {this.renderShoppingCartPreview()}
            </div>
        </header>
        {this.renderPageView()}
      </div>
    );
  }
}

export default App;
