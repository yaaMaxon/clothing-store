import { useSelector } from "react-redux";
import { getFilterSelector } from "../../store/selectors";
import CardItem from "../CardItem.jsx/CardItem";
import css from './CardList.module.css';

const CardList = ({cards, isLoading, error}) => {
    const filter = useSelector(getFilterSelector)

    const visibleCards = cards.filter(({price}) => {
       if (price >= filter.min && price <= filter.max) {
        return true;
       }
    })


    return (
        <>  
        {isLoading && <span style={{display:'block', textAlign: 'center'}}>Loading...</span>}
        {error && <span>{error}</span>}
        {cards.length > 0 && <ul className={css.cardBox}>
            {visibleCards && visibleCards.map((dataCard) => <CardItem key={dataCard.id} data={dataCard}/>)}
        </ul>} 
        </>
    )
};

export default CardList;