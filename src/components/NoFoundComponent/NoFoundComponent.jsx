import { FaFrownOpen } from "react-icons/fa";
import css from './NoFoundComponent.module.css'

const NoFoundComponent = () => {
    return <div className={css.noFound}>
        <span className={css.noFoundText}>No found cards <FaFrownOpen/></span>
        
    </div>
}

export default NoFoundComponent;