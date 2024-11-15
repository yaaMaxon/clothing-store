import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cartSlice';
import { SlBasket } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import css from './CardItem.module.css';
import { useState } from 'react';

const CardItem = ({ data }) => {
    const { img, title, price} = data;
    const dispatch = useDispatch();
    const [rating, setRating] = useState(4);

    const handleAddToBags = () => {
        const dataInBag = {
            ...data,
            quantity: 1
        }

        dispatch(addItemToCart(dataInBag))
    }

    return (
        <li className={css.cardItem}>
            <img src={img} alt={title} className={css.cardImg}/>
          <div className={css.cardBox}>
            <h2 className={css.cardTitle}>{title}</h2>
            <span className={css.cardPrice}>${price}</span>
            <div className={css.starBox}>
              {[1,2,3,4,5].map((star, index) => <AiFillStar key={index} className={css.starItem} 
                style={{color: rating >= star ? '#ffc600' : '#c1c8ce'}} 
                onClick={() => {setRating(star)}}
              />)}
            </div>
            <button type="button" className={css.cardBtn} onClick={handleAddToBags}><SlBasket/> Add To Cart</button>
          </div>
          <div className={css.hotBox}>Hot</div>
        </li>
    )
}

export default CardItem;