import { useSelector } from 'react-redux';
import { getCartItemsSelector } from '../../store/selectors';
import css from './Cart.module.css'
import Bags from '../../components/Bags/Bags';

const Cart = () => {
    const bags = useSelector(getCartItemsSelector);
    const total = bags.reduce((acc, {quantity, price}) => { return acc += quantity * price}, 0);

    return (   
        <div>
          <div className={css.bagsBox}>
            <span className={`${css.itemValue} ${css.itemProduct}`}>Product</span>
            <span className={`${css.itemValue} ${css.itemPrice}`}>Price</span>
            <span className={`${css.itemValue} ${css.itemPrice}`}>Quantity</span>
            <span className={css.itemValue}>Unit Price</span>
          </div>
         {<Bags items={bags}/>}
          <div className={css.totalBox}>
            <div className={css.totalPriceBox}>
                <span className={css.totalPrice}>TOTAL</span>
                <span className={css.totalPrice}>${total.toFixed(2)}</span>
            </div>
            <button type="button" className={css.checkBtn}>Check out</button>
          </div>
        </div>
     );
}
 
export default Cart;