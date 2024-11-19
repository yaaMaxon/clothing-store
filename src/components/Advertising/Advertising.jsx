import advertisingImg from '../../assets/advertisingImg.png';
import css from './Advertising.module.css';

const Advertising = () => {
    return <div className={css.advertisingBox}>
        <div className={css.advertisingTextBox}>
            <h2 className={css.advertisingTitle}>Adidas Men Running Sneakers</h2>
            <p className={css.advertisingText}>Performance and design. Taken right to the edge.</p>
        <div className={css.advertisingBoxForBtn}>
            <span className={`${css.advertisingText} ${css.advertisingBtn}`}>SHOP NOW</span>
            <span className={css.spanForBorder}></span>
        </div>
        </div>
        <img className={css.advertisingImg} src={advertisingImg} alt='advertisingImg' />
    </div>
}

export default Advertising;