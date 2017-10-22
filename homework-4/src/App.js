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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      currentlySelectedItem: null,
    }
  }

  //0 is browse
  //1 is item detail
  renderPageView(){
    if(this.state.page === 0)
      return <Browse onClick={this.handleItemDetail.bind(this)}/>
    if(this.state.page === 1)
      return <ItemDetail item={this.state.currentlySelectedItem} />
  }

  handleItemDetail(item){
    // need to include an id of some sort
    this.setState({page: 1, currentlySelectedItem : item});
    //item is going to be a string here
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
