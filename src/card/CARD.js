import React,{useState} from 'react'
import { $ }  from 'react-jquery-plugin'

export default function CARD(props) {
    const [card_counter, setcard_counter] = useState(0);
    function add_pack_to_cart(){
        $('.btn-addtocart').addClass('disable');
        $('.pack').addClass('pack-animation');
        $('.cart-main').addClass('show');
        setcard_counter(card_counter+1);
        setTimeout(dely_item,2000);
    }
    function dely_item(){
        $('.pack').removeClass('pack-animation');
        $('.btn-addtocart').removeClass('disable');
        props.setcounter(props.counter+1);
        $('.cart-icon').addClass('cart-animation');
        $('.cart-main').addClass('cart-animation');
        setTimeout(()=>{$('.cart-icon').removeClass('cart-animation')},1000);
        setTimeout(()=>{$('.cart-main').removeClass('cart-animation')},1000);   
    }

    function remove_pack_from_cart(){
        if(props.counter===0){
            alert('cart is empty');
        }
        else
        if(card_counter===0){
            alert('this item not in the cart');
            }
        
        else{
        setcard_counter(card_counter-1);
        $('.btn-removefromcart').addClass('disable');
        $('.pack').addClass('pack-animation-remove');
        $('.cart-icon').addClass('cart-animation');
        $('.cart-main').addClass('cart-animation');
        props.setcounter(props.counter-1);
        setTimeout(dely_item_minus,2000);
        }
    }
    function dely_item_minus(){
        $('.pack').removeClass('pack-animation-remove');
        $('.btn-removefromcart').removeClass('disable');
        $('.cart-icon').removeClass('cart-animation');
        $('.cart-main').removeClass('cart-animation'); 
    }

    return (
        <>
        <div className="card">
        <img src={props.image} alt=""/>
        <div className="card-details">
        <div className="card-title">Red Roses</div>
        <div className="available">In stock</div>
        <div className="price">150 AED</div>
        <div className="plus-counter-minus">
            <div className="plus btn-addtocart" >
                <i className="fas fa-plus i-card" onClick={add_pack_to_cart}></i>
            </div>
            <div className="counter">{card_counter}</div>
            <div className="minus btn-removefromcart" >
                <i className="fas fa-minus i-card" onClick={remove_pack_from_cart}></i>
            </div>
        </div>      
        
        {/* <div className="more-info"><i className="fas fa-info i-card"></i></div> */}
    </div>
    <div className='card-more-info'><i class="far fa-question-circle"></i></div>
    </div>
    </>
    )
}
