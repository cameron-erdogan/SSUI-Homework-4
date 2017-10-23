import React, { Component } from 'react';
import Item from './App.js';
import BuyableItem from './App.js';
import './App.css';
import './styles/product_detail.css';

class ItemDetail extends Component {

    //think about having quantity as part of the state?
    constructor(props){
        super(props);
        this.state = {quantity: 1};

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    addToCart(){
        // alert("cal me");
        this.props.onAddToCartClick(this.props.item, this.state.quantity);
    }

    handleQuantityChange(event){
        this.setState({quantity : event.target.value});
    }

    render(){
        return(
            <div className="container outer-container">
                <a href="#" onClick={this.props.onBrowseClick} className="container section-title-link">Back to Products</a>
                <div className="container detail-outer-container">
                    <div className="container detail-inner-container">
                        <div className="container detail-image-container">
                            <img className="detail-image" src={this.props.item.image} alt={this.props.item.altText}></img>
                        </div>
                        <div className="container detail-info-container">
                            <div className="detail-title">{this.props.item.name}</div>
                            <div className="detail-price">Price: ${this.props.item.price}</div>
                            <div className="detail-caption">{this.props.item.desscription}</div>
                            <div className="detail-select-color-title">Quantity:</div>
                            <div className="select-container">
                                <select value={this.state.quantity} onChange={this.handleQuantityChange} name="quantity">
                                    <option value="1" defaultValue>1</option> 
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="button-container">
                                <button onClick={() => this.addToCart()} className="add-to-cart-button">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemDetail;