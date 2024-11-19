import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCardSelector } from "../../store/selectors";
 import { getCardItems } from "../../store/operations";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import FilterByBrandComponent from "../../components/FilterByBrandComponent/FilterByBrandComponent";
import CardList from "../../components/CardList/CardList";
import Advertising from "../../components/Advertising/Advertising";
import css from './Home.module.css';


const Home = () => {
    const dispatch = useDispatch()
    const {cards, isLoading, error} = useSelector(getCardSelector);

     useEffect(() => {
        dispatch(getCardItems());
  }, [dispatch]);

    return (
        <section style={{marginBottom: '100px'}}>
        <Advertising/>
        <div className={css.contentHomeBox}>
          <div className={css.filterHomeBox}>
            <FilterComponent/>
            <FilterByBrandComponent cards={cards}/>
          </div>
          <CardList cards={cards} isLoading={isLoading} error={error} />
        </div>
        </section>)
        
}
 
export default Home;


