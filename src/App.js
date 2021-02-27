import React from 'react'

import './card/card_style.css'
import './navbar/navbar_style.css'
import './cart/cart_style.css'
import './cards_container/cards-container.css'
import './cart/cart_menu/cart_menu.css'
import './cart/cart_items/cart_item.css'

import NAVBAR from './navbar/NAVBAR';
import CART from './cart/CART'
import CARDS_CONTAINER from './cards_container/CARDS_CONTAINER';
import CART_MENU from './cart/cart_menu/CART_MENU'
// import { render } from '@testing-library/react'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      counter:0,
      products:[],
      total:0
    }
  }
  add_new_item_tocart(item) {
    
    this.setState(prevState=>({
      products:[...prevState.products,item],
      total:prevState.total+item.prod_price,
      counter:this.state.counter+1
    }));
    console.log('adding same item >> Total is >> '+this.state.total);
  }
  add_existing_item_tocart(list,total) {
    this.setState(prevState=>({
      total:total,
      products:list,
      counter:prevState.counter+1
    }))
  }
  render() {
    return <div className="App">
     
      <NAVBAR counter={this.state.counter}/>
      <CARDS_CONTAINER 
      // setcounter={setcounter}
      // counter={this.state.counter}
      // setproducts={setproducts}
      products={this.state.products}
      add_existing_item_tocart={this.add_existing_item_tocart.bind(this)}
      add_new_item_tocart={this.add_new_item_tocart.bind(this)}
      total={this.state.total}
      />
      <CART counter={this.state.counter}/>
      <CART_MENU
        // setproducts={setproducts}
        products={this.state.products}
        total={this.state.total}
      />
    </div>
      }
}

export default App;
