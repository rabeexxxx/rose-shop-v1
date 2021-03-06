import React from 'react'
import { Link } from 'react-router-dom';

import CART_ITEM from '../cart_items/CART_ITEM'

export default function CART_MENU(props) {
    function close_cart_menu() {
        document.querySelector('.cart-menu').classList.remove('show-cart-menu');
    }

    return (
        <>
             <div className='cart-menu' >
                 <div className='close-icon' onClick={close_cart_menu}><i className="fas fa-times"></i></div>
                <div className='cart-title'>Cart</div>
                <div className='total-title'>Total:</div>
                <div className='total-aed'>{props.total} AED</div>
                    {/* <div className='items-title'>Items</div> */}
                    <div className='cart-details'>
                        {props.products.map((product)=>( 
                            <CART_ITEM
                            
                            add_existing_item_tocart={props.add_existing_item_tocart}
                            name={product.prod_name}
                            price={product.prod_price}
                            qty={product.prod_qty}
                            img={product.prod_img}
                            products={props.products}
                            total={props.total}
                            inc_counter={props.inc_counter}
                            dec_counter={props.dec_counter}
                            />
                        ))}
                         
                    </div>
                <div className='buttons-div'>
                    <Link to='/checkout' onClick={close_cart_menu}>
                    <div className='proceed-btn'>Checkout</div>
                    </Link>
                    <div className='cancel-btn' onClick={close_cart_menu}>Continue Shopping</div>
                </div>
            </div>
        </>
    )
}
