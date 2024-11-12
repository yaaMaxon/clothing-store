import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, changeItemQuantity } from "../../store/cartSlice";
import { MdClose } from "react-icons/md";
import css from './BagsItems.module.css';

const CartItem = ({data}) => {
    const { img, title, price, id, quantity} = data;
    const totalPrice = price * quantity;

    const dispatch = useDispatch();

    const increaseCounterValue = () => {
        dispatch(changeItemQuantity({id, quantity: quantity + 1}))
    }

    const decreaseCounterValue = () => {
        console.log(quantity)
        if (quantity > 0) {
            dispatch(changeItemQuantity({id, quantity: quantity - 1}))
        }
    }

    const handleRemoveItem = () => {
        dispatch(removeItemFromCart(id))
    }

    return <li className={css.cardItem}>
        <div className={css.cardImgBox}>
          <MdClose className={css.closeBtn} onClick={handleRemoveItem}/>
          <img src={img} alt={title} className={css.cardImg}/>
          <h2 className={`${css.cardValue} ${css.cardTitle}`}>{title}</h2>
        </div>
          <div className={css.controlPriceBox}>
            <span className={css.cardValue}>${totalPrice.toFixed(2)}</span>
            <div className={css.controlQtyBox}>
                <span className={css.signValue} onClick={decreaseCounterValue}>-</span>
                <span className={css.cardValue}>{quantity}</span>
                <span className={css.signValue} onClick={increaseCounterValue}>+</span>
            </div>
            <span className={css.cardValue}>${price}</span>
          </div>
    </li>
}

export default CartItem;