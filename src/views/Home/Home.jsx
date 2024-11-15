import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCardSelector } from "../../store/selectors";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import CardList from "../../components/CardList/CardList";
import { getCardItems } from "../../store/operations";


const Home = () => {
    const dispatch = useDispatch()

    const {cards, isLoading, error} = useSelector(getCardSelector);

     useEffect(() => {
        dispatch(getCardItems());
  }, [dispatch]);

    return (
        <section style={{paddingBottom: '40px'}}>  
        <FilterComponent/>
        <CardList cards={cards} isLoading={isLoading} error={error} />
        </section>)
        
}
 
export default Home;


