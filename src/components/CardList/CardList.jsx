import { useSelector } from "react-redux";
import { getFilterSelector } from "../../store/selectors";
import { getFilterByBrandSelector } from "../../store/selectors";
import CardItem from "../CardItem.jsx/CardItem";
import Loader from "../Loader/Loader";
import NoFoundComponent from "../NoFoundComponent/NoFoundComponent";
import css from './CardList.module.css';

const CardList = ({cards, isLoading, error}) => {
    const filter = useSelector(getFilterSelector);
    const filterByBrand = useSelector(getFilterByBrandSelector);

    const visibleCards = cards.filter(({ price, title }) => {
        const isWithinPriceRange = price >= filter.min && price <= filter.max;
        
        const cardTitle = title.toLowerCase();
        const filterTitle = filterByBrand.toLowerCase();
        const isMatchingBrand = cardTitle.includes(filterTitle);
        if (filterTitle === 'all items') {
            return cards;
        }
        
        return isWithinPriceRange && isMatchingBrand;
    });

    return (
        <>  
        {isLoading && <Loader/>}
        {error && <span>{error}</span>}
         {visibleCards.length > 0 ? (
                <ul className={css.cardBox}>
                    {visibleCards.map((dataCard) => (
                        <CardItem key={dataCard.id} data={dataCard} />
                    ))}
                </ul>
            ) : (
                <NoFoundComponent/>
            )}
        </>
    )
};

export default CardList;