import { useSelector } from 'react-redux';
import { getCartItemsSelector } from '../../store/selectors';
import css from './Cart.module.css'
import Bags from '../../components/Bags/Bags';
import NoFoundComponent from '../../components/NoFoundComponent/NoFoundComponent';

const Cart = () => {
    const bags = useSelector(getCartItemsSelector);
    const total = bags.reduce((acc, {quantity, price}) => { return acc += quantity * price}, 0);
    
    console.log(bags.length)
    return (  
        <>
        {bags.length > 0 ? (
        <>
        {<Bags items={bags}/>}
        <div className={css.calculationBox}>
          <div>
            <input type="text" placeholder='Voucher code' className={css.vaucherInput}/>
            <button type="button" className={css.vaucherBtn}>Redeem</button>
          </div>
          <div className={css.totalBox}>
            <div className={css.subtotalBox}>
                <div className={css.subtotalItemsBox}>
                    <span className={css.subtotalItems}>Subtotal</span>
                    <span className={css.subtotalItems}>${total.toFixed(2)}</span>
                </div>
                <div className={css.subtotalItemsBox}>
                    <span className={css.subtotalItems}>Coupon</span>
                    <span className={css.subtotalItems}>No</span>
                </div>
            </div>
            <div className={css.totalPriceBox}>
                <span className={css.totalPrice}>TOTAL</span>
                <span className={css.totalPrice}>${total.toFixed(2)}</span>
            </div>
            <button type="button" className={css.checkBtn}>Check out</button>
          </div>
        </div>
    </>
    ) : (
        <NoFoundComponent/>
      )}
    </>
    );
}
 
export default Cart;