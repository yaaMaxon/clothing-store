import { useSelector } from "react-redux";
import { getFilterSelector } from "../../store/selectors";
import CardItem from "../CardItem.jsx/CardItem";
import css from './CardList.module.css';

const CardList = ({cards}) => {
    const filter = useSelector(getFilterSelector)

    const visibleCards = cards.filter(({price}) => {
       if (price >= filter.min && price <= filter.max) {
        return true;
       }
    })

    return (
        <>  
        <ul className={css.cardBox}>
            {visibleCards && visibleCards.map((dataCard) => <CardItem key={dataCard.id} data={dataCard}/>)}
        </ul>
        </>
    )
};

export default CardList;