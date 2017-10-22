import React, { Component } from 'react';
import './App.css';
import './styles/browse.css';

import catHarnessImage from './images/cat_harness.jpg';
import dogHarnessImage from './images/dog_harness.jpg';
import foodAndWaterAttachmentImage from './images/food_harness.jpg';
import gpsCollarImage from './images/gps_collar.jpg';

class Browse extends Component{
    constructor(props){
        super(props);

        var inventory = [
            { "id": 0, "name": "Cat Harness", "price": 10, "image": catHarnessImage, "description": "Keep track of your cat using this harness.", altText : "a cat harness"},
            { "id": 1, "name": "Dog Harness", "price": 12, "image": dogHarnessImage, "description": "Keep track of your dog using this harness.", altText : "a cat harness" },
            { "id": 2, "name": "Food and Water Storage Attachment", "price": 5, "image": foodAndWaterAttachmentImage, "description": "Holds extra food. For use with a dog or cat harness.", altText : "food and water attachment" },
            { "id": 3, "name": "GPS Tracker Collar", "price": 30, "image": gpsCollarImage, "description": "Make sure your pet never gets lost!", altText : "GPS collar" }
        ];

        this.state = {
            inventory: inventory,
        }
    }

    renderItems(){
        var elements = [];
        for(var i = 0; i < this.state.inventory.length; i++){
            var item = this.state.inventory[i];
            elements.push(
                <Item 
                    key = {item.id}
                    name = {item.name} 
                    image = {item.image} 
                    altText = {item.altText}
                    price = {item.price}
                />
            )
        }

        return elements;
    }

    render(){
        return(
            <div className="container outer-container">
                <h1 className="container section-title">Browse Products</h1>
                <div className="container item-container">
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

class Item extends Component{
    render(){
        return(
            <div data-item-num="0" className="container item">
                <div className="item-image-container">
                    <img className="item-image" src={this.props.image} alt={this.props.altText}></img>
                </div>
                <div className="item-caption">
                    {this.props.name}
                </div>
                <div className="item-price">
                    ${this.props.price}
                </div>
            </div>
        );
    }
}

export default Browse;