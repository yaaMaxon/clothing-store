import { useSelector } from "react-redux";
import { getCardSelector } from "../../store/selectors";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import CardList from "../../components/CardList/CardList";


const Home = () => {
    const cards = useSelector(getCardSelector);
console.log(cards)
    const min = Math.min(...cards.map(({price}) => price));
    const max = Math.max(...cards.map(({price}) => price));

    // const visibleItems = card.filter((dataFilter) => {
    //     return 
    // })

    return (
        <>  
        <FilterComponent min={min} max={max}/>
        <CardList cards={cards} />
        </>)
        
}
 
export default Home;


