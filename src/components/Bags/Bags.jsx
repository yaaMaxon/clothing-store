import CartItem from '../CartItem/CartItem';
import css from './Bags.module.css';

const Bags = ({items}) => {
return <ul className={css.bagsList}>
    {items && items.map((dataItems) => <CartItem key={dataItems.id} data={dataItems}/>)}
</ul>  
}

export default Bags;

