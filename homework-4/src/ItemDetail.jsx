import React, { Component } from 'react';
import './App.css';
import './styles/product_detail.css';

class ItemDetail extends Component {

    //think about having quantity as part of the state?

    addToCart(){
        // alert("cal me");
        this.props.onAddToCartClick(this.props.item, 1);
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
                            <div className="detail-select-size-title">Size:</div>
                            <div className="select-container">
                                <select name="size"> 
                                    <option value="value1">Tiny</option> 
                                    <option value="value2" defaultValue>Small</option>
                                    <option value="value3">Medium</option>
                                    <option value="value3">Large</option>
                                </select>
                            </div>

                            <div className="detail-select-color-title">Color:</div>
                            <div className="select-container">
                                <select name="color">
                                    <option value="value1">Strawberry</option> 
                                    <option value="value2" defaultValue>Blackberry</option>
                                    <option value="value3">Crazyberry</option>
                                    <option value="value3">Camouflage</option>
                                    <option value="value3">Night Moon</option>
                                    <option value="value3">Fire Orange</option>
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