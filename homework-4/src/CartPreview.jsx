import React, { Component } from 'react';
import './App.css';
import './index.css';
import './styles/cart.css';
import './styles/cart_preview.css';

class CartPreviewItem extends Component{
    render(){
        return(
            <div className="shopping-cart-preview-item">
                <div className="shopping-cart-preview-item-image-container">
                <img className="shopping-cart-preview-item-image" alt={this.props.buyableItem.item.alt} src={this.props.buyableItem.item.image}></img>
                </div>
                <div className="shopping-cart-preview-item-right-container">
                    <div className="shopping-cart-preview-item-name">{this.props.buyableItem.item.name}</div>
                    <div>${this.props.buyableItem.item.price} each</div>
                    <div>Quantity: {this.props.buyableItem.quantity}</div>
                </div>
            </div>
        );
    }
}

class CartPreview extends Component{

    constructor(props){
        super(props);
        this.state = {cartItems : this.props.cart};
    }

    renderCartPreviewItems(){
        var elements = [];
        for(var i = 0; i < this.state.cartItems.length; i++){
            var item = this.state.cartItems[i];
            elements.push(
                <CartPreviewItem buyableItem={item}/>
            );
        }

        return elements;
    }

    calculateSubtotal(){
        let subTotal = 0;
        for(var i = 0; i < this.state.cartItems.length; i++){
            var buyableItem = this.state.cartItems[i];
            subTotal += buyableItem.item.price * buyableItem.quantity;
        }

        return subTotal;
    }

    render(){
        return(
            <div className="shopping-cart-preview">
                <div className="shopping-cart-preview-subtotal">
                    Subtotal: ${this.calculateSubtotal()}
                </div>
                 {this.renderCartPreviewItems()}
            </div>
        );
    }

}

export default CartPreview;