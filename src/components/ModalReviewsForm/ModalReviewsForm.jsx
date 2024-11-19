import { useForm } from "react-hook-form";
import { useState } from "react";
import { postReviewItem } from "../../services/api";
import { nanoid } from "nanoid";
import { AiFillStar } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import css from './ModalReviewsForm.module.css';

const ModalReviewsForm = ({setModalState}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = useState(4);

    const onSubmit = ({name, message}) => {
        const dataReview = {
            name: name.trim(),
            message: message.trim(),
            rating,
            id: nanoid()
        }

        reset()
        console.log(dataReview)
        postReviewItem(dataReview)
    };

    const handleModalClose = () => {
      setModalState(false)
    }

    return <div onSubmit={handleSubmit(onSubmit)} className={css.backdrop}>
        <div className={css.modal}>
         <form className={css.modalForm}>
            <div className={css.modalBox}>
             <p className={css.modalText}>Please write Overall level of satisfaction with your shipping / Delivery Service</p>
             <div className={css.starBox}>
                  {[1,2,3,4,5].map((star, index) => <AiFillStar key={index} className={css.starItem} 
                    style={{color: rating >= star ? '#ffc600' : '#c1c8ce'}} 
                    onClick={() => {setRating(star)}}
                  />)} 
              <span className={css.ratingValue}>{rating}/5</span>
             </div>
            </div>
            <div className={css.modalBox}>
              <label className={css.modalText} 
                     htmlFor="name">
                        Write Your Name
                </label>
              <input id="name"
                     type="text" 
                     name="name"
                     {...register('name', { required: true,
                      minLength: {
                        value: 3,
                        message: 'The name must be more than 3 symbols'
                      },
                     })}
                     className={css.modalInputValue}
                     style={{width: '300px'}}
                     placeholder="Write your name here"
                />
                {errors.name && (<span>{errors.name.message}</span>)}
            </div>
            <div className={css.modalBox}>
             <label className={css.modalText} 
                    htmlFor="review">
                        Write Your Review
             </label>
             <textarea id="review" 
                       name="review" 
                       rows="5" 
                       {...register('message', { required: true, 
                        minLength: {
                        value: 3,
                        message: 'The review must be more than 1 word'
                      },
                       })}
                       className={css.modalInputValue} 
                       placeholder="Write your review here"
             />
             {errors.review && (<span>{errors.review.message}</span>)}
            </div>
             <button type="submit" 
                     className={css.modalBtn}>
                        Send
             </button>
         </form>
        <MdClose className={css.closeBtn}
                 onClick={handleModalClose}
        />
        </div>
    </div>
}

export default ModalReviewsForm;