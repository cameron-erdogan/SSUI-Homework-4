import React, { Component } from 'react';
import './App.css';
import './styles/browse.css';

// import catHarnessImage from './images/cat_harness.jpg';
// import dogHarnessImage from './images/dog_harness.jpg';
// import foodAndWaterAttachmentImage from './images/food_harness.jpg';
// import gpsCollarImage from './images/gps_collar.jpg';

class ItemDetail extends Component {

    // id : this.props.id, 
    // name : this.props.name, 
    // image : this.props.image, 
    // altText : this.props.altText,
    // price : this.props.price, 
    // need to get the caption from somewhere

    render(){
        return(
            <div className="container outer-container">
                <a href="browse.html" className="container section-title-link">Back to Products</a>
                <div className="container detail-outer-container">
                    <div className="container detail-inner-container">
                        <div className="container detail-image-container">
                            <img className="detail-image" src={this.props.item.image}></img>
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
                                <button className="add-to-cart-button">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemDetail;