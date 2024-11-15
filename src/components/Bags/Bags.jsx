import CartItem from '../CartItem/CartItem';
import css from './Bags.module.css';

const Bags = ({items}) => {

return <table className={css.tableBox} border={1} color='black'>
    <thead className={css.tableHead}>
        <tr className={css.tableHeadList}>
            <th className={`${css.tableHeadItem} ${css.tableHeadItemProduct}`}>Product</th>
            <th className={`${css.tableHeadItem} ${css.tableHeadItemPrice}`}>Price</th>
            <th className={`${css.tableHeadItem} ${css.tableHeadItemQuantity}`}>Quantity</th>
            <th className={css.tableHeadItem}>Unit Price</th>
        </tr>
    </thead>
    <tbody>
      {items && items.map((dataItems) => <CartItem key={dataItems.id} data={dataItems}/>)}
    </tbody>
</table> 
}

export default Bags;

