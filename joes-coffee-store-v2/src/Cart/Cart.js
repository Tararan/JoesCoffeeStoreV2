import React, { Component } from "react";

class Cart extends Component {
    render() {
        const { id, index, boximage, boxtitle, boxprice, discountprice, removeFromCart } = this.props;
        return (
            <li id={id} index={index} className={`Cart__menu-item ${boxtitle ? '' : 'hide'}`}>
                <img src={boximage} alt="product-small" />
                <span>{boxtitle}</span>
                <span>{discountprice ? `${discountprice}` : `${boxprice}`}</span>
                <div className="Cart__menu-item-delete"
                onClick={removeFromCart}
                >
                    <span className="Cart__menu-item-delete-icon">
                        ×
                    </span>
                </div>
            </li>
        );
    }
}

export default Cart;