import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsSelector } from '../../store/selectors';
import { getReviewsItems } from '../../store/operations';
import Advertising from '../../components/Advertising/Advertising';
import ModalReviewsForm from '../../components/ModalReviewsForm/ModalReviewsForm';
import Loader from '../../components/Loader/Loader';
import { AiFillStar } from "react-icons/ai";
import css from './Reviews.module.css';

const Reviews = () => {
    const dispatch = useDispatch();
    const {reviews, isLoading, error} = useSelector(getReviewsSelector);
    const [isModalOpen, setModalState] = useState(false);

    useEffect(() => {
      dispatch(getReviewsItems())
    }, [dispatch])

    const handleModalOpen = () => {
        setModalState(true)
    }
    
    return <>
      <Advertising/>
      <div className={css.reviewsBox}>
        {isLoading && <Loader/>}
        {reviews.length > 0 && <ul className={css.reviewsList}>
            {reviews.map(({id, name, message, rating}) => <li 
              key={id}
              className={css.reviewsItem}
            >
              <h2 className={css.reviewsName}>{name}</h2>
              <div className={css.starList}>
                {[1,2,3,4,5].map((star, index) => <AiFillStar 
                key={index}
                style={{color: rating >= star ? '#ffc600' : '#c1c8ce'}}
              />)}
              </div>
              <p className={css.reviewsMessage}>{message}</p>
            </li>)}
            </ul>}
            <button 
              className={css.reviewsBtn} 
              type="button"
              onClick={handleModalOpen}
              >
               Write Review
            </button>
            {isModalOpen && <ModalReviewsForm setModalState={setModalState}/>}
      </div>
    </>
}

export default Reviews;