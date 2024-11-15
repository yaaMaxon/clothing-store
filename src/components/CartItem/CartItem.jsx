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

    return <tr className={css.tableBodyItem}>
        <td className={css.tableBodyImgBox}>
          <MdClose className={css.closeBtn} onClick={handleRemoveItem}/>
          <img src={img} alt={title} className={css.cardImg}/>
          <h2 className={css.cardValue}>{title}</h2>
        </td>
        <td className={`${css.cardValue} ${css.cardTotalPrice}`}>${totalPrice.toFixed(2)}</td>
          <td>  
            <ul className={css.controlQtyBox}>
                <li className={css.signValue} onClick={decreaseCounterValue}>-</li>
                <li className={css.cardValue}>{quantity}</li>
                <li className={css.signValue} onClick={increaseCounterValue}>+</li>
            </ul>
          </td>
        <td className={css.cardValue}>${price}</td>
    </tr>
}

export default CartItem;