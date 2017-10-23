import React, { Component } from 'react';
import './App.css';
import './styles/cart.css';

class CartItem extends Component{

    render(){
        return(
            <div data-item-num="0" className="container cart-item">
                <div className="cart-item-image-container">
                    <img className="cart-item-image" src={this.props.item.image}></img>
                </div>
                <div className="cart-item-caption-container">
                    <div className="cart-item-caption-head">{this.props.item.name}</div>
                    <div className="cart-item-caption-head">${this.props.item.price}</div>
                    <div className="cart-item-caption-sub">Crazyberry</div>
                    <div className="cart-item-caption-sub">Small</div>
                    <button onClick={() => this.props.onRemoveClick(this.props.item)} className="remove-item">Remove</button>
                </div>
            </div>
        )
    }
}

class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {cartItems : this.props.cart};
    }
    
    //will have a cart full of items passed down
    generateCartItems(){
        var elements = [];
        for(var i = 0; i < this.state.cartItems.length; i++){
            var item = this.state.cartItems[i];
            elements.push(
                <CartItem
                    key = {i}
                    item = {item} 
                    onRemoveClick = {this.removeItem.bind(this)}
                />
            );
        }

        return elements;
    }

    removeItem(item){
        //gotta use items.splice(i, i+1)
        let thisItemIndex = null 
        let cartItems = this.state.cartItems;
        let newCart = [];
        for(var i = 0; i < cartItems; i++){
            if(cartItems[i].cartID != item.cartID){
                newCart.push(cartItems[i]);
            }
        }
        this.setState({cartItems: newCart});
    }

    calculateSubtotal(){
        let subTotal = 0;
        for(var i = 0; i < this.state.cartItems.length; i++){
            var item = this.state.cartItems[i];
            subTotal += item.price;
        }

        return subTotal;
    }

    render(){
        return(
            <div className="container outer-container">
                <a href="#" onClick ={this.props.onBrowseClick}  className="container browse-link">Browse More Products</a>
                <div className="container cart-outer-container">
                    <div className="container cart-inner-container">
                        <div className="container cart-contents">
                            <h1 className="cart-title">Your Cart:</h1>
                                {this.generateCartItems()}
                        </div>
                        <div className="container cart-subtotal">
                            <div className="cart-subtotal cart-title">Subtotal: ${this.calculateSubtotal()}</div>
                            <button className="checkout-button">Checkout</button>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}


export default Cart;