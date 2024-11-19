import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByBrandFilter } from '../../store/filterByBrandSlice';
import css from './FilterByBrandComponent.module.css';

const FilterByBrandComponent = ({ cards }) => {
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState("All items");

    const handleClick = (e) => {
        setActiveItem(e.target.textContent);
        dispatch(searchByBrandFilter(e.target.textContent));
    };

    const items = [
        { name: "All items", count: cards.length },
        { name: "Nike", count: 6 },
        { name: "Air Max", count: 2 },
        { name: "Bag", count: 3 }
    ];

    return (
        <div className={css.filterBox}>
            <h3 className={css.filterTitle}>Hot Deals</h3>
            <ul className={css.filterList}>
                {items.map(({name, count}, index) => (
                    <li
                        key={index}
                        className={css.filterItem}
                        onClick={handleClick} 
                        style={{ cursor: 'pointer'}}
                    >
                        <span
                            className={css.filterText}
                            style={{
                                color: activeItem === name ? '#33A0FF' : '#22262a',
                            }}
                        >
                            {name}
                        </span>
                        <span
                            className={css.filterText}
                            style={{
                                color: activeItem === name ? '#33A0FF' : '#9098B1',
                            }}
                        >
                            {count}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterByBrandComponent;

