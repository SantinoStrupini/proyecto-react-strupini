import React from "react";
import './cartwidget.css';
const CartWidget = () => {
    return(
        <div className="cartWidget">
            <button type="button" className="btn btn-primary position-relative">
                
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
                <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget