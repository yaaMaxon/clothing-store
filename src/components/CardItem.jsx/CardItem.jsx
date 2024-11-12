import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cartSlice';
import css from './CardItem.module.css';
import { SlBasket } from "react-icons/sl";

const CardItem = ({ data }) => {
    const { img, title, price} = data;
    const dispatch = useDispatch();

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
            <button type="button" className={css.cardBtn} onClick={handleAddToBags}><SlBasket/> Add To Cart</button>
          </div>
        </li>
    )
}

export default CardItem;