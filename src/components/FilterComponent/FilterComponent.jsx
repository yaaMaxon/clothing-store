import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import css from './FilterComponent.module.css';
import { changeFilter } from '../../store/filterSlice';
import { MIN_PRICE, MAX_PRICE } from '../../constants/price';

const FilterComponent = () => {
    const dispatch = useDispatch();

    const [min, setMin] = useState(MIN_PRICE)
    const [max, setMax] = useState(MAX_PRICE)

    const handleInput = ([min, max]) => {
    
    const rangeSettings = {
        min,
        max
    }

    setMin(min)
    setMax(max)

    dispatch(changeFilter(rangeSettings))
   } 

   return (   
    <div className={css.filterBox}>
        <span className={css.priceTitle}>PRICES</span>
        <div className={css.rangerBox}>
            <span className={css.rangerBoxValue}>Ranger:</span>
            <div className={css.priceBox}>
                <span className={css.rangerBoxValue}>${min}</span>
                <span className={css.rangerBoxValue}>-</span>
                <span className={css.rangerBoxValue}>${max}</span>
            </div>
        </div>
        <RangeSlider onInput={handleInput} 
                     defaultValue={[MIN_PRICE, MAX_PRICE]}
                     min={MIN_PRICE}
                     max={MAX_PRICE}
                     />
    </div>
   )};

export default FilterComponent;