import React, { Component } from 'react';
import scrollingFunction from './scrolling';
import Header from './Header/HeaderContainer';
import { headerContent } from './Header/headerContent';
import NavContainer from './Nav/NavContainer';
import { navContent } from './Nav/navContent';
import ProductsContainer from './Products/ProductsContainer';
import { productsContent } from './Products/productsContent';

scrollingFunction();

/* const mapStateToProps = state => {
  return {
      cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // onSearchChange: (e) => dispatch(setCartValue(e.target.value))
      addToCart = (e) => dispatch({
        state.products.map((item, i) => {
          if ((item.id) == e.target.closest('.js-target-id').id) {
            cartItems.push(item);
            localStorage.setItem('cartItemsStorage', JSON.stringify(cartItems));
            setCartValue(e.target.value)
          }
        });
        { this.updatePrice() }
      })
  }
} */

const prevCartItems = JSON.parse(localStorage.getItem('cartItemsStorage'));
const cartItems = prevCartItems !== null ? prevCartItems : [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: productsContent,
      clickedItem: [],
      cart: [],
      // searchfield: '',
      // isfilterbestSeller: false,
      // isfilterdiscountPrice: false,
      // isfilteravailable: false,
      // isOpen: true,
      totalCartSum: 0
    };
  }

/*   updatePrice = (e) => {
    if(cartItems[0]) {
      let priceCount = cartItems.map(price => parseFloat(price.discountprice ? `${price.discountprice.replace('$', '')}`:`${price.boxprice.replace('$', '')}`))
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const priceSum = (priceCount.reduce(reducer).toFixed(2));
      this.setState({
        totalCartSum: priceSum
      });
    } else {
      const priceSum = 0;
      this.setState({
        totalCartSum: priceSum
      });
    }
  }

  componentDidMount() {
    scrollingFunction();
    this.updatePrice();
    this.setState({
      cart: cartItems
    });
  } */
/*   removeFromCart = (e) => {
    cartItems.map((item, i) => {
      if (Number(i) === Number(e.target.closest('.Cart__menu-item').getAttribute('index'))) {
        cartItems.splice(i, 1);
        localStorage.setItem('cartItemsStorage', JSON.stringify(cartItems));
        this.setState({
          cart: cartItems
        });
      }
    })
    { this.updatePrice() }
  }
  addToCart = (e) => {
    this.state.products.map((item, i) => {
      if ((item.id) == e.target.closest('.js-target-id').id) {
        cartItems.push(item);
        localStorage.setItem('cartItemsStorage', JSON.stringify(cartItems));
        this.setState({
          cart: cartItems
        });
      }
    });
    { this.updatePrice() }
  } */

  render() {
    return (
      <div className="App">
        <Header headerContent={headerContent} playVideo = {this.playVideo} />
        <NavContainer
          navContent={navContent}
          addToCart={this.state.cart}
          removeFromCart={this.removeFromCart}
          updatePrice = {this.state.totalCartSum}
        />
      </div>
    );
  }
}

export default (App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
